import { Component, OnInit, Input } from '@angular/core';
import { PersonneService } from 'src/app/Share/personne.service';
import { Personne } from 'src/app/Share/personne.model';
import { from } from 'rxjs';
@Component({
  selector: 'app-personne-detail',
  templateUrl: './personne-detail.component.html',
  styles: [
  ]
})
export class PersonneDetailComponent implements OnInit {
  @Input() personne: any;//| undefined;
  submitted = false;

  // @Input() personToEdit: any;

  constructor(private service: PersonneService) { }

  ngOnInit(): void {
    // if (this.personToEdit && this.personToEdit.ID != null) {
    //   this.personne = this.personToEdit;
    // }
    this.personne = new Personne(0, '', '', '', '', '', '', new Date);

  }

  updatePersonne():void {
    const data = {
      ID: this.personne.ID,
      Email: this.personne.Email,
      Phone: this.personne.Phone,
      Lastname: this.personne.Lastname,
      Firstname: this.personne.Firstname,
      Birthday: this.personne.Birthday,
      Departement: this.personne.Departement,
      Note: this.personne.Note
    };


    this.service.update(this.personne.ID,data )
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  createPersonne(): void {

    const data = {
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
