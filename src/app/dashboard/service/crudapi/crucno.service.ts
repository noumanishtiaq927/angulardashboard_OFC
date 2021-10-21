import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class CrucnoService {

  constructor( private http:HttpClient) { }
  url = 'https://v1.nocodeapi.com/noumanishtiaq927/airtable/iAdleSYcXFZAUmiB?tableName=users'
  getData(){
    return this.http.get(this.url)
  }
}
