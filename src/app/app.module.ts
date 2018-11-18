import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HttpModule } from "@angular/http";
import { CookieService } from 'ngx-cookie-service';
import { McdosService } from "./services/mcdos.service";
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SearchMcdosComponent } from './search-mcdos/search-mcdos.component';
import { appRoutes } from "./app.route";
import { HeaderComponent } from './header/header.component';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    SearchMcdosComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [{provide: McdosService, useClass: McdosService},CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
