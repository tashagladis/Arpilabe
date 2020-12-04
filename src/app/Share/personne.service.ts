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
  return this.link.delete(`${this.ApiServe}/${id}`);
}
searchByName(name : any): Observable<any> {
  return this.link.get(`${this.search}?lastname=${name}`);
}
update(id : any, data : any): Observable<any> {
  return this.link.put(`${this.ApiServe}/${id}`, data);
}



}
