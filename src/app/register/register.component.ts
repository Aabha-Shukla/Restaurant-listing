import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { RestoService } from '../services/resto.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private resto:RestoService, private notifyService:NotificationService) { }

  register = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  })

  ngOnInit(): void {
  }

  collection(){
    console.log(this.register.value);
    this.resto.registerUser(this.register.value).subscribe((res)=>{
      this.register.reset({});
    })
    this.notifyService.showSuccess("You Registered successfully !!", "Restaurant");
  }

}
