import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/Share/personne.service';
import{Personne} from 'src/app/Share/personne.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styles: [
  ]
})
export class PersonneDetailComponent implements OnInit {
  personne : Personne =new Personne(0,'','','','','','',new Date);
  submitted = false;

  constructor( private service:PersonneService) { }

  ngOnInit(): void {

   
  }
  createPersonne(): void {

    const data  = {
      Email: this.personne.Email,
      Phone: this.personne.Phone,
      Lastname: this.personne.Lastname,
      Firstname: this.personne.Firstname,
      Birthday: this.personne.Birthday,
      Departement: this.personne.Departement,
      Note: this.personne.Note
    };
  

    this.service.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


  newProduct(): void {
    this.submitted = false;
  
  }

}
