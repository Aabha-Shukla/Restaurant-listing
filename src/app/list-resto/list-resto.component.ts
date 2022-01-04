import { Component, OnInit } from '@angular/core';
import { RestoService } from '../services/resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collection :any;

  ngOnInit(){
   this.getData();
  }

  getData(){
    this.resto.getList().subscribe((res)=>{
      console.warn(res);
      this.collection=res;
    });
  }

  deleteResto(item:any){
    // this.collection.splice(item-1,1);
    this.resto.deleteResto(item).subscribe((res)=>{
      console.warn("result",res);
      this.getData();
    })
  }
}
