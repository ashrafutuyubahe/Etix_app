const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Etix API Documentation",
      version: '1.0.0',
      description: 'Comprehensive API documentation for Etix application',
    },
    servers: [      {
        url: process.env.PROD_SERVER_URL || 'https://etix-mobile-app-deployed-1.onrender.com/',
        description: 'Production server',
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer {token}"',
        },
      },
      schemas: {
        
        Admin: {
          type: 'object',
          required: ['adminEmail', 'adminPassword', 'adminAgency'],
          properties: {
            adminEmail: {
              type: 'string',
              description: 'Email of the admin',
              example: 'admin@etix.com',
            },
            adminPassword: {
              type: 'string',
              format: 'password',
              description: 'Password for the admin account',
              example: 'StrongPassword123',
            },
            adminAgency: {
              type: 'string',
              description: 'The agency the admin belongs to',
              example: 'ABC Travel Agency',
            },
          },
        },
       
        Agent: {
          type: 'object',
          required: ['agentName', 'agentEmail', 'agentPassword', 'agentAgency', 'agentWorkStation'],
          properties: {
            agentName: {
              type: 'string',
              description: 'Name of the agent',
              example: 'John Doe',
            },
            agentEmail: {
              type: 'string',
              description: 'Email address of the agent',
              example: 'john.doe@etix.com',
            },
            agentPassword: {
              type: 'string',
              format: 'password',
              description: 'Password for the agent account',
              example: 'AgentPassword123',
            },
            agentAgency: {
              type: 'string',
              description: 'Agency of the agent',
              example: 'XYZ Travel Agency',
            },
            agentWorkStation: {
              type: 'string',
              description: 'Workstation of the agent',
              example: 'Kigali Bus Terminal',
            },
          },
        },
       
        BoughtTicket: {
          type: 'object',
          required: ['ticketId', 'userName', 'origin', 'destination', 'price', 'departureTime', 'arrivalTime'],
          properties: {
            ticketId: {
              type: 'string',
              description: 'Unique ticket ID',
              example: 'TICKET12345',
            },
            userName: {
              type: 'string',
              description: 'Name of the user who bought the ticket',
              example: 'Alice',
            },
            origin: {
              type: 'string',
              description: 'Origin of the trip',
              example: 'Kigali',
            },
            destination: {
              type: 'string',
              description: 'Destination of the trip',
              example: 'Huye',
            },
            price: {
              type: 'number',
              description: 'Price of the ticket',
              example: 5000,
            },
            departureTime: {
              type: 'string',
              format: 'date-time',
              description: 'Scheduled departure time',
              example: '2024-01-01T10:00:00Z',
            },
            arrivalTime: {
              type: 'string',
              format: 'date-time',
              description: 'Scheduled arrival time',
              example: '2024-01-01T12:00:00Z',
            },
            paymentStatus: {
              type: 'string',
              enum: ['successful', 'pending', 'failed'],
              description: 'Payment status of the ticket',
              example: 'successful',
            },
            qrCode: {
              type: 'string',
              description: 'QR code for ticket validation',
              example: 'https://example.com/qrcode.png',
            },
            vehicleNumber: {
              type: 'string',
              description: 'Vehicle number for the trip',
              example: 'RAB 123C',
            },
            driverName: {
              type: 'string',
              description: 'Driver for the trip',
              example: 'John Doe',
            },
            agency: {
              type: 'string',
              description: 'Agency providing the trip',
              example: 'ABC Travel Agency',
            },
          },
        },
       
        Driver: {
          type: 'object',
          required: ['driverName', 'driverPassword', 'driverCar', 'driverAgency'],
          properties: {
            driverName: {
              type: 'string',
              description: 'Name of the driver',
              example: 'John Driver',
            },
            driverPassword: {
              type: 'string',
              format: 'password',
              description: 'Password for the driver account',
              example: 'DriverPassword123',
            },
            driverCar: {
              type: 'string',
              description: 'Car assigned to the driver',
              example: 'Toyota Hiace',
            },
            driverAgency: {
              type: 'string',
              description: 'Agency the driver works for',
              example: 'ABC Travel Agency',
            },
          },
        },
       
        TicketScheduleModel: {
          type: 'object',
          required: ['carPlate', 'origin', 'destination', 'departureTime', 'arrivalTime', 'cost', 'driverName', 'agency'],
          properties: {
            carPlate: {
              type: 'string',
              description: 'Car plate number',
              example: 'RAB 123C',
            },
            origin: {
              type: 'string',
              description: 'Trip origin',
              example: 'Kigali',
            },
            destination: {
              type: 'string',
              description: 'Trip destination',
              example: 'Huye',
            },
            departureTime: {
              type: 'string',
              format: 'date-time',
              description: 'Departure time for the trip',
              example: '2024-01-01T10:00:00Z',
            },
            arrivalTime: {
              type: 'string',
              format: 'date-time',
              description: 'Arrival time for the trip',
              example: '2024-01-01T12:00:00Z',
            },
            cost: {
              type: 'number',
              description: 'Cost of the trip',
              example: 5000,
            },
            driverName: {
              type: 'string',
              description: 'Driver for the trip',
              example: 'John Driver',
            },
            agency: {
              type: 'string',
              description: 'Agency offering the trip',
              example: 'ABC Travel Agency',
            },
          },
        },
      
        Ticket: {
          type: 'object',
          required: ['origin', 'destination', 'agency', 'departureTime', 'arrivalTime', 'driverName', 'driverCarPlate', 'price'],
          properties: {
            origin: {
              type: 'string',
              description: 'Trip origin',
              example: 'Kigali',
            },
            destination: {
              type: 'string',
              description: 'Trip destination',
              example: 'Huye',
            },
            agency: {
              type: 'string',
              description: 'Agency offering the trip',
              example: 'ABC Travel Agency',
            },
            departureTime: {
              type: 'string',
              format: 'date-time',
              description: 'Departure time for the trip',
              example: '2024-01-01T10:00:00Z',
            },
            arrivalTime: {
              type: 'string',
              format: 'date-time',
              description: 'Arrival time for the trip',
              example: '2024-01-01T12:00:00Z',
            },
            driverName: {
              type: 'string',
              description: 'Driver for the trip',
              example: 'John Driver',
            },
            driverCarPlate: {
              type: 'string',
              description: 'Car plate number',
              example: 'RAB 123C',
            },
            price: {
              type: 'number',
              description: 'Ticket price',
              example: 5000,
            },
          },
        },
       
        User: {
          type: 'object',
          required: ['userName', 'userPassword', 'userPhoneNumber', 'userEmail'],
          properties: {
            userName: {
              type: 'string',
              description: 'User name',
              example: 'Jane Doe',
            },
            userPassword: {
              type: 'string',
              format: 'password',
              description: 'User password',
              example: 'UserPassword123',
            },
            userPhoneNumber: {
              type: 'number',
              description: 'User phone number',
              example: 250123456789,
            },
            userEmail: {
                type: 'string',
                description: 'User email address',
                example: 'jane.doe@example.com',
              },
            },
          },
        },
      },
      security: [
        {
          bearerAuth: [],
        },
      ],
    },
    apis: ['./routes/*.js'], 
  };
  
  const swaggerSpec = swaggerJsdoc(options);
  
  module.exports = swaggerSpec;
  