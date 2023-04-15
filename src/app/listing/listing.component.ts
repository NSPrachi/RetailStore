import { Component, OnInit } from '@angular/core';
import { PricingfeedsService } from '../pricingfeeds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit{

  pricingfeeds: any = [];
  pricingfeedsdisplay: any = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  constructor(private pfService : PricingfeedsService, public router: Router){

  }

  ngOnInit(){
    this.fetchListing();
  }

  fetchListing(){
    this.pfService.getlisting().subscribe((data)=>{
      this.pricingfeedsdisplay = this.pricingfeeds =  data;
      console.log(this.pricingfeeds);

    })
  }

  onEdit(storeid: number){
    this.router.navigate(['/feededit',storeid]);
  }

  onKeyUp(event: any){
    this.pricingfeedsdisplay = this.pricingfeeds.filter((feed)=>{
      if(feed.storeId.indexOf(event.target.value) !== -1){
        return feed;
      }else if(feed.sku.indexOf(event.target.value) !== -1){
        return feed;
      }else if(feed.productName.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1){
        return feed;
      }else if(feed.price.indexOf(event.target.value) !== -1){
        return feed;
      }else if(feed.date.indexOf(event.target.value) !== -1){
        return feed;
      }

    })
  }

  onTableDataChange(event: any){
    this.page = event;
    this.fetchListing();
  }

}
