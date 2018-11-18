import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, AfterViewInit ,Input,ElementRef,  ViewChild } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';
import {McdosService} from '../services/mcdos.service';
declare var google: any;
@Component({
  selector: 'app-search-mcdos',
  templateUrl: './search-mcdos.component.html',
  styleUrls: ['./search-mcdos.component.css']
})
export class SearchMcdosComponent implements OnInit {

  constructor(private mcdosService:McdosService,public ngxSmartModalService: NgxSmartModalService) { }
  datos: Array<any> = [];
  macdos :any={};
  uluru: Object = { lat:61.580705 , lng:-149.429849 };
  map: Object;
  marker: Object;
  zoom: number;
  @ViewChild('map') mapRef: ElementRef;
  // init maps for a random lat on lng
  ngOnInit() {
    setTimeout(() => {
      this.map = new google.maps.Map(this.mapRef.nativeElement, {
        zoom: 16,
        center: this.uluru
      });
      this.marker = new google.maps.Marker({
        position: this.uluru,
        map: this.map
      });

    }, 2000)
  }
  // auto sugg method that called when user try to find mcdonalds
  searchMcdos(term: string): void {
    this.macdos={};
    if(term.length>=2){
      
     this.mcdosService.getMcdosByState(term)
      .subscribe(res => {
      this.macdos=res;
      },
        err =>console.log(''),
        () => console.log(''));
    }

  }
  // when user click on any of the list of macdo the poppup is opened with google map location of this macdo
  onMcdoSelect(macdo)
  {
    this.uluru = { lat: macdo.longitude, lng: macdo.latitude };
    this.map = new google.maps.Map(this.mapRef.nativeElement, {
      zoom: 16,
      center: this.uluru
    });
    this.marker = new google.maps.Marker({
      position: this.uluru,
      map: this.map
    });
  
    this.ngxSmartModalService.setModalData(macdo, 'myModalo');
    this.ngxSmartModalService.getModal('myModalo').open();
   
  }
}
