import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  apiUrl:string = "https://localhost:7277/";
  constructor(private http:HttpClient) { }
}
