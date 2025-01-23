import { Component } from '@angular/core';

@Component({
  selector: 'app-image-to-link',
  templateUrl: './image-to-link.component.html',
  styleUrl: './image-to-link.component.css'
})
export class ImageToLinkComponent {

  uploadedImages:{Name:string,imgUrl:string}[]=[];
  selectedFile: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files) {
      Array.from(input.files).forEach(file => {
        const raeder = new FileReader();
        raeder.onload = (e: any) => this.uploadedImages.push({
          Name:file.name,
          imgUrl:e.target.result
        });

        raeder.readAsDataURL(file);
      });
    }
  }

  generate(){
    console.log(this.uploadedImages);
  }
}
