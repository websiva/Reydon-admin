import { StepperOrientation } from '@angular/cdk/stepper';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ElementRef, Inject, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, max } from 'rxjs/operators';
import { NgClass } from '@angular/common';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { LayoutProximities } from '../Interfaces/LayoutProximity';
import { LayoutFiveReasons } from '../Interfaces/LayoutFiveReasons';
import { newLayout } from '../Interfaces/newLayout';
import { ActivatedRoute } from '@angular/router';
import { LayoutDataService } from '../Services/layout-data.service';

@Component({
  selector: 'app-add-new-project',
  templateUrl: './add-new-project.component.html',
  styleUrl: './add-new-project.component.css'
})
export class AddNewProjectComponent implements OnInit {
  projectId: string | undefined;

  generalInfoForm: FormGroup;
  addressForm: FormGroup;
  aminitiesForm: FormGroup;
  proximitiesForm: FormGroup;
  fiveReasonsForm: FormGroup;
  legalAndfinancialForm: FormGroup;
  bankPartnersForm: FormGroup;



  finalData!: newLayout;

  editIndex: number | undefined;
  previewUrl: string | null = null;
  selectedFile: File | null = null;
  enablePreviewBtn: boolean = false;

  //static data's
  previewProject:any = [];
  Types: string[] = [];
  Thumbnail: string[] = [];
  amenityNames: string[] = [];
  ProximityCategory: string[] = [];
  zoneTableData:{ zone: string, zoneName: string, districts:string[], count: number }[] = [];
  tamilNaduTaluks: { [district: string]: { english: string, tamil: string }[] } = {};
  Topography: string[] = [];
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
  bankIconUrls: { [key: string]: string } = {};


  //selected values
  filteredZoneDistricts: string[] = [];
  filteredTaluks: { english: string, tamil: string }[] = [];
  selectedAminities: string[] = [];
  selectedProximities: LayoutProximities[] = [];
  fiveReasons: LayoutFiveReasons[] = [];
  selectedBanks: string[] = [];
  bankNames: string[] = Object.keys(this.bankIconUrls);

  //files
  uploadedImages: string[] = [];
  uploadedBrouchures: File[] = [];
  uploadedLayoutMaps: File[] = [];
  uploadedPlotDetails: File[] = [];
  ngOnInit(): void {

  }

