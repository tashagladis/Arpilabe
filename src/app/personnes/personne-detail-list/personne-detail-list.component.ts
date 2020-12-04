import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/Share/personne.service';


@Component({
  selector: 'app-personne-detail-list',
  templateUrl: './personne-detail-list.component.html',
  styles: [
  ]
})

export class PersonneDetailListComponent implements OnInit {
  public personnes : any 

  constructor(public service : PersonneService) { }

  ngOnInit()  {
    this.service.sendGetRequest().subscribe((data)=>{
      console.log(data);
     // this.products = data;
     this.personnes = data
     } )
  }
}
