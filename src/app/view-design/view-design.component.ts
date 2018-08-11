import { Component, OnInit } from '@angular/core';
import { ViewDesignService } from './view-design.service';

@Component({
  selector: 'app-view-design',
  templateUrl: './view-design.component.html',
  styleUrls: ['./view-design.component.css'],
  providers: [ViewDesignService]
})
export class ViewDesignComponent implements OnInit {

  designs: any;

  constructor(private viewDesignService:ViewDesignService) { }

  ngOnInit() {
    this.showDesigns();
  }

  showDesigns() {
    this.viewDesignService.getDesigns()
      .subscribe((data: any) => {
        this.designs = data[0];
        var binaryData = [];
        binaryData.push(data[0].file.data);
        const imageUrl = window.URL.createObjectURL(new Blob(binaryData, {type: "application/jpg"}));
        const img = document.querySelector('img');
        img.addEventListener('load', () => URL.revokeObjectURL(imageUrl));
        document.querySelector('img').src = imageUrl;
      });
  }

}
