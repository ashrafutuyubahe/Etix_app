const express = require('express');
const Router = express.Router();
const ExcelJS = require('exceljs');
const boughtTicketScheduleModel = require('../models/boughtTicketModel');

/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: API for managing ticket reports
 */

/**
 * @swagger
 * /reports/getDailyReports:
 *   get:
 *     tags: [Reports]
 *     summary: Get daily reports
 *     responses:
 *       200:
 *         description: Daily reports retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   route:
 *                     type: string
 *                     example: "Kigali - Huye"
 *                   dates:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         date:
 *                           type: string
 *                           format: date
 *                           example: "2024-10-01"
 *                         seats:
 *                           type: integer
 *                           example: 15
 *                         driverName:
 *                           type: string
 *                           example: "David"
 *                         driverCarPlate:
 *                           type: string
 *                           example: "RAB 123C"
 *                         totalCost:
 *                           type: number
 *                           example: 30000.00
 *                         purchasedTickets:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:
 *                               ticketId:
 *                                 type: string
 *                                 example: "TICKET12345"
 *                               userName:
 *                                 type: string
 *                                 example: "Alice"
 *                               price:
 *                                 type: number
 *                                 example: 2000.00
 *                               purchaseDateTime:
 *                                 type: string
 *                                 format: date-time
 *                                 example: "2024-10-01T12:34:56Z"
 *       500:
 *         description: Error generating daily reports
 */
Router.get('/getDailyReports', async (req, res) => {
    try {
        const tickets = await boughtTicketScheduleModel.find({});
        const report = {};

        tickets.forEach(ticket => {
            const route = `${ticket.origin} - ${ticket.destination}`;
            const purchaseDate = new Date(ticket.purchaseDateTime).toISOString().split('T')[0];
            const vehicleNumber = ticket.vehicleNumber;
            const driverName = ticket.driverName || 'David';

            if (!report[route]) {
                report[route] = {};
            }

            if (!report[route][purchaseDate]) {
                report[route][purchaseDate] = {
                    seats: 0,
                    driverName: driverName,
                    driverCarPlate: vehicleNumber || 'Unknown',
                    totalCost: 0,
                    purchasedTickets: []
                };
            }

            report[route][purchaseDate].seats += 1;
            report[route][purchaseDate].totalCost += ticket.price;
            report[route][purchaseDate].purchasedTickets.push({
                ticketId: ticket.ticketId,
                userName: ticket.userName,
                price: ticket.price,
                purchaseDateTime: ticket.purchaseDateTime
            });
        });

        const reportArray = Object.keys(report).map(route => {
            return {
                route,
                dates: Object.keys(report[route]).map(date => ({
                    date,
                    ...report[route][date]
                }))
            };
        });

        res.json(reportArray);
    } catch (error) {
        console.error('Error generating daily reports:', error);
        res.status(500).send('Error generating daily reports');
    }
});

/**
 * @swagger
 * /reports/getAllTickets:
 *   get:
 *     tags: [Reports]
 *     summary: Get all tickets
 *     responses:
 *       200:
 *         description: Tickets retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ticketId:
 *                     type: string
 *                     example: "TICKET12345"
 *                   userName:
 *                     type: string
 *                     example: "Alice"
 *                   origin:
 *                     type: string
 *                     example: "Kigali"
 *                   destination:
 *                     type: string
 *                     example: "Huye"
 *                   price:
 *                     type: number
 *                     example: 2000.00
 *                   purchaseDateTime:
 *                     type: string
 *                     format: date-time
 *                     example: "2024-10-01T12:34:56Z"
 *                   vehicleNumber:
 *                     type: string
 *                     example: "RAB 123C"
 *       500:
 *         description: Error retrieving tickets
 */
Router.get('/getAllTickets', async (req, res) => {
    try {
        const tickets = await boughtTicketScheduleModel.find({});
        res.json(tickets);
    } catch (err) {
        console.error('Error retrieving tickets:', err);
        res.status(500).json({ error: "Error retrieving tickets" });
    }
});

/**
 * @swagger
 * /reports/download:
 *   get:
 *     tags: [Reports]
 *     summary: Download daily report as an Excel file
 *     responses:
 *       200:
 *         description: Daily report downloaded successfully
 *       500:
 *         description: Error generating file
 */
Router.get('/download', async (req, res) => {
    try {
        const tickets = await boughtTicketScheduleModel.find({});
        const report = {};

        tickets.forEach(ticket => {
            const route = `${ticket.origin} - ${ticket.destination}`;
            const purchaseDate = new Date(ticket.purchaseDateTime).toISOString().split('T')[0];

            if (!report[route]) {
                report[route] = {};
            }

            if (!report[route][purchaseDate]) {
                report[route][purchaseDate] = {
                    seats: 0,
                    driverName: ticket.driverName || "unknown",
                    driverCarPlate: ticket.vehicleNumber || "N/A",
                    totalCost: 0,
                    purchasedTickets: []
                };
            }

            report[route][purchaseDate].seats += 1;
            report[route][purchaseDate].totalCost += ticket.price;
            report[route][purchaseDate].purchasedTickets.push({
                ticketId: ticket.ticketId,
                userName: ticket.userName,
                price: ticket.price,
                purchaseDateTime: ticket.purchaseDateTime
            });
        });

        const reportArray = Object.keys(report).map(route => {
            return {
                route,
                dates: Object.keys(report[route]).map(date => ({
                    date,
                    ...report[route][date]
                }))
            };
        });

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Daily Report');

        worksheet.columns = [
            { header: 'Route', key: 'route', width: 25 },
            { header: 'Date', key: 'date', width: 15 },
            { header: 'Driver Name', key: 'driverName', width: 20 },
            { header: 'Driver Car Plate', key: 'driverCarPlate', width: 20 },
            { header: 'Total Seats', key: 'seats', width: 15 },
            { header: 'Total Cost', key: 'totalCost', width: 15 },
            { header: 'Ticket ID', key: 'ticketId', width: 20 },
            { header: 'User Name', key: 'userName', width: 20 },
            { header: 'Price', key: 'price', width: 10 },
            { header: 'Purchase Date', key: 'purchaseDateTime', width: 20 }
        ];

        reportArray.forEach(routeReport => {
            routeReport.dates.forEach(dateReport => {
                dateReport.purchasedTickets.forEach(ticket => {
                    worksheet.addRow({
                        route: routeReport.route,
                        date: dateReport.date,
                        driverName: dateReport.driverName || "David",
                        driverCarPlate: dateReport.driverCarPlate,
                        seats: dateReport.seats,
                        totalCost: dateReport.totalCost.toFixed(2),
                        ticketId: ticket.ticketId,
                        userName: ticket.userName,
                        price: ticket.price.toFixed(2),
                        purchaseDateTime: new Date(ticket.purchaseDateTime).toLocaleString()
                    });
                });
            });
        });

        res.setHeader('Content-Disposition', 'attachment; filename=Daily_Report.xlsx');
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        await workbook.xlsx.write(res);
        res.end();
    } catch (error) {
        console.error('Error generating file:', error);
        res.status(500).send('Error generating file');
    }
});

module.exports = Router;
