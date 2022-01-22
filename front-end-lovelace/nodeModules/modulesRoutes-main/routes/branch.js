import express from "express";
import { EMPLOYEES } from "../employees.js";


const router = express.Router();
router.get('/', (req, res) => {
    const employeesBRANCH = EMPLOYEES.sort((employee1, employee2) => employee1.nome.localeCompare(employee2.nome)).map((employee) => employee);

    res.json(employeesBRANCH);

})


export default router;