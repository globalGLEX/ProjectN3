// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const Database = require('better-sqlite3');
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
app.post('/cart', (req: Request, res: Response) => {
  // res.send("POST Request Called"); // as response
  res.send(req.body);
});

//const array2: any[] = [];
 //Action when the endpoint recieves POST:
app.post('/checkout', (req: Request, res: Response) => {
      
  app.set("checkout1" , req.body);
  const db = new Database('orders.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orderTime TEXT NOT NULL,
    client TEXT NOT NULL,
    orderText TEXT NOT NULL
  )
`);
const insert = db.prepare('INSERT INTO orders (orderTime, client, orderText) VALUES (?, ?, ?)');
// Execute the statement with different values


const orderTime = req.body.orderTime;
const client = req.body.orderId;
const orderText = req.body.order;
console.log("req.body " + req.body.cartId)
//console.log("vb cartid " + req.body[0].cartId)
insert.run(orderTime, client, JSON.stringify(orderText));
// Query the database for all users
const rows = db.prepare('SELECT * FROM orders').all();
// Display the results
console.log(rows);
// Close the database connection
db.close();

   res.send(req.body);
  });
app.get('/checkout', (req: Request, res: Response) => {
    
    const db = new Database('orders.db');
    const rows = db.prepare('SELECT orderText FROM orders ORDER BY id DESC LIMIT 1').get(); //one with highest id
    db.close();
   res.send(rows.orderText);
  
});



/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
