import { Component, OnInit, Output } from '@angular/core';
import { IExUsers } from '../iex-users';
import { IUser } from '../iuser';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: IUser = {username: '', password: ''};

  userx?: IExUsers;
  exUsers?: IExUsers[]; 

  constructor(private userServe: UserServiceService, private route: Router) { }
  
  ngOnInit(): void {
    this.userServe.fetchUsers().subscribe(users => {
      this.exUsers = users;      
    })
  }

  login(){

    this.userx = this.exUsers?.find(o => o.username === this.user.username && o.password === this.user.password);
    console.log(this.userx);
    
    if(this.userx){
      this.userServe.setCurrentUser(this.userx) 
      this.route.navigate(['/users/profile', this.userx?.id]);
    }



  
  }

}
