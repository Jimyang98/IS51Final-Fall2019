import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';

export interface IUser {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = { username: '', password: ''};
  currentUser: IUser = null;

  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {

  }
  login(user: IUser) {
    console.log('login', user);
    const defaultUser: IUser = {username: 'jim', password: 'jim123'};
    if (user.username !== null && user.password !== null) {
      if (user.username === defaultUser.username && user.password === defaultUser.password) {
        // localStorage.setItem('user', JSON.stringify(user));
        // comeback
        this.router.navigate(['cart', user]);
      } else {
        this.toastService.showToast('danger', 3000, 'User Name or Password is incorrect' );
      }
    } else {
      this.toastService.showToast('danger', 3000, 'User Name or Password is incorrect' );
    }
  }
}
