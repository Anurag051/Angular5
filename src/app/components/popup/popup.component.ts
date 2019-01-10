import { Component, OnInit } from '@angular/core';
import { ConfirmComponent } from './confirm.component';
import { AlertComponent } from './alert.component';
import { PromptComponent } from './prompt.component';
import { DialogService } from "ng2-bootstrap-modal";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  title = 'app';
  confirmResult:boolean = null;
  promptMessage:string = '';

  constructor(private dialogService:DialogService) {}

  showAlert() {
    this.dialogService.addDialog(AlertComponent, {title:'Alert title!', message:'Alert message!!!'});
  }

  showConfirm() {
    this.dialogService.addDialog(ConfirmComponent, {
      title:'Confirmation',
      message:'Bla bla confirm some action?'})
      .subscribe((isConfirmed)=>{
        //Get dialog result
        this.confirmResult = isConfirmed;
    });
  }

  showPrompt() {
    this.dialogService.addDialog(PromptComponent, {
      title:'Name dialog',
      question:'What is your name?: '})
      .subscribe((message)=>{
        //We get dialog result
        this.promptMessage = message;
      });
  }

  showAlert2() {
    this.dialogService.addDialog(AlertComponent, { message:'Click outside to close dialog' }, { closeByClickingOutside:true });
  }

  showAlert3() {
    this.dialogService.addDialog(AlertComponent, { message:'Wait 5 seconds and dialog will be closed automatically' }, { autoCloseTimeout:5000 });
  }

  showAlert4() {
    this.dialogService.addDialog(AlertComponent, { message:'Dialog with red backdrop' }, { backdropColor: 'rgba(255, 0, 0, 0.5)' });
  }
  /*showParentDialog() {
    this.dialogService.addDialog(ParentDialogComponent);
  }*/

  ngOnInit() {
  }

}