  //to reset the file selected in reasons form
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('brouchureFile') brouchureFile!: ElementRef;
  @ViewChild('layoutFile') layoutFile!: ElementRef;
  @ViewChild('plotDetailFile') plotDetailFile!: ElementRef;

  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute,private  layoutDataService:LayoutDataService) {

    this.activatedRoute.queryParams.subscribe(data => {
      this.projectId = data['projectId'];
    })

    //Getting static data from service
    this.Types = layoutDataService.Types;
    this.Thumbnail = layoutDataService.Thumbnail;
    this.amenityNames = layoutDataService.amenityNames;
    this.ProximityCategory = layoutDataService.ProximityCategory;
    this.zoneTableData = layoutDataService.zoneTableData;
    this.tamilNaduTaluks = layoutDataService.tamilNaduTaluks;
    this.Topography = layoutDataService.Topography;
    this.bankIconUrls = layoutDataService.bankIconUrls;
    this.previewProject = layoutDataService.previewProject;

    // General info  form
    this.generalInfoForm = this.formBuilder.group({
      ProjectName: ['', Validators.required],
      Type: ['', Validators.required],
      Thumbnail: ['', Validators.required],
      Category: ['Layout'],
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
      Latitude: [null, [Validators.required]], // Latitude range: -90 to 90
      Longitude: [null, [Validators.required]] // Longitude range: -180 to 180
    });

    this.addressForm.get('Zone')?.valueChanges.subscribe((selectedZone) => {
      this.updateDistricts(selectedZone);
    });

    this.addressForm.get('District')?.valueChanges.subscribe((selectedDistrict) => {
      this.updateTaluks(selectedDistrict);
    });

    // Step 3: Amenities
    this.aminitiesForm = this.formBuilder.group({
      AminityName: ['', Validators.required]
    }),

      // Step 4: Proximities
      this.proximitiesForm = this.formBuilder.group({
        ProximityName: ['', Validators.required],
        Distance: ['', Validators.required],
        DurationHr: ['', [Validators.required]],
        DurationMin: ['', [Validators.required, Validators.max(60), Validators.min(0)]],
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

    this.countDistrictsAndTaluks(this.tamilNaduTaluks);
  }

  //preventing 'E' and 'e' from input
  preventEKey(event: KeyboardEvent) {
    if (event.key === 'e' || event.key === 'E') {
      event.preventDefault();
    }
  }


  allFormCompleted(): boolean {
    if (this.generalInfoForm.valid && this.addressForm.valid && this.selectedAminities.length > 0
      && this.selectedProximities.length > 0 && this.fiveReasons.length === 5 && this.legalAndfinancialForm.valid
      && this.selectedBanks.length > 0 && this.uploadedImages.length > 0 && this.uploadedBrouchures.length > 0 && this.uploadedLayoutMaps.length > 0) {

      return true;
    }
    return false;
  }

  //background color for card labels
  getLabelBackgroundColor(type: string): string {
    switch (type) {
      case 'Residential':
        return '#7BC42B';
      case 'Commercial':
        return '#F68712';
      case 'Layout':
        return '#5A5C5B';
      case 'Building':
        return '#004274';
      case 'Farm Lands':
        return '#00B0FF';
      default:
        return 'transparent';
    }
  }

  /******************General info  */
  generalFormButtonDisabled(): boolean {
    if (this.generalInfoForm.valid) {
      return true;
    }
    else {
      return false;
    }
  }

  get TotalPlots() {
    return this.generalInfoForm.get('TotalPlots');
  }

  /****************Address************/
  updateDistricts(selectedZone: string) {
    const selectedZoneData = this.zoneTableData.find(zone => zone.zoneName === selectedZone);
    this.filteredZoneDistricts = selectedZoneData ? selectedZoneData.districts : [];
    this.addressForm.get('District')?.reset();
    this.addressForm.get('Taluk')?.reset();
  }

  updateTaluks(selectedDistrict: string) {
    this.filteredTaluks = this.tamilNaduTaluks[selectedDistrict] || [];
    this.addressForm.get('Taluk')?.reset();
  }
  countDistrictsAndTaluks(tamilNaduTaluks: { [district: string]: { english: string, tamil: string }[] }) {
    let totalDistricts = 0;
    let totalTaluks = 0;

    // Loop through each district
    for (const district in tamilNaduTaluks) {
      totalDistricts += 1; // Increment district count
      totalTaluks += tamilNaduTaluks[district].length; // Increment taluk count by the number of taluks in each district
    }
  }
  /*************Aminities******/
  checkingPropertyLength(property: string): boolean {
    if (property === 'Aminities') {
      return this.selectedAminities.length > 0;
    }
    else if (property === 'Proximity') {
      return this.selectedProximities.length > 0
    }
    return false;
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
    this.proximitiesForm.reset();
  }

  submitProximity() {

  }


  /************Five reasons***********/
  checkReasonsLength(): boolean {
    return this.fiveReasons.length === 5;
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

  //adding new reason
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

  //editting a reason
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
    this.resetReasonForm();
  }

  //Save reason
  saveReason() {
    if (this.editIndex !== undefined) {
      const updatedReason = this.fiveReasonsForm.value;

      this.fiveReasons[this.editIndex] = {
        ...updatedReason,
        ImageUrl: this.previewUrl
      }

      this.resetReasonForm();
    }
  }

  //resetting reason form
  resetReasonForm() {
    this.fiveReasonsForm.reset();
    this.editIndex = undefined;
    this.previewUrl = null;
    this.selectedFile = null;

    this.fileInput.nativeElement.value = '';
  }

  //submitting reason form
  submitFiveReasons() {

  }


  /****************Banks************/
  checkingBankCounts(): boolean {
    return this.selectedBanks.length > 0;
  }

  isBankSelected(bank: string): boolean {
    return this.selectedBanks.includes(bank);
  }

  toggleBanks(bankName: string) {
    const index = this.selectedBanks.indexOf(bankName);
    if (index === -1) {
      this.selectedBanks.push(bankName);
    }
    else {
      this.selectedBanks.splice(index, 1);
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
    if (input.files) {
      this.uploadedBrouchures = Array.from(input.files);
    }
  }

  onLayoutMapSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.uploadedLayoutMaps = Array.from(input.files);
    }
  }
  onPlotDetailsSelected(event: Event) {

  }

  removeImage(index: number): void {
    this.uploadedImages.splice(index, 1); // Remove an image from the preview

  }

  removeFile(index: number, arrayName: File[], elementRefName: HTMLInputElement): void {
    arrayName.splice(index, 1); // Remove a PDF file
    elementRefName.value = '';
  }

  removeLayoutMap(index: number): void {
    this.uploadedLayoutMaps.splice(index, 1); // Remove a PDF file
    this.layoutFile.nativeElement.value = '';
  }

  removePlotDetails(index: number): void {
    this.uploadedPlotDetails.splice(index, 1);
    this.plotDetailFile.nativeElement.value = '';
  }

  openPreview() {

  }

  generateFinalJSON() {
    this.enablePreviewBtn = true;

    this.finalData = {
      ProjectName: this.generalInfoForm.get('ProjectName')?.value,
      Type: this.generalInfoForm.get('Type')?.value,
      Thumbnail: this.generalInfoForm.get('Thumbnail')?.value,
      Category: this.generalInfoForm.get('Category')?.value,
      HeaderLocation: this.generalInfoForm.get('HeaderLocation')?.value,
      DTCPApproved: this.generalInfoForm.get('DTCPApproved')?.value,
      RERAApproved: this.generalInfoForm.get('RERAApproved')?.value,
      VerifiedByReydon: this.generalInfoForm.get('VerifiedByReydon')?.value,
      PricePerSqft: this.generalInfoForm.get('PricePerSqft')?.value,
      YoutubeLink: this.generalInfoForm.get('YoutubeLink')?.value,
      TotalArea: this.generalInfoForm.get('TotalArea')?.value,
      TotalPlots: this.generalInfoForm.get('TotalPlots')?.value,
      AvailablePlots: this.generalInfoForm.get('AvailablePlots')?.value,
      PropertyDescription: this.generalInfoForm.get('PropertyDescription')?.value,
      NoOfPhases: this.generalInfoForm.get('NoOfPhases')?.value,
      Address: this.addressForm.value, // Ensure addressForm is correctly populated
      Aminities: this.selectedAminities || [], // Initialize as empty array if not set
      Proximities: this.selectedProximities || [], // Initialize as empty array if not set
      FiveReasons: this.fiveReasons || [], // Initialize as empty array if not set
      LegalAndFinancials: this.legalAndfinancialForm.value || {}, // Initialize as empty object if not set
      BankPartners: this.selectedBanks || [], // Initialize as empty array if not set
      Documents: {
        projectImages: this.uploadedImages || [], // Initialize as empty array if not set
        BrochureFile: this.uploadedBrouchures || [], // Initialize as empty array if not set
        LayoutMapFile: this.uploadedLayoutMaps || [], // Initialize as empty array if not set
        PlotDetailsFile: this.uploadedPlotDetails || [] // Initialize as empty array if not set
      }
    };

    localStorage.setItem('finalData', JSON.stringify(this.finalData));

    console.log(this.finalData);
  }

}
