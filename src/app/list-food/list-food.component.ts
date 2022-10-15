import { Component, OnInit } from '@angular/core';
import { FoodServiceService } from '../food-service.service';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
data;
newData;
  data1: any;
  constructor(
    private _foodServ:FoodServiceService
  ) { }

  ngOnInit() {
    this.getData();
    this.addpost();
  }
  getData(){
   this._foodServ.getPosts().subscribe((res:any)=>{
    this.data=res;
   });
  }
  addpost(){
    let postData = {
      name:'Harshita',
      username :'har2345'
    }
    this._foodServ.addPost(postData).subscribe((res:any)=>{
      this.data1=res;
      this._foodServ.getPostById(12).subscribe(res =>{
        this.newData=res;
       })
    });
  }
  
  deleteData(){
    this._foodServ.deletePost().subscribe(res =>{
      
    });
    this.getData();
  }
}
