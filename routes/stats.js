import { Router } from "express";
const router = Router();

const us = { user_agent: 0 };

router.get("/stats", (req, res) => {
    us.user_agent++;
    res.setHeader("Content-Type", "text/html");
    res.end(`<table>
    <tr><th>User-agent:</th><th>Request:</th></tr>
    <tr><td>${req.headers["user-agent"]}</td><td>${us.user_agent}</td></tr>
    </table>`);
});



export default router;
