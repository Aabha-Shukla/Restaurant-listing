import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RestoService } from '../services/resto.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.scss']
})
export class UpdateRestoComponent implements OnInit {
  data:any;

  updateResto = new FormGroup({
    name:new FormControl(''),
    email:new FormControl(''),
    address:new FormControl('')
  })

  constructor(private router:ActivatedRoute, 
    private resto:RestoService,
    private notifyService:NotificationService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.resto.getCurrentResto(this.router.snapshot.params.id).
    subscribe((result)=>{
      this.data = result;
      this.updateResto = new FormGroup({
        name:new FormControl(this.data.name),
        email:new FormControl(this.data.email),
        address:new FormControl(this.data.address)
      })
    })
  }

  collection()
  {
    this.resto.updateResto(this.router.snapshot.params.id,this.updateResto.value).subscribe((res)=>{
      console.warn(res);
    })
    this.notifyService.showSuccess("Data Updated successfully !!", "Restaurant");
  }
}
