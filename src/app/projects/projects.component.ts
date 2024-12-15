import { Component } from '@angular/core';
import { projectsTable } from '../Interfaces/projectsTable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  Projects: projectsTable[] = [
    {
      ProjectId: "TNLS001",
      ProjectName: "Chennai Greenfield Layout",
      Type: "Residential",
      Category: "Layout",
      Zone: "Chennai"
    },
    {
      ProjectId: "TNLS002",
      ProjectName: "Coimbatore Elite Township",
      Type: "Residential",
      Category: "Layout",
      Zone: "Coimbatore"
    },
    {
      ProjectId: "TNLS003",
      ProjectName: "Madurai Sunrise Valley",
      Type: "Residential",
      Category: "Layout",
      Zone: "Madurai"
    },
    {
      ProjectId: "TNLS004",
      ProjectName: "Trichy Lakeview Layout",
      Type: "Residential",
      Category: "Layout",
      Zone: "Tiruchirappalli"
    },
    {
      ProjectId: "TNLS005",
      ProjectName: "Salem Urban Paradise",
      Type: "Residential",
      Category: "Layout",
      Zone: "Salem"
    },
    {
      ProjectId: "TNLS006",
      ProjectName: "ECR Ocean View Layout",
      Type: "Residential",
      Category: "Layout",
      Zone: "Chennai"
    },
    {
      ProjectId: "TNLS007",
      ProjectName: "Ooty Mountain Breeze",
      Type: "Residential",
      Category: "Layout",
      Zone: "Ooty"
    },
    {
      ProjectId: "TNLS008",
      ProjectName: "Thanjavur Heritage Layout",
      Type: "Residential",
      Category: "Layout",
      Zone: "Thanjavur"
    },
    {
      ProjectId: "TNLS009",
      ProjectName: "Kanchipuram Temple Town Layout",
      Type: "Residential",
      Category: "Layout",
      Zone: "Kanchipuram"
    },
    {
      ProjectId: "TNLS010",
      ProjectName: "Vellore Golden City Layout",
      Type: "Residential",
      Category: "Layout",
      Zone: "Vellore"
    }
  ];
}
