import express from 'express'
import path from 'path'
import getRoutes from './routes/stats.js' 
import postRoutes from './routes/comment.js' 

const __dirname = path.resolve()
const PORT = 3000
const app = express()

app.use(express.static(path.resolve(__dirname, 'public')))

app.use(getRoutes)
app.use(postRoutes)

/* app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
}) */

/* app.get('/stats', (req, res) =>{
    res.send('<p>aaa<p>');
}) */



app.listen(PORT, () =>{
    console.log(`Server has been started on port ${PORT}...`)
})