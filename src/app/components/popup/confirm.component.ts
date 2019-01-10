import { Component } from '@angular/core';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ConfirmModel {
  title:string;
  message:string;
}

@Component({
  selector: 'confirm',
  template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title" style="text-align:center;">Login to the site</h4>
                   </div>
                   <div class="modal-body" style="height:198px;">
                     <form method="post" action='' name="login_form">
                        <div class="input-group col-xs-10 control-filed">
                            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                            <input id="email" type="text" class="form-control" name="email" placeholder="Email">
                        </div>
                        <div class="input-group col-xs-10 control-filed" style="margin-top:5px;">
                              <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                              <input id="password" type="password" class="form-control" name="password" placeholder="Password">
                        </div>
                        <p class="control-filed" style="margin-top:10px;"><button type="submit" class="btn btn-primary pull-left" (click)="confirm()">Sign in</button>
                          <a href="progress.html" style="margin-left:10px;">Forgot Password?</a>
                        </p>
                    </form>
                   </div>
                   <!--<div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="confirm()">OK</button>
                     <button type="button" class="btn btn-default" (click)="cancel()">Cancel</button>
                   </div>-->
                 </div>
                </div>`
})
export class ConfirmComponent extends DialogComponent<ConfirmModel, boolean> implements ConfirmModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  confirm() {
    // on click on confirm button we set dialog result as true,
    // ten we can get dialog result from caller code
    this.result = true;
    this.close();
  }
  cancel() {
    this.result = false;
    this.close();
  }
}
