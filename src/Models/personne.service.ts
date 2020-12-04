import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Personne } from './personne.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
 
private ApiServe ="https://localhost:5001/api" 
private search = "https://localhost:5001/api/search"

  
constructor(private link: HttpClient) { 

  
}

public sendGetRequest(){
  return this.link.get(this.ApiServe);


}



}
