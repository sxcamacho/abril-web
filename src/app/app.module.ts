import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { Http } from '@angular/http'
import {
    TranslateModule,
    TranslateLoader,
    TranslateStaticLoader,
} from 'ng2-translate/ng2-translate'
import { AppRouting } from './app.routing'
import { AppComponent } from './app.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { LogsPageComponent } from './pages/logs-page/logs-page.component'
import { BaseService } from './services/base.service'
import { AuthService } from './services/auth.service'
import { provideAuth } from 'angular2-jwt'
import { ClientsPageComponent } from './pages/clients-page/clients-page.component'
import { ClientListComponent } from './components/client-list/client-list.component'
import { ClientService } from './services/client.service'

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LogsPageComponent,
        ClientsPageComponent,
        ClientListComponent,
    ],
    imports: [
        BrowserModule,
        AppRouting,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) =>
                new TranslateStaticLoader(http, '/assets/resources', '.json'),
            deps: [Http],
        }),
    ],
    providers: [
        BaseService,
        AuthService,
        ClientService,
        provideAuth({
            headerName: 'Authorization',
            headerPrefix: 'bearer',
            tokenName: 'accessToken',
            tokenGetter: () => localStorage.getItem('accessToken'),
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true,
        }),
    ],
    bootstrap: [AppComponent],
    exports: [TranslateModule],
})
export class AppModule {}
