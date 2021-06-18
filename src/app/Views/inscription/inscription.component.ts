import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Controller/service/user.service";
import {User} from "../../Controller/model/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  constructor(private userService:UserService,private route: Router) { }

  ngOnInit(): void {
  }
  public inscription(user:User){
    if( this.userService.inscription(user)!=-1){
      this.route.navigate(["/logging"])
    }
  }
  get user(): User {
    return this.userService.user;
  }
}
