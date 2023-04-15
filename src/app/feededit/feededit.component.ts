import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feed } from '../feed';
import { ActivatedRoute, Router } from '@angular/router';
import { PricingfeedsService } from '../pricingfeeds.service';

@Component({
  selector: 'app-feededit',
  templateUrl: './feededit.component.html',
  styleUrls: ['./feededit.component.css']
})
export class FeededitComponent implements OnInit {

  @ViewChild('fedit') formedit : NgForm;
  storeid:number;
  storedata : Feed;
  error:string='';
  

  constructor(public router: Router, public routerstate: ActivatedRoute, private pfService: PricingfeedsService){
   this.routerstate.params.subscribe((param) => this.storeid = param['id']);
  }

  ngOnInit(){
    this.pfService.getFeed(this.storeid).subscribe((data)=>{
      this.storedata = {
        'store_id':data[0].storeId,
        'sku':data[0].sku,
        'productname':data[0].productName,
        'price':data[0].price,
        'date':data[0].date
      };
      console.log(this.storedata.date);
    });
  }

  onSubmit(){
    const updateData = {
      'store_id':this.storeid,
      'sku': this.formedit.value.sku,
      'productname':this.formedit.value.productname,
      'price':this.formedit.value.price,
      'date':this.formedit.value.date
    };
    this.pfService.updateFeed(updateData).subscribe((res)=>{
      console.log(res);
      if(res.status == 200){
        this.router.navigate(['listing']);
      }
      this.error = res.msg;
    })
  }

}
