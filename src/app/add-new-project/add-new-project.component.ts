import { StepperOrientation } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, Inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgClass } from '@angular/common';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { LayoutProximities } from '../Interfaces/LayoutProximity';
import { LayoutFiveReasons } from '../Interfaces/LayoutFiveReasons';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrl: './add-new-project.component.css'
})
export class AddNewProjectComponent implements OnInit {
  generalInfoForm: FormGroup;
  addressForm: FormGroup;
  aminitiesForm: FormGroup;
  proximitiesForm: FormGroup;
  fiveReasonsForm: FormGroup;
  legalAndfinancialForm: FormGroup;
  bankPartnersForm: FormGroup;

  editIndex: number | undefined;
  previewUrl: string | null = null;
  selectedFile: File | null = null;

  Types: string[] = ["Residential", "Commercial"];
  Thumbnail: string[] = ["Featured", "Hot", "Offer"];
  selectedAminities: string[] = [];
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

  bankIconUrls: { [key: string]: string } = {
    SBI: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207782/SBI_smdxe4.png',
    ICICI: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207781/ICICI_racnzb.png',
    KVB: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207782/KVB_l9e66q.png',
    HDFC: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207781/HDFC_haiang.png',
    AXIS: 'https://res.cloudinary.com/dbzme4gd3/image/upload/v1726207780/AXIS_hycydv.png',
  };


  selectedProximities: LayoutProximities[] = [];
  fiveReasons: LayoutFiveReasons[] = [];
  bankNames: string[] = Object.keys(this.bankIconUrls);
  selectedBanks: Set<string> = new Set();
  uploadedImages: string[] = [];
  uploadedBrouchures: File[] = []; 
  uploadedLayoutMaps: File[] = [];
  ngOnInit(): void {

  }

  //to reset the file selected in reasons form
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('brouchureFile') brouchureFile!:ElementRef;
  @ViewChild('layoutFile') layoutFile!:ElementRef;

