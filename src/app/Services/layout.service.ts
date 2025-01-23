import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newLayout } from '../Interfaces/newLayout';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layoutData:newLayout[] = [
    {
      "ProjectName": "Heritage Avenue",
      "Type": "Residential",
      "Thumbnail":"Hot",
      "Category": "Layout",
      "HeaderLocation": "Bodi, Theni",
      "DTCPApproved": true,
      "RERAApproved": true,
      "VerifiedByReydon": true,
      "PricePerSqft": 3500,
      "YoutubeLink":"https://www.youtube.com/embed/VLSZVWVFKAg",
      "TotalArea": 10,
      "TotalPlots": 154,
      "AvailablePlots": 148,
      "NoOfPhases": 3,
      "PropertyDescription": "Heritage Avenue is a premium plot development situated along the scenic Bodi - Munnar National Highway in Bodinayakanur, Tamil Nadu. Nestled amidst lush greenery and rolling hills, it offers an ideal setting for building a dream home or holiday retreat. With easy access to both Bodinayakanur town and the popular hill station of Munnar, Heritage Avenue provides the perfect blend of tranquility and convenience, making it a great investment opportunity in one of the region's most picturesque locales.",
      "Address": {
        "Address": "Mundhal",
        "PostOffice": "Anaikaraipatti",
        "Taluk": "Bodinayakkanur",
        "PinCode": "625582",
        "District": "Theni",
        "Landmark": "Bodi-(Theni To Munnar National Highway)",
        "Zone": "Theni",
        "Topography": "Foothills",
        "Latitude": 10.047981747106626,
        "Longitude": 77.31411692305962
      },
      "Aminities": [
        "Street Light",
        "Black top Tar road",
        "White Top Metal Road",
        "Water Pipeline Connection",
        "Water Tank",
        "Drainage system",
        "Drainage system (Covered)",
        "Entrance Arch",
        "Compound wall/Gated community",
        "Landscaped Garden",
        "Parking",
        "Security"
      ],
      "Proximities": [
        {
          "ProximityName": "Theni New Bus stand",
          "Distance": 23,
          "Duration": 33,
          "Latitude": 10.010682293781145,
          "Longitude": 77.49501109187932,
          "Category": "bus-stand"
        },
        {
          "ProximityName": "Bodi Bus stand",
          "Distance": 6.8,
          "Duration": 12,
          "Latitude": 10.008542388292139,
          "Longitude": 77.34941831937107,
          "Category": "bus-stand"
        },
        {
          "ProximityName": "Bodi Railway Station",
          "Distance": 5.3,
          "Duration": 8,
          "Latitude": 10.019150675717402,
          "Longitude": 77.34590096383862,
          "Category": "railway-station"
        },
        {
          "ProximityName": "Bodi Govt Engg College",
          "Distance": 8.5,
          "Duration": 15,
          "Latitude": 9.994882272434757,
          "Longitude": 77.34943961140806,
          "Category": "college"
        },
        {
          "ProximityName": "CPA College of Arts and Science",
          "Distance": 3,
          "Duration": 4,
          "Latitude": 10.028987126594691,
          "Longitude": 77.33110839518933,
          "Category": "college"
        },
        {
          "ProximityName": "Bodi Govt Hospital",
          "Distance": 5.7,
          "Duration": 10,
          "Latitude": 10.016901818371247,
          "Longitude": 77.35274648014287,
          "Category": "hospital"
        },
        {
          "ProximityName": "Munnar",
          "Distance": 63,
          "Duration": 100,
          "Latitude": 10.08554776673238,
          "Longitude": 77.06070753264868,
          "Category": "hills"
        },
        {
          "ProximityName": "Kurangani Falls",
          "Distance": 10.6,
          "Duration": 17,
          "Latitude": 10.088076601273248,
          "Longitude": 77.24629265189485,
          "Category": "falls"
        },
        {
          "ProximityName": "Green Royal Resort, Bodi",
          "Distance": 1,
          "Duration": 2,
          "Latitude": 10.03982832652384,
          "Longitude": 77.31960296723395,
          "Category": "resort"
        }
      ],
      "FiveReasons": [
        {
          "Title": "Scenic Location",
          "Description": "Enjoy breathtaking views and serene surroundings, perfect for relaxation.",
          "ImageUrl": ""
        },
        {
          "Title": "Key Landmarks",
          "Description": "Conveniently located near schools, hospitals, and popular attractions.",
          "ImageUrl": ""
        },
        {
          "Title": "Investment Potential",
          "Description": "Secure your future in a rapidly growing real estate market.",
          "ImageUrl": ""
        },
        {
          "Title": "Excellent Connectivity",
          "Description": "Well-connected to nearby towns and major destinations.",
          "ImageUrl": ""
        },
        {
          "Title": "Healthy Lifestyle",
          "Description": "Live in a peaceful, pollution-free environment surrounded by nature.",
          "ImageUrl": ""
        }
      ],
      "LegalAndFinancials": {
        "DTCPApprovalNo": "LP /AD DTCP(TD) No:SWP/72/2023",
        "RERAApprovalNo": "NIL",
        "TitdleDeedisClearDocument": true,
        "LitigationProperty": false,
        "EncumberanceCertificateisClear": true,
        "PropertyisUnderHypothecationbyBank": true
      },
      "BankPartners": [
        "HDFC",
        "SBI",
        "AXIS",
        "ICICI",
        "KVB"
      ],
      Documents:{
        projectImages:[],
        BrochureFile:[],
        LayoutMapFile:[],
        PlotDetailsFile:[]
      }
    }
  ]


  private jsonUrl = "";
  apiUrl:string = "https://localhost:7277/";
  constructor() { }


  getAllData(): Observable<newLayout[]> {
    return of(this.layoutData);
    
  }

  addNewProject(){

  }

  editProject(){

  }

  deleteProject(){
    
  }
}
