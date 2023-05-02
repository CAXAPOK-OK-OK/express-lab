import { Router } from "express";
const router = Router();

let comments = [
  { id: 1, author: "John", text: "Nice post!" },
  { id: 2, author: "Jane", text: "Thanks for sharing." },
];
const us = { user_agent: 0 };

router.post("/comments", (req, res) => {
  let data = [];

  req.on("data", (chunk) => {
    data.push(chunk);
  });

  req.on("end", () => {
    data = Buffer.concat(data).toString();
    const newComment = JSON.parse(data);

    newComment.id = comments.length + 1;
    comments.push(newComment);

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(comments));
  });
});

router.get("/comments", (req, res) =>{
    /* res.end(`<table>
    <tr><th>User-agent:</th><th>Request:</th></tr>
    <tr><td>${req.headers[id]}</td><td>${autor}</td></tr>
    </table>`); */
    res.json({comments})
})

export default router;
