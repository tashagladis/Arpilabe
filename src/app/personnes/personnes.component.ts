import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Share/personne.model';

@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styles: [
  ]
})
export class PersonnesComponent implements OnInit {
  @Input() personToEdit: any;
  constructor() { }

  ngOnInit(): void {
  }

  getPersonToEdit(valeur: any) {
    this.personToEdit = valeur;
  }

}
