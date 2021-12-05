import dotenv from "dotenv";
import express from "express";
import expressLayouts from "express-ejs-layouts";
import path from "path";
import * as routes from "./routes";


dotenv.config();

const app = express();

// Setup Layout
app.use(expressLayouts);
app.set('layout','layouts/layout');
// Setting the view engine
app.set('view engine','ejs');
// Setting for the root path for views directory
app.set("views",path.join(__dirname,'views'));


// Setting for the root path for public directory
 app.use(express.static(path.join(__dirname,'public')));



// Configure routes
routes.register( app );

const PORT = process.env.SERVER_PORT;

app.listen(PORT,()=>{
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${PORT}`)
})