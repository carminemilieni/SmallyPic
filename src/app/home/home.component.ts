import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as prettyBytes from 'pretty-bytes';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //@ViewChild('dragzone', { static: true }) dragzoneRef: ElementRef<Element>;

  public dragzone = {
    dragover: false,
    drop: false
  };

  public file = {
    originalSize: '0',
    modifiedSize: '0'
  }

  constructor() { }

  ngOnInit(): void {
    //this.dragzoneInit();
  }


  public onDrop($event: DragEvent) {
    console.log('ciao')
    const files = $event.dataTransfer.files;
    const file = files[0];

    console.log(file);

    this.file.originalSize = prettyBytes(file.size);

    console.log(prettyBytes(file.size));

    if (file.type !== 'image/jpeg' || file.type !== 'image/png') {

    }
  }

  public onDragover($event: DragEvent) {
    $event.preventDefault();
    if (!this.dragzone.dragover && !this.dragzone.drop) {
      this.dragzone.dragover = true;
    }
  }

  public onDragleave($event: DragEvent) {
    this.dragzone.dragover = false;
  }

  public drag($e: DragEvent): void {

  }



}
