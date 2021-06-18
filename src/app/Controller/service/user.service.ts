import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
   private _user: User | undefined;
   private _userLogin: User | undefined;
   public isLoging: Object | undefined ;
  private url ='http://betterholday.php';
  constructor(private http:HttpClient) { }

  public inscription(user:User):any{
    this.http.post(this.url+"/addUser",user).subscribe(
        data=>{
          return data;
        },error=>{
          console.log(error)
    }
    )
  }
  public logging(user:User):any{
    this.http.post(this.url+"/seConnecter",user).subscribe(
      data=>{
        console.log('success' + data);
        this.isLoging=data;
        return data;
      },error=>{
        console.log(error)
      }
    )
  }

  get user(): User {
    if(this._user==null){
      this._user=new User();
    }
    return<User> this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get userLogin(): User  {
    if(this._userLogin==null){
      this._userLogin=new User();
    }
    return this._userLogin;
  }

  set userLogin(value: User ) {
    this._userLogin = value;
  }
}
