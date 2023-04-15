import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PricingfeedsService } from '../pricingfeeds.service';

@Component({
  selector: 'app-pricingfeeds',
  templateUrl:'./pricingfeeds.component.html'
})
export class PricingfeedsComponent {
  file: File;
  smsg = '';
  emsg = '';

  constructor(private pfService: PricingfeedsService) { }

  onFileSelected(event: any): void {
    this.file = event.target.files[0];
  }

  upload(): void {
    const formData = new FormData();
    formData.append('file', this.file);

    this.pfService.uploadpricingfeed(formData).subscribe(
      response => {
        console.log(response);
        this.smsg = 'Feeds uploaded successfully';
      },
      error => {
        console.error(error)
        this.emsg = 'Error occured';

      }
    );
  }
}