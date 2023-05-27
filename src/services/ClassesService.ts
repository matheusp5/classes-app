import { Repository } from "typeorm";
import { WeekDayEnum } from "../WeekDayEnum";
import { Week } from "../database/entities/Week";
import SqliteSource from "../database/SqliteSource";

class ClassesService { 

  private readonly weekRepository: Repository<Week>
  constructor() { this.weekRepository = SqliteSource.getRepository(Week) }

  getDay(): WeekDayEnum {
    const today = new Date()
    const weekDay = today.getDay();
    switch (weekDay) {
      case 1:
        return WeekDayEnum.Segunda
      case 2:
        return WeekDayEnum.Terca
      case 3:
        return WeekDayEnum.Quarta
      case 4:
        return WeekDayEnum.Quinta
      case 5:
        return WeekDayEnum.Sexta
      case 6:
        return WeekDayEnum.Sabado
      default:
        return WeekDayEnum.Domingo
    }
  }

  async getClasses(day: WeekDayEnum) {
    return await this.weekRepository.find({where: {day}})
  }
}

export default new ClassesService()