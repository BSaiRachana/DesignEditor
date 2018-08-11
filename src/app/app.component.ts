import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tabs = [{title:'Create Design', active:true, link:'create'}, {title:'View Designs', active:false, link:'view'}];

  tabChange(tab){
    let activeTabIndex = this.tabs.findIndex((d) => d.active === true);
    let tabIndex = this.tabs.findIndex((d) => d.title === tab.title);
    this.tabs[activeTabIndex].active = false;
    this.tabs[tabIndex].active=true;
  }

}
