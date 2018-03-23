import { Component, OnInit, Input } from '@angular/core'
import { Client } from '../../models/client'
import { AuthService } from '../../services/auth.service'
import { ClientService } from '../../services/client.service'

@Component({
    selector: 'app-clients-page',
    templateUrl: './clients-page.component.html',
    styleUrls: ['./clients-page.component.css'],
})
export class ClientsPageComponent implements OnInit {
    loading: boolean
    clients: Array<Client>

    constructor(
        private authService: AuthService,
        private clientService: ClientService
    ) {
        this.clients = new Array<Client>()
    }

    ngOnInit() {
        this.loadClients()
    }

    loadClients() {
        debugger
        this.loading = true

        this.clientService.getClients().subscribe(
            res => {
                this.clients = res.map(item => new Client(item))
            },
            error => {
                console.error(error)
                //error action
            },
            () => {
                //common end action
                this.loading = false
            }
        )
    }
}
