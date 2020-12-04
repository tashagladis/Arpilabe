import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Personne } from './personne.model';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
 
private ApiServe ="https://localhost:5001/api/personne" 
private search = "https://localhost:5001/api/personne/search"
list! : Personne[];

  
constructor(private link: HttpClient) { 
  
  
}

public sendGetRequest(){
  return this.link.get('https://localhost:5001/api/personne');


}

create(data: any): Observable<any> {
  return this.link.post('https://localhost:5001/api/personne', data);
}

delete(id : any): Observable<any> {
  return this.link.delete(`https://localhost:5001/api/personne/${id}`);
}
searchByName(name : any): Observable<any> {
  return this.link.get(`https://localhost:5001/api/personne/search?lastname=${name}`);
}

SelectDepartement(departement: any): Observable<any> {
  return this.link.get(`https://localhost:5001/api/personne/search?departement=${departement}`);
}
Sort(colonne: any): Observable<any> {
  return this.link.get(`https://localhost:5001/api/personne/search?asc=${colonne}`);
}
update(id : any, data : any): Observable<any> {
  return this.link.put(`https://localhost:5001/api/personne/${id}`, data);
}



}
