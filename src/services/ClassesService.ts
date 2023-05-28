import { Repository } from "typeorm";
import { Week } from "../database/entities/Week";
import MysqlSource from "../database/MysqlSource";
import { WeekDayEnum } from "../WeekDayEnum";

class ClassesService { 

  private readonly weekRepository: Repository<Week>
  constructor() { this.weekRepository = MysqlSource.getRepository(Week) }

  getDay(): number {
    const today = new Date()
    return today.getDay();
  }

  async getClasses(day: number) {
    return await this.weekRepository.findOne({where: {day}})
  }

  async uptadeClass(day: WeekDayEnum, classes: string[]) {
    return await this.weekRepository.update({day}, {
      classes
    })
  }
}

export default new ClassesService()