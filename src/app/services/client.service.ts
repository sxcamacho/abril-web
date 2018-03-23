import { Injectable } from '@angular/core'
import { BaseService } from './base.service'
import { Client } from '../models/client'

@Injectable()
export class ClientService {
    constructor(private baseService: BaseService) {}

    getClients() {
        return this.baseService
            .executeGet('clients', null)
            .map(res => {
                debugger
                let result = new Array<Client>()
                result = res.map(item => {
                    return new Client(item)
                })
                return result
            })
            .catch(err => {
                debugger
                this.baseService.handleError
            })
    }
}
