import { Component, OnInit, Input } from '@angular/core'
import { Client } from '../../models/client'

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
    @Input() clients: Array<Client>
    listTitle: 'clients'

    constructor() {}

    ngOnInit() {}
}
