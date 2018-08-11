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

  // ngOnInit() {
    
    // this.print = new fabric.Rect({
    //   width: 200,
    //   height: 200,
    //   fill: 'black'
    // })
    // fabric.Image.fromURL('../assets/images/images.jpg', function(myImg) {
    //   var img1 = myImg;
    //   this.canvas.add(img1); 
    // });
    // this.canvas.add(new fabric.IText('Hello Fabric!'));
    // this.canvas.add(this.print);
    // this.canvas.centerObject(this.print);
    // let pugImg = new Image();
    // pugImg.onload = (img) => {    
    //     var pug = new fabric.Image(pugImg, {
    //         left: 70,
    //         top: 70,
    //         scaleX: .35,
    //         scaleY: .35
    //     });
    //     this.canvas.add(pug);
    // };
    // pugImg.src = '../assets/images/Kirby.png';
    

    

  // }

  
  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log('sdfds............',event.target.files[0]);
  // }

  

}
