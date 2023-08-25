import {bootstrapApplication} from '@angular/platform-browser'
import {AppComponent} from './app/app.component'
import {provideStore} from '@ngrx/store'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app/app.routes'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {isDevMode} from '@angular/core'

bootstrapApplication(AppComponent, {
  providers: [
    provideStore(),
    provideRouter(appRoutes),
    provideStoreDevtools({maxAge: 25, logOnly: !isDevMode(), autoPause:true, trace:false, traceLimit:75}),
  ],
})
