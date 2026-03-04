// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
var cors = require('cors');
var corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 // For legacy browser support
}
/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();



/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env`
 */
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(cors(corsOptions));
app.use(express.json());
app.set("orderitem1" , {})
/* Define a route for the root path ("/")
 using the HTTP GET method */
 //Action when the endpoint recieves GET:
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server test");
  
  
});
app.post('/', (req: Request, res: Response) => {
  // res.send("POST Request Called"); // as response
   res.send(req.body);
});
app.get('/cart', (req: Request, res: Response) => {
  // res.send("POST Request Called"); // as response
  
});


 //Action when the endpoint recieves POST:
app.post('/addtoorder', (req: Request, res: Response) => {
      
  app.set("orderitem1" , req.body);
  // res.send("POST Request Called"); // as response
   res.send(req.body);
  });
  app.get('/addtoorder', (req: Request, res: Response) => {
    var or = req.app.get('orderitem1');
   res.send(or);
});



/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