  constructor(private formBuilder: FormBuilder) {
    // General info  form
    this.generalInfoForm = this.formBuilder.group({
      ProjectName: ['', Validators.required],
      Type: ['', Validators.required],
      Thumbnail: ['', Validators.required],
      Category: ['', Validators.required],
      HeaderLocation: ['', Validators.required],
      DTCPApproved: ['No', Validators.required],
      RERAApproved: ['No', Validators.required],
      VerifiedByReydon: ['No', Validators.required],
      PricePerSqft: ['', Validators.required],
      YoutubeLink: ['', Validators.required],
      TotalArea: ['', Validators.required],
      TotalPlots: ['', Validators.required],
      AvailablePlots: ['', Validators.required],
      PropertyDescription: ['', Validators.required],
      NoOfPhases: ['', Validators.required]
    });
    //address form
    this.addressForm = this.formBuilder.group({
      Address: ['', Validators.required],
      PostOffice: [''],
      Taluk: [''],
      PinCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]], // Assuming Indian 6-digit pin code
      District: ['', Validators.required],
      Landmark: ['', Validators.required],
      Zone: ['', Validators.required],
      Topography: ['', Validators.required],
      Latitude: [null, [Validators.required, Validators.min(-90), Validators.max(90)]], // Latitude range: -90 to 90
      Longitude: [null, [Validators.required, Validators.min(-180), Validators.max(180)]] // Longitude range: -180 to 180
    });

    // Step 3: Amenities
    this.aminitiesForm = this.formBuilder.group({
      AminityName: ['', Validators.required]
    }),

      // Step 4: Proximities
      this.proximitiesForm = this.formBuilder.group({
        ProximityName: ['', Validators.required],
        Distance: ['', Validators.required],
        DurationHr: ['', Validators.required],
        DurationMin: ['', Validators.required],
        Latitude: ['', Validators.required],
        Longitude: ['', Validators.required],
        Category: ['', Validators.required]
      }),

      // Step 5: Five Reasons
      this.fiveReasonsForm = this.formBuilder.group({
        Title: ['', Validators.required],
        Description: ['', Validators.required]
      }),
      // Step 6: Legal Details
      this.legalAndfinancialForm = this.formBuilder.group({
        DTCPApprovalNo: ['', Validators.required],
        RERAApprovalNo: ['', Validators.required],
        TitdleDeedisClearDocument: ['No', Validators.required],
        LitigationProperty: ['No', Validators.required],
        EncumberanceCertificateisClear: ['No', Validators.required],
        PropertyisUnderHypothecationbyBank: ['No', Validators.required]
      }),
      // Step 7: Banks
      this.bankPartnersForm = this.formBuilder.group({
        BankName: ['', Validators.required]
      })
  }

  toggleAminity(aminity: string) {
    const index = this.selectedAminities.indexOf(aminity);

    if (index === -1) {
      this.selectedAminities.push(aminity);
    }
    else {
      this.selectedAminities.splice(index, 1);
    }
  }

  isSelected(aminity: string): boolean {
    return this.selectedAminities.includes(aminity);
  }

  addProximity(): void {
    const formValues = this.proximitiesForm.value;

    //converting hr and min to totalMin
    const totalMinutes = (parseInt(formValues.DurationHr, 10) || 0) * 60 +
      (parseInt(formValues.DurationMin, 10) || 0);

    const proximityData = {
      ProximityName: formValues.ProximityName,
      Distance: formValues.Distance,
      Duration: totalMinutes,
      Latitude: formValues.Latitude,
      Longitude: formValues.Longitude,
      Category: formValues.Category
    }

    this.selectedProximities.push(proximityData);

    this.proximitiesForm.reset();
  }

  convertingToHrMin(duration: number): string {
    const hr = Math.floor(duration / 60);
    const min = duration % 60;

    return `${hr}hr ${min}min`;
  }

  editProximity(index: number) {
    const selectedProximity = this.selectedProximities[index];

    this.proximitiesForm.patchValue({
      ProximityName: selectedProximity.ProximityName,
      Distance: selectedProximity.Distance,
      DurationHr: Math.floor(selectedProximity.Duration / 60), // Convert minutes to hours
      DurationMin: selectedProximity.Duration % 60, // Remainder is minutes
      Latitude: selectedProximity.Latitude,
      Longitude: selectedProximity.Longitude,
      Category: selectedProximity.Category
    });

    this.editIndex = index;
  }

  saveProximity() {
    if (this.editIndex !== undefined) {
      const updateProximity = this.proximitiesForm.value;

      const totalMinutes = (updateProximity.DurationHr || 0) * 60 + (updateProximity.DurationMin || 0);

      this.selectedProximities[this.editIndex] = {
        ...updateProximity,
        Duration: totalMinutes
      };

      this.editIndex = undefined;
      this.proximitiesForm.reset();
    }
  }

  deleteProximity(index: number) {
    this.selectedProximities.splice(index, 1);
  }

  submitProximity() {

  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addReason() {
    if (this.previewUrl && this.fiveReasonsForm.valid) {
      this.fiveReasons.push({
        Title: this.fiveReasonsForm.value.Title,
        Description: this.fiveReasonsForm.value.Description,
        ImageUrl: this.previewUrl
      });

      this.fiveReasonsForm.reset();
      this.selectedFile = null;
      this.previewUrl = null;


      //resetting the file selection
      this.fileInput.nativeElement.value = '';
    }
  }

  editReason(index: number): void {
    const reason = this.fiveReasons[index];

    this.fiveReasonsForm.patchValue({
      Title: reason.Title,
      Description: reason.Description,
    });
    this.previewUrl = reason.ImageUrl;
    this.editIndex = index;

    //resetting the file selection
    this.fileInput.nativeElement.value = '';
  }


  // Delete reason
  deleteReason(index: number): void {
    this.fiveReasons.splice(index, 1);
  }

  saveReason() {
    if (this.editIndex !== undefined) {
      const updatedReason = this.fiveReasonsForm.value;

      this.fiveReasons[this.editIndex] = {
        ...updatedReason,
        ImageUrl: this.previewUrl
      }

      this.fiveReasonsForm.reset();
      this.editIndex = undefined;
      this.previewUrl = null;
      this.selectedFile = null;
    }
  }

  submitFiveReasons() {

  }

  isBankSelected(bank: string): boolean {
    return this.selectedBanks.has(bank);
  }


  /****************Banks************/
  toggleBanks(bankName: string) {
    if (this.isBankSelected(bankName)) {
      this.selectedBanks.delete(bankName);
    }
    else {
      this.selectedBanks.add(bankName);
    }
  }

  /*************Documents**********/
  onImagesSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      Array.from(input.files).forEach(file => {
        const raeder = new FileReader();
        raeder.onload = (e: any) => this.uploadedImages.push(e.target.result);

        raeder.readAsDataURL(file);
      });
    }
  }

  onBrouchureSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if(input.files){
      this.uploadedBrouchures = Array.from(input.files);
    }
  }

  onLayoutMapSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if(input.files){
      this.uploadedLayoutMaps = Array.from(input.files);
    }
  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1); // Remove an image from the preview
   
  }
  
  removeBrouchure(index: number): void {
    this.uploadedBrouchures.splice(index, 1); // Remove a PDF file
    this.brouchureFile.nativeElement.value='';
  }
  
  removeLayoutMap(index: number): void {
    this.uploadedLayoutMaps.splice(index, 1); // Remove a PDF file
    this.layoutFile.nativeElement.value='';
  }



  /*this.firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  this.thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  this.stepperOrientation = breakpointObserver
  .observe('(min-width:800px)')
  .pipe(map(({matches})=>(matches?'horizontal':'vertical')))
}

stepperOrientation:Observable<StepperOrientation>;*/
}
