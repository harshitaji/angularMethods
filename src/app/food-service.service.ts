import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodServiceService {
  url:string
  constructor(private _http:HttpClient) {
    this.url = "https://jsonplaceholder.typicode.com";
   }
  getPosts(){
    let endPoints="/users"
      return this._http.get(this.url+endPoints);
  }
  addPost(postData: Object) {
    let endPoints = "/posts"
   return this._http.post(this.url + endPoints, postData);
  }
  deletePost() {
    let endPoints = "/posts/1"
    return this._http.delete(this.url + endPoints)
  }
  getPostById(id) {
    let endPoints = "/posts/" + id;
   return  this._http.get(this.url + endPoints)
  }
}
