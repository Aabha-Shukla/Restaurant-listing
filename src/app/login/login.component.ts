import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { RestoService } from '../services/resto.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private resto:RestoService, private notifyService:NotificationService,
    private route:Router) { }

  login = new FormGroup({
    id:new FormControl(''),
    // password:new FormControl('')
  })

  get f() { return this.login.controls; }

  ngOnInit(): void {
  }

  userLogin(){
    this.resto.loginUser(this.login.value.id).subscribe((res)=>{
      debugger;
      this.route.navigate(['/profile']);
      debugger;
    }, err=> {
    });
  }
}