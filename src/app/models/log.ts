import * as moment from 'moment'

export class Log {
    id: string
    text: string
    type: string
    date: any

    constructor(logData) {
        const { id, text, type, date } = logData

        this.id = id
        this.text = text
        this.type = type
        this.date = moment(date)
    }
}
