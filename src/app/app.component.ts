import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageHeader = 'Billing-Center';
  public setPageHeader(clickedObject){
    switch(clickedObject){
      case "home":
      this.pageHeader = 'Billing-Center';
      break;
      case "company":
      this.pageHeader = 'Company';
      break;
      case "distict":
      this.pageHeader = 'Distict';
      break;
      default:
      this.pageHeader="Billing-Center";
      break;
    }
  
  }
}
