import express from "express";
import cors from 'cors'
import authRouter from "./src/routers/auth.router.mjs";
import { PORT } from "./src/config/index.mjs";

const app = express();
app.use(express.json());
app.use(cors())


app.get('/', (req, res)=>{
  res.send("hello wwebinar app")
})

app.use('/auth', authRouter)

app.listen(PORT || 8080, (err) => {
  if (err) {
    return console.log(err, "app running error");
  }
  console.log("Server successfily started...");
});
