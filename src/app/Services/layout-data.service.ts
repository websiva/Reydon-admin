import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutDataService {

  constructor() { }

  previewProject:any = [
    {
      "ProjectId": "0001",
      "ProjectName": "Heritage Avenue",
      "Type": "Residential",
      "Category": "Layout",
      "HeaderLocation": "Bodi, Theni",
      "DTCPApproved": true,
      "RERAApproved": true,
      "VerifiedByReydon": true,
      "ProjectLaunchDate": "2024-08-30",
      "PricePerSqFt": 3500,
      "BannerImagesNames": [
        "heritageBanner1.png",
        "heritageBanner2.png",
        "heritageBanner3.png",
        "heritageBanner4.png"
      ],
      "CardImage": "heritageBanner2.png",
      "YoutubeLink": "https://www.youtube.com/embed/VLSZVWVFKAg",
      "TotalArea": 10,
      "TotalPlots": 154,
      "AvailablePlots": 148,
      "Phases": {
        "NoOfPhases": 3,
        "PhasesDetails": [
          {
            "StartNumber": 101,
            "EndNumber": 150
          },
          {
            "StartNumber": 201,
            "EndNumber": 250
          },
          {
            "StartNumber": 301,
            "EndNumber": 352
          }
        ]
      },
      "PropertyDescription": "Heritage Avenue is a premium plot development situated along the scenic Bodi - Munnar National Highway in Bodinayakanur, Tamil Nadu. Nestled amidst lush greenery and rolling hills, it offers an ideal setting for building a dream home or holiday retreat. With easy access to both Bodinayakanur town and the popular hill station of Munnar, Heritage Avenue provides the perfect blend of tranquility and convenience, making it a great investment opportunity in one of the region's most picturesque locales.",
      "AddressDetails": {
        "Address": "Mundhal",
        "PostOffice": "Anaikaraipatti",
        "Taluk": "Bodinayakkanur",
        "PinCode": "625582",
        "District": "Theni",
        "Landmark": "Bodi-(Theni To Munnar National Highway)",
        "Zone": "Theni",
        "Topography": "Foothills",
        "GoogleMapLink": "",
        "Latitude": 10.047981747106626,
        "Longitude": 77.31411692305962
      },
      "Amenities": [
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
      "CardAmenities": [
        "Street Light",
        "Gated Community",
        "Security",
        "CCTV Surveillance",
        "Water Pipeline Connection"
      ],
      "NearByProximity": [
        {
          "ProximityName": "Theni New Bus stand",
          "Distance": "23 km",
          "Duration": "33 Min",
          "Latitude": 10.010682293781145,
          "Longitude": 77.49501109187932,
          "Category": "bus-stand"
        },
        {
          "ProximityName": "Bodi Bus stand",
          "Distance": "6.8 km",
          "Duration": "12 Min",
          "Latitude": 10.008542388292139,
          "Longitude": 77.34941831937107,
          "Category": "bus-stand"
        },
        {
          "ProximityName": "Bodi Railway Station",
          "Distance": "5.3 km",
          "Duration": "8 Min",
          "Latitude": 10.019150675717402,
          "Longitude": 77.34590096383862,
          "Category": "railway-station"
        },
        {
          "ProximityName": "Bodi Govt Engg College",
          "Distance": "8.5 Km",
          "Duration": "15 Min",
          "Latitude": 9.994882272434757,
          "Longitude": 77.34943961140806,
          "Category": "college"
        },
        {
          "ProximityName": "CPA College of Arts and Science",
          "Distance": "3 Km",
          "Duration": "4 Min",
          "Latitude": 10.028987126594691,
          "Longitude": 77.33110839518933,
          "Category": "college"
        },
        {
          "ProximityName": "Bodi Govt Hospital",
          "Distance": "5.7 km",
          "Duration": "10 Min",
          "Latitude": 10.016901818371247,
          "Longitude": 77.35274648014287,
          "Category": "hospital"
        },
        {
          "ProximityName": "Munnar",
          "Distance": "63 Km",
          "Duration": "01 Hr 40 Min",
          "Latitude": 10.08554776673238,
          "Longitude": 77.06070753264868,
          "Category": "hills"
        },
        {
          "ProximityName": "Kurangani Falls",
          "Distance": "10.6 Km",
          "Duration": "17 Min",
          "Latitude": 10.088076601273248,
          "Longitude": 77.24629265189485,
          "Category": "falls"
        },
        {
          "ProximityName": "Green Royal Resort, Bodi",
          "Distance": "1 km",
          "Duration": "2 Min",
          "Latitude": 10.03982832652384,
          "Longitude": 77.31960296723395,
          "Category": "resort"
        }
      ],
      "TopFiveReasons": [
        {
          "ReasonNo": 1,
          "Title": "Scenic Location",
          "Description": "Enjoy breathtaking views and serene surroundings, perfect for relaxation.",
          "ImageUrl": ""
        },
        {
          "ReasonNo": 2,
          "Title": "Key Landmarks",
          "Description": "Conveniently located near schools, hospitals, and popular attractions.",
          "ImageUrl": ""
        },
        {
          "ReasonNo": 3,
          "Title": "Investment Potential",
          "Description": "Secure your future in a rapidly growing real estate market.",
          "ImageUrl": ""
        },
        {
          "ReasonNo": 4,
          "Title": "Excellent Connectivity",
          "Description": "Well-connected to nearby towns and major destinations.",
          "ImageUrl": ""
        },
        {
          "ReasonNo": 5,
          "Title": "Healthy Lifestyle",
          "Description": "Live in a peaceful, pollution-free environment surrounded by nature.",
          "ImageUrl": ""
        }
      ],
      "LegalAndFinancial": {
        "DTCPApprovalNo": "LP /AD DTCP(TD) No:SWP/72/2023",
        "RERAApprovalNo": "NIL",
        "TitdleDeedisClearDocument": "Yes",
        "LitigationProperty": "No",
        "EncumberanceCertificateisClear": "Yes",
        "PropertyisUnderHypothecationbyBank": "Yes"
      },
      "BankPartners": [
        "HDFC",
        "SBI",
        "AXIS",
        "ICICI",
        "KVB"
      ]
    }
  ]
  Types: string[] = ["Residential", "Commercial"];
  Thumbnail: string[] = ["Featured", "Hot", "Offer"];
  amenityNames: string[] = [
    'Street Light',
    'Black top Tar road',
    'White Top Metal Road',
    'Water Pipeline Connection',
    'Water Tank',
    'Drainage system',
    'Drainage system (Covered)',
    'Entrance Arch',
    'Gated community',
    'Landscaped Garden',
    'Parking',
    'Security',
    'Power Backup',
    '24x7 CCTV Surveillance',
    'Children\'s Play Area',
    'Swimming Pool',
    'Gymnasiums',
    'Club House',
    'Convention center',
    'Jogging Track',
    'Religious activity places',
    'Sports Area',
    'EV Charging station',
    'High-Speed Internet',
    'Elevators',
    'Waste Management System (STP)',
    'Movie Mini Theatre',
    'Rain Water Harvesting',
    'Water Softener Plant',
    'Spa/Saloon',
    'Indoor Super Market',
    'Restaurant',
    'Coffee Shop',
    'Pet friendly',
    'Elder\'s Recreation centre',
    'Battery car facility',
    'Smoke free zone',
    'Bus Stop',
    'Eco Friendly Environment'
  ];
  ProximityCategory: string[] = ["Bus Stand", "Railway Station", "College", "Hospital", "Hills", "Falls", "Resort", "IT Park", "Theme Park"
    , "Office", "Park", "View Point", "Temple", "Company", "Airport", "Industrial Park", "School"
  ];
  zoneTableData = [
    { zone: 'Zone 1', zoneName: 'Coimbatore', districts: ['Coimbatore', 'The Nilgiris', 'Erode', 'Tiruppur', 'Karur', 'Salem', 'Namakkal'], count: 7 },
    { zone: 'Zone 2', zoneName: 'Dharmapuri', districts: ['Dharmapuri', 'Vellore', 'Thirupathur', 'Ranipet', 'Krishnagiri'], count: 5 },
    { zone: 'Zone 3', zoneName: 'Villupuram', districts: ['Villupuram', 'Thiruvannamalai', 'Cuddalore', 'Kallakurichi'], count: 4 },
    { zone: 'Zone 4', zoneName: 'Trichy', districts: ['Nagapattinam', 'Thiruvarur', 'Thanjavur', 'Trichy', 'Ariyalur', 'Perambalur', 'Mayiladurai', 'Pudukottai'], count: 8 },
    { zone: 'Zone 5', zoneName: 'Madurai', districts: ['Dindigul', 'Madurai', 'Theni', 'Virudhunagar', 'Sivaganga', 'Ramanathapuram'], count: 6 },
    { zone: 'Zone 6', zoneName: 'Tirunelveli', districts: ['Tirunelveli', 'Thoothukudi', 'Kanyakumari', 'Tenkasi'], count: 4 },
    { zone: 'Zone 7', zoneName: 'Chengalpattu', districts: ['Chengalpattu', 'Kancheepuram', 'Thiruvallur'], count: 3 },
    { zone: 'Zone 8', zoneName: 'Chennai', districts: ['Chennai'], count: 3 }
  ];

  tamilNaduTaluks: { [district: string]: { english: string, tamil: string }[] } = {
    "Chennai": [
      { english: "Alandur", tamil: "ஆலந்தூர்" },
      { english: "Ambattur", tamil: "அம்பத்தூர்" },
      { english: "Aminjikarai", tamil: "அமைந்தக்கரை" },
      { english: "Ayanavaram", tamil: "அயனாவரம்" },
      { english: "Egmore", tamil: "எழும்பூர்" },
      { english: "Guindy", tamil: "கிண்டி" },
      { english: "Madhavaram", tamil: "மாதவரம்" },
      { english: "Madhuravoyal", tamil: "மதுரவாயல்" },
      { english: "Mambalam", tamil: "மாம்பலம்" },
      { english: "Mylapore", tamil: "மயிலாப்பூர்" },
      { english: "Perambur", tamil: "பெரம்பூர்" },
      { english: "Purasavakkam", tamil: "புரசைவாக்கம்" },
      { english: "Sholinganallur", tamil: "சோழிங்கநல்லூர்" },
      { english: "Thiruvottriyur", tamil: "திருவெற்றியூர்" },
      { english: "Tondiarpet", tamil: "தண்டையார்பேட்டை" },
      { english: "Velacherry", tamil: "வேளச்சேரி" }
    ],
    "Coimbatore": [
      { english: "Anaimalai", tamil: "ஆனைமலை" }, // District name as taluk
      { english: "Annur", tamil: "அன்னுர்" },
      { english: "Coimbatore North", tamil: "கோயம்புத்தூர் (வடக்கு)" },
      { english: "Coimbatore South", tamil: "கோயம்புத்தூர்(தெற்கு)" },
      { english: "Kinnathukadavu", tamil: "கிணத்துக்கடவு" },
      { english: "Madukkarai", tamil: "மதுக்கரை" },
      { english: "Mettupalayam", tamil: "மேட்டுப்பாளையம்" },
      { english: "Perur", tamil: "பேரூர்" },
      { english: "Pollachi", tamil: "பொள்ளாச்சி" },
      { english: "Sulur", tamil: "சூலூர்" },
      { english: "Valparai", tamil: "வால்பாறை" }
    ],
    "Cuddalore": [
      { english: "Bhuvanagiri", tamil: "புவனகிரி" },
      { english: "Chidambaram", tamil: "சிதம்பரம்" },
      { english: "Kattumannarkoil", tamil: "காட்டுமன்னார்கோயில்" },
      { english: "Kurinjippadi", tamil: "குறிஞ்சிப்பாடி" },
      { english: "Panruti", tamil: "பண்ருட்டி" },
      { english: "Sririmushnam", tamil: "ஸ்ரீமுஷ்ணம்" },
      { english: "Tittakudi", tamil: "திட்டக்குடி" },
      { english: "Veppur", tamil: "வேப்பூர்" },
      { english: "Virudhachalam", tamil: "விருத்தாச்சலம்" }
    ],
    "Dharmapuri": [
      { english: "Harur", tamil: "அரூர்" },
      { english: "Karimangalam", tamil: "காரிமங்கலம்" },
      { english: "Nallampalli", tamil: "நல்லம்பள்ளி" },
      { english: "Palacode", tamil: "பாலக்கோடு" },
      { english: "Pappireddipatti", tamil: "பாப்பிரெட்டிப்பட்டி" },
      { english: "Pennagaram", tamil: "பென்னாகரம்" }
    ],
    "Dindigul": [
      { english: "Athoor", tamil: "ஆத்தூர்" },
      { english: "Dindigul East", tamil: "திண்டுக்கல் (கிழக்கு)" },
      { english: "Dindigul West", tamil: "திண்டுக்கல் (மேற்கு)" },
      { english: "Gujiliamparai", tamil: "குஜிலியம்பாறை" },
      { english: "Kodaikanal", tamil: "கொடைக்கானல்" },
      { english: "Natham", tamil: "நத்தம்" },
      { english: "Nilakottai", tamil: "நிலக்கோட்டை" },
      { english: "Oddanchatram", tamil: "ஒட்டன்சத்திரம்" },
      { english: "Palani", tamil: "பழனி" },
      { english: "Vedasandur", tamil: "வேடசந்தூர்" }
    ],
    "Erode": [
      { english: "Erode", tamil: "ஈரோடு" },
      { english: "Andiyur", tamil: "அந்தியூர்" },
      { english: "Bhavani", tamil: "பவானி" },
      { english: "Gobichettipalayam", tamil: "கோபிசெட்டிப்பாளையம்" },
      { english: "Kodumudi", tamil: "கொடுமுடி" },
      { english: "Modakkurichi", tamil: "மொடக்குறிச்சி" },
      { english: "Nambiyur", tamil: "நம்பியூர்" },
      { english: "Perundurai", tamil: "பெருந்துறை" },
      { english: "Sathyamangalam", tamil: "சத்தியமங்கலம்" },
      { english: "Thalavadi", tamil: "தாளவாடி" }
    ],
    "Kanchipuram": [
      { english: "Kanchipuram", tamil: "காஞ்சிபுரம்" },
      { english: "Kunrathur", tamil: "குன்றத்தூர்" },
      { english: "Sriperumbudur", tamil: "ஸ்ரீபெரும்புதூர்" },
      { english: "Uthiramerur", tamil: "உத்திரமேரூர்" },
      { english: "Walajabad", tamil: "வாலாஜாபாத்" }
    ],
    "Kanyakumari": [
      { english: "Agasteeswaram", tamil: "அகஸ்தீஸ்வரம்" },
      { english: "Kalkulam", tamil: "கல்குளம்" },
      { english: "Killiyur", tamil: "கிள்ளீயூர்" },
      { english: "Thiruvattar", tamil: "திருவட்டார்" },
      { english: "Thovalai", tamil: "தோவாளை" },
      { english: "Vilavancode", tamil: "விளவங்கோடு" }
    ],
    "Karur": [
      { english: "Karur", tamil: "கரூர்" },
      { english: "Aravakurichi", tamil: "அரவக்குறிச்சி" },
      { english: "Kadavur", tamil: "கடவூர்" },
      { english: "Krishnarayapuram", tamil: "கிருஷ்ணராயபுரம்" },
      { english: "Kulithalai", tamil: "குளித்தலை" },
      { english: "Manmangalam", tamil: "மண்மங்கலம்" },
      { english: "Pughalur", tamil: "புகளூர்" }
    ],
    "Madurai": [
      { english: "Kalligudi", tamil: "கள்ளிக்குடி" },
      { english: "Madurai East", tamil: "மதுரை (கிழக்கு)" },
      { english: "Madurai North", tamil: "மதுரை (வடக்கு)" },
      { english: "Madurai South", tamil: "மதுரை (தெற்கு)" },
      { english: "Madurai West", tamil: "மதுரை (மேற்கு)" },
      { english: "Melur", tamil: "மேலூர்" },
      { english: "Peraiyur", tamil: "பேரையூர்" },
      { english: "Thirumangalam", tamil: "திருமங்கலம்" },
      { english: "Thirupparangundram", tamil: "திருப்பரங்குன்றம்" },
      { english: "Usilampatti", tamil: "உசிலம்பட்டி" },
      { english: "Vadipatti", tamil: "வாடிப்பட்டி" }
    ],
    "Nagapattinam": [
      { english: "Kilvelur", tamil: "கீழ்வேளூர்" },
      { english: "Thirukkuvalai", tamil: "திருக்குவளை" },
      { english: "Vedaranyam", tamil: "வேதாரண்யம்" }
    ],
    "Namakkal": [
      { english: "Kollimalai", tamil: "கொல்லிமலை" },
      { english: "Kumarapalayam", tamil: "குமாரபாளையம்" },
      { english: "Mohanoor", tamil: "மோகனூர்" },
      { english: "Paramathi Velur", tamil: "பரமத்திவேலூர்" },
      { english: "Rasipuram", tamil: "இராசிபுரம்" },
      { english: "Senthamangalam", tamil: "சேந்தமங்கலம்" },
      { english: "Thiruchengode", tamil: "திருச்செங்கோடு" }
    ],
    "Udhagamandalam": [
      { english: "Udhagamandalam", tamil: "உதகமண்டலம்" },
      { english: "Coonoor", tamil: "குன்னூர்" },
      { english: "Kotagiri", tamil: "கூடலூர்" },
      { english: "Kothagiri", tamil: "கோத்தகிரி" },
      { english: "Kunda", tamil: "குந்தா" },
      { english: "Pandalur", tamil: "பந்தலூர்" }
    ],
    "பெரம்பலூர்": [
      { english: "Perambalur", tamil: "பெரம்பலூர்" },
      { english: "Alathur", tamil: "ஆலத்தூர்" },
      { english: "Kunnam", tamil: "குன்னம்" },
      { english: "Vepanthattai", tamil: "வேப்பந்தட்டை" }
    ],
    "Pudukkottai": [
      { english: "Pudukkottai", tamil: "புதுக்கோட்டை" },
      { english: "Alangudi", tamil: "ஆலங்குடி" },
      { english: "Aranthangi", tamil: "அறந்தாங்கி" },
      { english: "Aavudaiyarkoil", tamil: "ஆவுடையார்கோயில்" },
      { english: "Kandramangalam", tamil: "கந்தர்வகோட்டை" },
      { english: "Iluppur", tamil: "இலுப்பூர்" },
      { english: "Karamapakkudi", tamil: "கறம்பக்குடி" },
      { english: "Kulathur", tamil: "குளத்தூர்" },
      { english: "Manamelkudi", tamil: "மணமேல்குடி" },
      { english: "Ponnamaravathi", tamil: "பொன்னமராவதி" },
      { english: "Thirumayam", tamil: "திருமயம்" },
      { english: "Viralimalai", tamil: "விராலிமலை" }
    ],
    "Ramanathapuram": [
      { english: "Ramanathapuram", tamil: "இராமநாதபுரம்" },
      { english: "Kadaladi", tamil: "கடலாடி" },
      { english: "Kamuthi", tamil: "கமுதி" },
      { english: "Keelakarai", tamil: "கீழக்கரை" },
      { english: "Mudukulathur", tamil: "முதுகுளத்தூர்" },
      { english: "Paramakudi", tamil: "பரமக்குடி" },
      { english: "Rajasingamangalam", tamil: "இராஜசிங்கமங்கலம்" },
      { english: "Rameswaram", tamil: "இராமேஸ்வரம்" },
      { english: "Thiruvaranai", tamil: "திருவாடானை" }
    ],
    "Salem": [
      { english: "Salem", tamil: "சேலம்" },
      { english: "Athur", tamil: "ஆத்தூர்" },
      { english: "Edappadi", tamil: "எடப்பாடி" },
      { english: "Gangavalli", tamil: "கங்கவள்ளி" },
      { english: "Kadayampatti", tamil: "காடையாம்பட்டி" },
      { english: "Mettur", tamil: "மேட்டூர்" },
      { english: "Omalur", tamil: "ஒமலூர்" },
      { english: "Pethanayakkanpalayam", tamil: "பெத்தநாயக்கன்பாளையம்" },
      { english: "Salem South", tamil: "சேலம் (தெற்கு)" },
      { english: "Salem West", tamil: "சேலம் (மேற்கு)" },
      { english: "Sankagiri", tamil: "சங்ககிரி" },
      { english: "Vazhapadi", tamil: "வாழப்பாடி" },
      { english: "Ercadu", tamil: "ஏற்காடு" }
    ],
    "Sivagangai": [
      { english: "Sivagangai", tamil: "சிவகங்கை" },
      { english: "Devakottai", tamil: "தேவகோட்டை" },
      { english: "Ilayangudi", tamil: "இளையான்குடி" },
      { english: "Kalayarkovil", tamil: "காளையார்கோவில்" },
      { english: "Karaikudi", tamil: "காரைக்குடி" },
      { english: "Manamadurai", tamil: "மானாமதுரை" },
      { english: "Singampunari", tamil: "சிங்கம்புணரி" },
      { english: "Tiruppuvanam", tamil: "திருப்புவனம்" },
      { english: "Tirupattur", tamil: "திருப்பத்தூர்" }
    ],
    "Thanjavur": [
      { english: "Thanjavur", tamil: "தஞ்சாவூர்" },
      { english: "Pudalur", tamil: "பூதலூர்" },
      { english: "Kumbakonam", tamil: "கும்பகோணம்" },
      { english: "Orathanadu", tamil: "ஒரத்தநாடு" },
      { english: "Papanasam", tamil: "பாபநாசம்" },
      { english: "Pattukkottai", tamil: "பட்டுக்கோட்டை" },
      { english: "Peravurani", tamil: "பேராவூரணி" },
      { english: "Thiruvidaimarudur", tamil: "திருவிடைமருதூர்" }
    ],
    "Theni": [
      { english: "Theni", tamil: "தேனி" }, // District name as taluk
      { english: "Andipatti", tamil: "ஆண்டிபட்டி" },
      { english: "Bodinayakkanur", tamil: "போடிநாயக்கனூர்" },
      { english: "Periyakulam", tamil: "பெரியகுளம்" },
      { english: "Uttamapalayam", tamil: "உத்தமபாளையம்" }
    ],
    "Thiruvallur": [
      { english: "Thiruvallur", tamil: "திருவள்ளூர்" }, // District name as taluk
      { english: "Avadi", tamil: "ஆவடி" },
      { english: "Kummidipoondi", tamil: "கும்மிடிப்பூண்டி" },
      { english: "Pallipattu", tamil: "பள்ளிப்பட்டு" },
      { english: "Ponneri", tamil: "பொன்னேரி" },
      { english: "Poovizhinthavalli", tamil: "பூவிருந்தவல்லி" },
      { english: "R.K. Pet", tamil: "R.K. பேட்டை" },
      { english: "Thiruthani", tamil: "திருத்தணி" },
      { english: "Oothukottai", tamil: "ஊத்துக்கோட்டை" }
    ],
    "Tiruvannamalai": [
      { english: "Tiruvannamalai", tamil: "திருவண்ணாமலை" }, // District name as taluk
      { english: "Arani", tamil: "ஆரணி" },
      { english: "Chengam", tamil: "செங்கம்" },
      { english: "Cheyyar", tamil: "செய்யாறு" },
      { english: "Jamunamarathur", tamil: "ஜமுனாமரத்தூர்" },
      { english: "Kalasapakkam", tamil: "கலசப்பாக்கம்" },
      { english: "Keelpenathur", tamil: "கீழ்பென்னாத்தூர்" },
      { english: "Polur", tamil: "போளூர்" },
      { english: "Thandaramapattu", tamil: "தண்டராம்பட்டு" },
      { english: "Vandavasi", tamil: "வந்தவாசி" },
      { english: "Vembakkam", tamil: "வெம்பாக்கம்" }
    ],
    "Thiruvarur": [
      { english: "Thiruvarur", tamil: "திருவாரூர்" }, // District name as taluk
      { english: "Kodavasal", tamil: "குடவாசல்" },
      { english: "Koothanallur", tamil: "கூத்தாநல்லூர்" },
      { english: "Mannargudi", tamil: "மன்னார்குடி" },
      { english: "Nannilam", tamil: "நன்னிலம்" },
      { english: "Needamangalam", tamil: "நீடாமங்கலம்" },
      { english: "Thiruthuraipoondi", tamil: "திருத்துறைப்பூண்டி" },
      { english: "Valangaiman", tamil: "வலங்கைமான்" }
    ],
    "Tuticorin": [
      { english: "Tuticorin", tamil: "தூத்துக்குடி" }, // District name as taluk
      { english: "Eral", tamil: "ஏரல்" },
      { english: "Ettayapuram", tamil: "எட்டயபுரம்" },
      { english: "Kayathar", tamil: "கயத்தாறு" },
      { english: "Kovilpatti", tamil: "கோவில்பட்டி" },
      { english: "Ottapidaram", tamil: "ஒட்டப்பிடாரம்" },
      { english: "Sathankulam", tamil: "சாத்தான்குளம்" },
      { english: "Sri Vaikundam", tamil: "ஸ்ரீவைகுண்டம்" },
      { english: "Tiruchendur", tamil: "திருச்செந்தூர்" },
      { english: "Vilathikulam", tamil: "விளாத்திகுளம்" }
    ],
    "Tiruchirappalli": [
      { english: "Manachanallur", tamil: "மணச்சநல்லூர்" },
      { english: "Manapparai", tamil: "மணப்பாறை" },
      { english: "Marungapuri", tamil: "மருங்காபுரி" },
      { english: "Musiri", tamil: "முசிறி" },
      { english: "Srirangam", tamil: "ஸ்ரீரங்கம்" },
      { english: "Thottiyam", tamil: "தொட்டியம்" },
      { english: "Thuraiyur", tamil: "துறையூர்" },
      { english: "Tiruchirappalli (West)", tamil: "திருச்சிராப்பள்ளி (மேற்கு)" },
      { english: "Tiruchirappalli (East)", tamil: "திருச்சிராப்பள்ளி (கிழக்கு)" },
      { english: "Thiruverumbur", tamil: "திருவெறும்பூர்" }
    ],
    "Tirunelveli": [
      { english: "Tirunelveli", tamil: "திருநெல்வேலி" }, // District name as taluk
      { english: "Ambasamudram", tamil: "அம்பாசமுத்திரம்" },
      { english: "Sernthamagal", tamil: "சேரன்மகாதேவி" },
      { english: "Manoor", tamil: "மானூர்" },
      { english: "Nanguneri", tamil: "நாங்குநேரி" },
      { english: "Palayankottai", tamil: "பாளையங்கோட்டை" },
      { english: "Radhapuram", tamil: "இராதாபுரம்" },
      { english: "Thisayanvilai", tamil: "திசையன்விளை" }
    ],
    "Vellore": [
      { english: "Vellore", tamil: "வேலூர்" }, // District name as taluk
      { english: "Anaikattu", tamil: "அணைக்கட்டு" },
      { english: "Gudiyatham", tamil: "குடியாத்தம்" },
      { english: "Keerampakkam", tamil: "கீ.வ.குப்பம்" },
      { english: "Kadpadi", tamil: "காட்பாடி" },
      { english: "Pernambattu", tamil: "பேர்ணாம்பட்டு" }
    ],
    "Vizhupuram": [
      { english: "Vizhupuram", tamil: "விழுப்புரம்" }, // District name as taluk
      { english: "Gingee", tamil: "செஞ்சி" },
      { english: "Kandachipuram", tamil: "கண்டாச்சிபுரம்" },
      { english: "Marakkanam", tamil: "மரக்காணம்" },
      { english: "Melmalaiyanur", tamil: "மேல்மலையனூர்" },
      { english: "Thiruvannainallur", tamil: "திருவெண்ணெய்நல்லூர்" },
      { english: "Tindivanam", tamil: "திண்டிவனம்" },
      { english: "Vanur", tamil: "வானூர்" },
      { english: "Vikravandi", tamil: "விக்கிரவாண்டி" }
    ],
    "Virudhunagar": [
      { english: "Virudhunagar", tamil: "விருதுநகர்" }, // District name as taluk
      { english: "Aruppukottai", tamil: "அருப்புக்கோட்டை" },
      { english: "Kariyapatti", tamil: "காரியாபட்டி" },
      { english: "Rajapalayam", tamil: "இராஜபாளையம்" },
      { english: "Sathur", tamil: "சாத்தூர்" },
      { english: "Sivakasi", tamil: "சிவகாசி" },
      { english: "Srivilliputhur", tamil: "ஸ்ரீவில்லிபுத்தூர்" },
      { english: "Thiruchuli", tamil: "திருச்சுழி" },
      { english: "Vembakottai", tamil: "வெம்பக்கோட்டை" },
      { english: "Vathirayiruppu", tamil: "வத்திராயிருப்பு" }
    ],
    "Ariyalur": [
      { english: "Ariyalur", tamil: "அரியலூர்" }, // District name as taluk
      { english: "Andimadam", tamil: "ஆண்டிமடம்" },
      { english: "Senthurai", tamil: "செந்துறை" },
      { english: "Udaiyarpalayam", tamil: "உடையார்பாளையம்" }
    ],
    "Krishnagiri": [
      { english: "Krishnagiri", tamil: "கிருஷ்ணகிரி" }, // District name as taluk
      { english: "Anchetti", tamil: "அஞ்செட்டி" },
      { english: "Bargur", tamil: "பர்கூர்" },
      { english: "Hosur", tamil: "ஓசூர்" },
      { english: "Pochampalli", tamil: "போச்சம்பள்ளி" },
      { english: "Shoolagiri", tamil: "சூளகிரி" },
      { english: "Denkanikottai", tamil: "தேன்கனிக்கோட்டை" },
      { english: "Oothangarai", tamil: "ஊத்தங்கரை" }
    ],
    "Thiruppur": [
      { english: "Avinashi", tamil: "அவிநாசி" }, // District name as taluk
      { english: "Tharapuram", tamil: "தாராபுரம்" },
      { english: "Kangeyam", tamil: "காங்கேயம்" },
      { english: "Madathukulam", tamil: "மடத்துக்குளம்" },
      { english: "Othukkuli", tamil: "ஊத்துக்குளி" },
      { english: "Palladam", tamil: "பல்லடம்" },
      { english: "Tirupur North", tamil: "திருப்பூர் (வடக்கு)" },
      { english: "Tirupur South", tamil: "திருப்பூர் (தெற்கு)" },
      { english: "Udumalaipettai", tamil: "உடுமலைப்பேட்டை" }
    ],
    "Chengalpattu": [
      { english: "Chengalpattu", tamil: "செங்கல்பட்டு" }, // District name as taluk
      { english: "Seyyur", tamil: "செய்யூர்" },
      { english: "Maduranthakam", tamil: "மதுராந்தகம்" },
      { english: "Pallavaram", tamil: "பல்லாவரம்" },
      { english: "Tambaram", tamil: "தாம்பரம்" },
      { english: "Thirukkazhukundram", tamil: "திருக்கழுகுன்றம்" },
      { english: "Tiruporur", tamil: "திருப்போரூர்" },
      { english: "Vandalur", tamil: "வண்டலூர்" }
    ],
    "Kallakurichi": [
      { english: "Kallakurichi", tamil: "கள்ளக்குறிச்சி" }, // District name as taluk
      { english: "Chinnasalem", tamil: "சின்னசேலம்" },
      { english: "Kalvarayanmalai", tamil: "கல்வராயன்மலை" },
      { english: "Sankarapuram", tamil: "சங்கராபுரம்" },
      { english: "Thirukovilur", tamil: "திருக்கோயிலூர்" },
      { english: "Ulundurpet", tamil: "உளுந்தூர்பேட்டை" }
    ],
    "Ranipet": [
      { english: "Arakkonam", tamil: "அரக்கோணம்" }, // District name as taluk
      { english: "Arcot", tamil: "ஆற்காடு" },
      { english: "Kalavai", tamil: "கலவை" },
      { english: "Nemili", tamil: "நெமிலி" },
      { english: "Sholingur", tamil: "சோளிங்கர்" },
      { english: "Walaja", tamil: "வாலாஜா" }
    ],
    "Tenkasi": [
      { english: "Tenkasi", tamil: "தென்காசி" }, // District name as taluk
      { english: "Alangulam", tamil: "ஆலங்குளம்" },
      { english: "Kadayannallur", tamil: "கடையநல்லூர்" },
      { english: "Sankarankovil", tamil: "சங்கரன்கோவில்" },
      { english: "Sengottai", tamil: "செங்கோட்டை" },
      { english: "Sivagiri", tamil: "சிவகிரி" },
      { english: "Thiruvengadam", tamil: "திருவேங்கடம்" },
      { english: "Veerakeralampudur", tamil: "வீரகேரளம்புதூர்" }
    ],
    "Tirupattur": [
      { english: "Tirupattur", tamil: "திருப்பத்தூர்" }, // District name as taluk
      { english: "Ambur", tamil: "ஆம்பூர்" },
      { english: "Natrampalli", tamil: "நாட்றாம்பள்ளி" },
      { english: "Vaniyambadi", tamil: "வாணியம்பாடி" }
    ],
    "Mayiladuthurai": [
      { english: "Mayiladuthurai", tamil: "மயிலாடுதுறை" }, // District name as taluk
      { english: "Kuthalam", tamil: "குத்தாலம்" },
      { english: "Seerkazhi", tamil: "சீர்காழி" },
      { english: "Tharangampadi", tamil: "தரங்கம்பாடி" }
    ]
  };

  Topography: string[] = ["Foothills", "Plains", "Hilly Terrain", "Flatland"];

  getIcon(category: string): string {
    const iconMap: { [key: string]: string } = {
      "Bus Stand": "directions_bus",
      "Railway Station": "train",
      "College": "school",
      "Hospital": "local_hospital",
      "Hills": "landscape",
      "Falls": "water_drop",
      "Resort": "hotel",
      "IT Park": "business_center",
      "Theme Park": "attractions",
      "Office": "domain",
      "Park": "park",
      "View Point": "visibility",
      "Temple": "temple_hindu",
      "Company": "business",
      "Airport": "local_airport",
      "Industrial Park": "factory",
      "School": "school",
    };
    return iconMap[category] || "help_outline"; // Default icon
  }

  bankIconUrls: { [key: string]: string } = {
    SBI: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207782/SBI_smdxe4.png',
    ICICI: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207781/ICICI_racnzb.png',
    KVB: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207782/KVB_l9e66q.png',
    HDFC: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207781/HDFC_haiang.png',
    AXIS: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207780/AXIS_hycydv.png',
  };
}
