import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Controller/service/user.service";
import {User} from "../../Controller/model/user.model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {

  constructor(private userService:UserService,private route: Router) { }

  ngOnInit(): void {
  }
  logging(user:User){
    if(this.userService.logging(user)!=-1||this.userService.logging(user)!=-2){
      this.route.navigate(["/acueilAdmine"])


    };
  }

  get userLogin(): User  {
    return this.userService.userLogin;
  }
}
