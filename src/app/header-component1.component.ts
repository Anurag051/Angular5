import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { ConfirmComponent } from "./components/popup/confirm.component";
import { RouterService} from "./services/router.service";

@Component({
  selector: 'header-content',
  template: `<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <a routerLink="/home" class="navbar-brand">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">Skills<span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li><a href="progress.html">C</a></li>
            <li><a href="progress.html">C++</a></li>
            <li><a href="progress.html">Java</a></li>
        </ul>
      </li>
      <li><a routerLink="/profileView">Page 1</a></li>
      <li><a routerLink="/profileCompletion">Page 2</a></li>
      <li><a href="progress.html">Page 3</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
        <li>
            <form class="navbar-form">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
              </div>
            </form>
         </li>
        <li><a href="progress.html">FAQ</a></li>
      <li><a routerLink="/signup" (click)="userType($event)"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li>
        <a routerLink="/login" (click)="userType($event)" data-keyboard="false" data-backdrop="static" class="login"><span class="glyphicon glyphicon-log-in"></span> Login</a>
        <a routerLink="/logout" (click)="userType($event)" data-keyboard="false" class="logout"><span class="glyphicon glyphicon-log-in"></span> Logout</a>
      
      </li>
    </ul>
  </div>
</nav>`
})
export class HeaderComponent1 extends DialogComponent<null, null>  {

  constructor(dialogService: DialogService,private routerService:RouterService) {
    super(dialogService);
  }

  confirm($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dialogService.addDialog(ConfirmComponent, {title: 'Confirm', message: 'Are you sure you want close dialog?'}).subscribe((isConfirmed)=>{
      if(isConfirmed) {
        this.close();
      }
    });
  }
  userType($event:MouseEvent){
    $event.preventDefault();
    $event.stopPropagation();
    this.routerService.setRole(null);
  }
  
}
