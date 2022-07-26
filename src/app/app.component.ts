import { Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




@Injectable()
export class AppComponent {

  constructor(private http:HttpClient){}
  domain = new FormControl('');
  isShown: boolean = false;
  isdomainValid :boolean=false;
  showdata:any;

  public getdomain() {

   let domain_value = this.domain.value;

   let headers = new HttpHeaders({
    'x-rapidapi-host': 'domain-checker7.p.rapidapi.com',
    'x-rapidapi-key': 'dd5f45a2a2msh9f20ebb4a97c990p191e2bjsne88f1b456e71'
  });
  this.http
    .get<any>('https://domain-checker7.p.rapidapi.com/whois?domain='+domain_value, {
      headers: headers
    })
    .subscribe(data => {
      this.showdata=data;
      this.isdomainValid=data.valid
    });
  this.isShown=true;





}

}




