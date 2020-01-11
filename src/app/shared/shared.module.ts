import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { NgDragDropModule } from 'ng-drag-drop';
@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, NgDragDropModule.forRoot()],
  exports: [TranslateModule, WebviewDirective, FormsModule, NgDragDropModule]
})
export class SharedModule { }
