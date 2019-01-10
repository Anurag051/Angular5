import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule }   from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
//For form related module if need to work form field and validation
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { HttpModule } from '@angular/http';

/** Component import */
import { ConfirmComponent } from './components/popup/confirm.component';
import { ParentDialogComponent } from './components/popup//parent-dialog.component';
import { AppComponent } from './app.component';
//import { HeaderComponentComponent } from './header-component/header-component.component';
import { HeaderComponent1 } from './header-component1.component';
import { AlertComponent } from './components/popup/alert.component';
import { PromptComponent } from './components/popup/prompt.component';
import { HomeComponent } from './components/home/home.component';
import { PopupComponent } from './components/popup/popup.component';
import { RegistrationComponent } from './components/userregistration/registration/registration.component';
import { RegistrationService} from './services/registration.service';
import { RouterService } from './services/router.service';
import { UserDto} from './services/user-dto';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactInfoComponent } from './components/userregistration/contact-info/contact-info.component';
import { UserEvaluationComponent } from './components/userregistration/user-evaluation/user-evaluation.component';
import { MatchingComponent } from './components/userregistration/matching/matching.component';
import { ReferenceComponent } from './components/userregistration/reference/reference.component';
import { ProfileViewComponent } from './components/profile-view/profile-view.component';
import { Routes } from '@angular/router/src/config';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { LoginServiceService } from './services/login-service.service';
import { SignupServiceService } from './services/signup-service.service';
import { RequestPayload } from './model/request-payload';
import { HttpserviceService } from './services/httpservice.service';
import { ProfileCompletionComponent } from './components/profile-completion/profile-completion.component';
//import {A2Edatetimepicker} from 'ng2-eonasdan-datetimepicker';


const routes : Routes=[
  {
    path:'profileCompletion',
    component:ProfileCompletionComponent
  },
  { 
     path:'mentor',
    // component: RegistrationComponent
    component: SignupComponent
  },
  {
      path:'mentee',
      component: RegistrationComponent
    },
    {
      path:'adhoc',
      component: RegistrationComponent
    },
    {
      path:'complete_registration',
      component:WelcomeComponent
    },
    {
      path:'notyet',
      component: ProfileViewComponent
    },
    {
      path:'started',
      component:ContactInfoComponent
    },
    {
      path: 'evaluate',
      component: UserEvaluationComponent
    },
    {
      path: 'matching',
      component: MatchingComponent
    },
    {
      path: 'refernces',
      component: ReferenceComponent
    },
    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'profileView',
      component: ProfileViewComponent
    },
    {
      path: 'login',
      component: LoginComponent
    }
]; 


@NgModule({
  declarations: [
    AppComponent,
    ConfirmComponent,
    ParentDialogComponent,
    HeaderComponent1,
    AlertComponent,
    PromptComponent,
    HomeComponent,
    PopupComponent,
    RegistrationComponent,
    WelcomeComponent,
    ContactInfoComponent,
    UserEvaluationComponent,
    MatchingComponent,
    ReferenceComponent,
    ProfileViewComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ProfileCompletionComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BootstrapModalModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routes,{enableTracing: true}/*debugging purposes only*/)
   // A2Edatetimepicker
  ],
  providers: [
    RegistrationService, RegistrationComponent,
    UserDto,RouterService,LoginServiceService,SignupServiceService,
    RequestPayload,HttpserviceService
  ],
  //Don't forget add component to entryComponents section
  entryComponents: [
   AlertComponent,
   ConfirmComponent,
   PromptComponent,
   ParentDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
