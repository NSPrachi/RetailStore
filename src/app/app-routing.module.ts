import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricingfeedsComponent } from './pricingfeeds/pricingfeeds.component';
import { ListingComponent } from './listing/listing.component';
import { FeededitComponent } from './feededit/feededit.component';

const routes: Routes = [
  {path : '', component : ListingComponent , pathMatch : 'full'},
  {path : "listing" , component : ListingComponent},
  {path : "pricingfeeds" , component : PricingfeedsComponent},
  {path : "feededit/:id" , component : FeededitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
