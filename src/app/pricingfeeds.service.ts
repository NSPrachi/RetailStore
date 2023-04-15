import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Feed } from './feed';
export class Weather {
  temperature: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})


export class PricingfeedsService {

  constructor(public httpclient: HttpClient) { }

  uploadpricingfeed(formData:any){
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });

    return this.httpclient.post<any>('http://localhost/Programming-Test/feeddata.php', formData, { headers: headers });
  }

  public saveWeather(weather: Weather) { 
    console.log(`Temperature: ${weather.temperature} - Description: ${weather.description}`);
  }

  getlisting(){
    return this.httpclient.get('http://localhost/Programming-Test/listing.php');
  }

  getFeed(id: number){
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.httpclient.get("http://localhost/Programming-Test/listing.php?id="+id,{headers:headers});
  }

  updateFeed(feed: Feed){
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.httpclient.post<any>("http://localhost/Programming-Test/listing.php",feed,{headers:headers});
  }

 
}
