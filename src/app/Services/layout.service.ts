import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newLayout } from '../Interfaces/newLayout';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {



  apiUrl:string = "https://localhost:7277/";
  constructor(private http:HttpClient) { }

  allProjects:newLayout[]=[];

  addNewProject(){

  }

  editProject(){

  }

  deleteProject(){
    
  }
}
