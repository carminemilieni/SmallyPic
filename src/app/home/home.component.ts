import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import * as prettyBytes from 'pretty-bytes';
import { dialog, BrowserWindow, BrowserWindowConstructorOptions, OpenDialogOptions, MessageBoxSyncOptions } from 'electron';
import { ElectronService } from '../core/services';
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

  constructor(private electronService: ElectronService) { }

  ngOnInit(): void {
    //this.dragzoneInit();

  }


  public onDrop($event: DragEvent) {

    const opt: MessageBoxSyncOptions = {
      type: 'info',
      buttons: ['OK'],
      title: 'File non compatibile',
      message: 'File non compatibile'
    };
    console.log(this.electronService.remote.dialog.showMessageBoxSync(null, opt));

    console.log('ciao')
    const files = $event.dataTransfer.files;
    const file: File = files[0];


    this.file.originalSize = prettyBytes(file.size);

    console.log(prettyBytes(file.size));

    if (file.type.toString() !== 'image/jpeg' || file.type.toString() !== 'image/png' || file.type.toString() !== 'image/jpg') {
      // dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] });
      window.alert('estensione errata')

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
