const express = require("express");
const Router = express.Router();
const ExcelJS = require('exceljs');
const boughtTicketScheduleModel = require("../models/boughtTicketModel");

// Endpoint to get daily reports
Router.get('/getDailyReports', async (req, res) => {
  try {
    // Retrieve all bought tickets
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
          driverCarPlate: ticket.driverCarPlate,
          totalCost: 0,
          purchasedTickets: [] 
        };
      }

      
      report[route][purchaseDate].seats += 1;
      report[route][purchaseDate].totalCost += ticket.price;
      report[route][purchaseDate].purchasedTickets.push({
        ticketId: ticket._id,
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


Router.get('/download', async (req, res) => {
  try {
   
    const tickets = await boughtTicketScheduleModel.find({});
    
   
    const report = {};

 
    tickets.forEach(ticket => {
      const route = `${ticket.origin} - ${ticket.destination}`;
      const purchaseDate = new Date(ticket.purchaseDateTime).toISOString().split('T')[0]; // Format date as YYYY-MM-DD

      
      if (!report[route]) {
        report[route] = {};
      }

    
      if (!report[route][purchaseDate]) {
        report[route][purchaseDate] = {
          seats: 0,
          driverName: ticket.driverName || "unknown",
          driverCarPlate: ticket.driverCarPlate,
          totalCost: 0,
          purchasedTickets: [] 
        };
      }

   
      report[route][purchaseDate].seats += 1;
      report[route][purchaseDate].totalCost += ticket.price;
      report[route][purchaseDate].purchasedTickets.push({
        ticketId: ticket._id,
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
            driverName: dateReport.driverName,
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
