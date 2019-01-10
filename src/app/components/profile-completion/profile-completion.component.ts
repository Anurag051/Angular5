import { Component, OnInit } from '@angular/core';
import { UserRegistration } from '../../utility/user-registration';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-profile-completion',
  templateUrl: './profile-completion.component.html',
  styleUrls: ['./profile-completion.component.css']
})
export class ProfileCompletionComponent implements OnInit {
user = new UserRegistration();
  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      //Initialize tooltips
      $('.nav-tabs > li a[title]').tooltip();      
      //Wizard
      $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {  
          var $target = $(e.target);
          if ($target.parent().hasClass('disabled')) {
              return false;
          }
      });
  
      $(".next-step").click(function (e) {  
          var $active = $('.wizard .nav-tabs li.active');
          $active.next().removeClass('disabled');
          nextTab($active);
  
      });
      $(".prev-step").click(function (e) {  
          var $active = $('.wizard .nav-tabs li.active');
          prevTab($active);
  
      });
  });
  
  function nextTab(elem) {
      $(elem).next().find('a[data-toggle="tab"]').click();
  }
  function prevTab(elem) {
      $(elem).prev().find('a[data-toggle="tab"]').click();
  }
  }

}
