import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonneService } from 'src/app/Share/personne.service';
import { Personne } from 'src/app/Share/personne.model';


@Component({
  selector: 'app-personne-detail-list',
  templateUrl: './personne-detail-list.component.html',
  styles: [
  ]
})

export class PersonneDetailListComponent implements OnInit {
  @Output() personToEdit = new EventEmitter<Personne>();

  currentProduct: Personne = new Personne(0, '', '', '', '', '', '', new Date);
  public personnes: any
  //currentProduct:any = null;
  currentIndex = -1;
  name = '';
  departement = '';
  colonne = '';

  departements = [
    { id: 1, name: "IT" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "Direction" }
  ];
  selectedValue = null;

  constructor(public service: PersonneService) { }

  ngOnInit() {
    this.readPersonnes();
  }

  readPersonnes(): void {
    this.service.sendGetRequest().subscribe((data) => {
      console.log(data);
      // this.products = data;
      this.personnes = data
    })
  }

  refresh(): void {
    this.readPersonnes();
    this.currentProduct = new Personne(0, '', '', '', '', '', '', new Date);
    this.currentIndex = -1;
  }

  setCurrentProduct(personne: any, index: any): void {
    this.currentProduct = personne;
    this.currentIndex = index;
    this.personToEdit.emit(personne);
  }

  deleteProduct(index: any): void {
    console.log(index);
    this.service.delete(index)
      .subscribe(
        response => {
          console.log(response);
          this.readPersonnes();
        },
        error => {
          console.log(error);
        });
  }
  searchByName(): void {
    this.service.searchByName(this.name)
      .subscribe(
        personnes => {
          this.personnes = personnes;
          console.log(this.personnes);
        },
        error => {
          console.log(error);
        });
  }
  SelectDepartement(): void {
    this.service.SelectDepartement(this.selectedValue)
      .subscribe(
        personnes => {
          this.personnes = personnes;
          console.log(this.selectedValue);
        },
        error => {
          console.log(error);
        });
  }
  Sort(): void {
    this.service.Sort(this.colonne)
      .subscribe(
        personnes => {
          this.personnes = personnes;
          console.log(this.personnes);
        },
        error => {
          console.log(error);
        });
  }
}
