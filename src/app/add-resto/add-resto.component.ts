import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { RestoService } from '../services/resto.service';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {

  constructor(private resto:RestoService, private notifyService:NotificationService,
    private route:Router) { }

  addResto = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })

  ngOnInit(): void {
   
  }

  collectResto(){
    return this.resto.saveResto(this.addResto.value).subscribe((res)=>{
      console.warn("result",res);
      this.notifyService.showSuccess("Data Added successfully !!", "Restaurant");
      this.addResto.reset({});
      this.route.navigate(['/']);
    })
  }

// showToasterError(){
//     this.notifyService.showError("Something is wrong", "Restaurant")
// }

// showToasterInfo(){
//     this.notifyService.showInfo("This is info", "Restaurant")
// }

// showToasterWarning(){
//     this.notifyService.showWarning("This is warning", "Restaurant")
// }

}