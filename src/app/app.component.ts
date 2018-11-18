import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { NgxSmartModalModule } from 'ngx-smart-modal'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mcdonalds';
  cookieValue = 'UNKNOWN';
  constructor(private translate: TranslateService,private cookieService: CookieService ) {
//if the user has a cookie of default lng used if not set en as default
     this.cookieValue = this.cookieService.get('lng');
     if(this.cookieValue===""){
       translate.setDefaultLang('en');
       translate.use('en');
     }else
     {
       translate.setDefaultLang(this.cookieValue);
       translate.use(this.cookieValue);
     }
  }
  switchLanguage(language: string) {
  this.translate.use(language);
}
}
