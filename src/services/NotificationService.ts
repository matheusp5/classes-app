import axios from "axios"

class NotificationService {

  async sendNotify(pushToken: string, title: string, content: string) {
    return (await axios.post("https://exp.host/--/api/v2/push/send", {
      to: pushToken,
      sound: "default",
      title,
      body: content,
      data: {data: "test"}
    }, {
      headers: {
        "Accept": "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      }
    })).data
  }
}

export default new NotificationService()