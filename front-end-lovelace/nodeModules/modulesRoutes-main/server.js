import express from 'express';
import birthdayRoute from './routes/birthday.js';
import sectorRoute from './routes/sector.js';
import ramalRoute from './routes/branch.js';



const app = express();
app.use("/birthday", birthdayRoute)
app.use("/sector", sectorRoute)
app.use("/ramal", branchRoute);

app.listen(8080, () => {
    console.log('Hello World!');
})