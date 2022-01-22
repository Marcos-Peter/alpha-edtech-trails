import { EMPLOYEES } from "../employees.js";
import express, { response } from "express";

const router = express.Router();

router.get("/:sector", (req, res) => {
    const sector = req.params.sector;
    const filteredEmployees =
        EMPLOYEES.filter((employee) => employee.setor === sector)

    res.json(filteredEmployees);
});



export default router;