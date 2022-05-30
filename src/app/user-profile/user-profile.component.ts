import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IExUsers } from '../iex-users';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData?: IExUsers;

  constructor(private activeRoute: ActivatedRoute, private userServe: UserServiceService) { 
  }


  ngOnInit(): void {

    this.userData = this.userServe.getCurrentUser()

    }
  }

  

 



