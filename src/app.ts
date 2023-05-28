import express, { Request, Response } from "express"
import MysqlSource from "./database/MysqlSource"
import ClassesService from "./services/ClassesService"
import NotificationService from "./services/NotificationService"
import Days from "../pages/utils/Days"

const app = express()
app.use(express.json())

app.get("/day/:day", async (req: Request, res: Response) => {
  const {classes}: any = await ClassesService.getClasses(Number(req.params.day))
  res.send({
    status: "success",
    content: classes
  })
})

app.patch("/day/:day", async (req: Request, res: Response) => {
  const result = await ClassesService.uptadeClass(Number(req.params.day), req.body.classes)
  res.send({
    status: "success",
    content: result
  })
})

app.get("/day", async (req: Request, res: Response) => {
  const {...segunda} = await ClassesService.getClasses(Number(1))
  const {...terca} = await ClassesService.getClasses(Number(2))
  const {...quarta} = await ClassesService.getClasses(Number(3))
  const {...quinta} = await ClassesService.getClasses(Number(4))
  const {...sexta} = await ClassesService.getClasses(Number(5))
   
  res.send({
    status: "success",
    content: [
      segunda.classes,
      terca.classes,
      quarta.classes,
      quinta.classes,
      sexta.classes
    ]
  })
})


MysqlSource.initialize().then(async () => {
  console.log("Database updated! @ofmxtheuuz")  

  app.listen(3030, async () => {
    console.log("Server running on port 3030")
    const day = ClassesService.getDay() 
    if(day == 0 || day == 6) {console.log("Se diverte irmão!") } else {
      const result: any = await ClassesService.getClasses(day)
      const classes: string[] = result.classes
      setInterval(async () => {
        console.log(await NotificationService.sendNotify("ExponentPushToken[GvaeckMGJJobwr6bJbKXvF]", "Arrume a mochila! " + Days[day], classes.join("\n")))
      }, 3000)
    }
  })
})

  // const repo = MysqlSource.getRepository(Week)
  // repo.save({
  //   day: WeekDayEnum.Segunda,
  //   classes: ['História', 'Inglês', 'Biologia', 'Física', 'Geografia', 'Matemática', 'Artes']
  // })
  // await repo.save({
  //   day: 2,
  //   classes: ['Matemática', 'Português', 'Física']
  // })
  // await repo.save({
  //   day: 3,
  //   classes: ['Produção de texto', 'Química', 'Português']
  // })
  // await repo.save({
  //   day: 4,
  //   classes: ['Inglês', 'Projeto de vida', 'Empreendedorismo', 'Português']
  // })
  // await repo.save({
  //   day: 5,
  //   classes: ['Matemática', 'Artes', 'Inglês', 'Geografia', 'Química']
  // })