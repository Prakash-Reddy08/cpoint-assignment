const express = require('express');
const cors = require('cors');
const connectDB = require('./database/connectDB');
const studentRouter = require('./routes/StudentRoutes')

const app = express();
const PORT = 5000;
connectDB();
app.use(cors({
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000']
}));
app.use(express.json());

app.use('/api', studentRouter)

app.listen(PORT, () => {
    console.log('server started running on port ' + PORT);
})