import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { fabric } from 'fabric';


@Component({
  selector: 'app-create-design',
  templateUrl: './create-design.component.html',
  styleUrls: ['./create-design.component.css']
})
export class CreateDesignComponent implements OnInit {

  ImagesForm: FormGroup;
  loading: boolean;
  private canvas;
  private print;
  private convertToImage;
  addBackgroudImage;
  addImageToCanvas;
  removeImageFromCanvas;
  imageUrl = '../assets/images/shirt1.jpg'

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.canvas = new fabric.Canvas('canvas');
    this.addBackgroudImage = (src) =>{
      // this.canvas.setBackgroundImage(imageUrl, this.canvas.renderAll.bind(this.canvas), {
      //   // Optionally add an opacity lvl to the image
      //   backgroundImageOpacity: 0.5,
      //   // should the image be resized to fit the container?
      //   backgroundImageStretch: false
      // });

      let pugImg = new Image();
      pugImg.onload = (img) => {
        var pug = new fabric.Image(pugImg, {
          scaleX: this.canvas.width / pugImg.width,
          scaleY: this.canvas.height / pugImg.height
        });
        this.canvas.setBackgroundImage(pug, this.canvas.renderAll.bind(this.canvas), {
          // Optionally add an opacity lvl to the image
          backgroundImageOpacity: 0.5,
          // should the image be resized to fit the container?
          backgroundImageStretch: false
        });
      };
      pugImg.src = src;
      
    }

    this.addBackgroudImage(this.imageUrl);
    this.addImageToCanvas = (src) => {
      let pugImg = new Image();
      pugImg.onload = (img) => {
        var pug = new fabric.Image(pugImg, {
          scaleX: (this.canvas.width-300) / pugImg.width,
          scaleY: (this.canvas.height-300) / pugImg.height
        });
        this.canvas.add(pug);
      };
      pugImg.src = src;
    }

    this.convertToImage = () => {
      // this.canvas.deactivateAll().renderAll();  
      // document.getElementById("canvas").src=this.canvas.toDataURL('png');
      let url = this.canvas.toDataURL('png');
      let debugBase64 = (base64URL) => {
        var win = window.open();
        // win.document.write('<iframe src="' + base64URL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
        var iframe=win.document.createElement('iframe')
        iframe.width='100%';
        iframe.height='100%';
        iframe.frameBorder="0";
        iframe.src=base64URL;
        win.document.body.appendChild(iframe);
      }
      debugBase64(url);
    }

    this.removeImageFromCanvas = () => {
      var object = this.canvas.getActiveObject();
      if (!object){
          alert('Please select the element to remove');
          return '';
      }
      this.canvas.remove(object);
    }
  }

  createForm() {
    this.ImagesForm = this.fb.group({
      image: null,
      bgImage: null
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let selectedFile: File = event.target.files[0];
      console.log('sdfds............', event.target.result);
      var reader = new FileReader();
      reader.onload = function (event) {
        this.addImageToCanvas(event.target.result);
      }.bind(this);
      reader.readAsDataURL(event.target.files[0]);
      // this.addImageToCanvas(event);
      this.ImagesForm.get('image').setValue(selectedFile);
    }
  }

  onBDFileChange(event) {
    if (event.target.files.length > 0) {
      let selectedFile: File = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function (event) {
        this.addBackgroudImage(event.target.result);
      }.bind(this);
      reader.readAsDataURL(event.target.files[0]);
      // this.addImageToCanvas(event);
      this.ImagesForm.get('bgImage').setValue(selectedFile);
    }
  }

  onUpload(data) {
    // upload code goes here
    this.loading = true;
    console.log('sdfds............', data.value)
  }

  clearFile() {
    console.log('gejdl');
    this.ImagesForm.get('image').setValue(null);
  }

}
