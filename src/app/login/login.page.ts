import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoadService } from '../services/loading/load.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  registerForm: FormGroup;
  loginForm: FormGroup;
  isSubmitted = false;
  mode ='';

  constructor(
    private toastServ: ToastService,
    private loadServ: LoadService,
    private fb: FormBuilder,
    private route: Router
  ) {
    this.isLoggedIn();
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      userMail: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      userMail: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; };

  ngOnInit() {
    this.mode ='loginMode';
  }

  login(event) {
    event.stopPropagation();
    this.isSubmitted = true;
    this.loadServ.presentLoad('Authentication...');
    const userEat = JSON.parse(localStorage.getItem('userEat'));
    const dataFormUser = {
      userName: this.loginForm.value.userName,
      userMail: this.loginForm.value.userMail,
      password: this.loginForm.value.password
    };
    if (!userEat) {
      this.loadServ.dismissLoad();
      this.toastServ.presentToast('User Invalid! 😡');
      return;
    }    
    if (!this.loginForm.value.userMail || !this.loginForm.value.password) {
      this.loadServ.dismissLoad();
      this.toastServ.presentToast('Login Invalid! 😡');
      return;
    } else {
      if(userEat.userMail===dataFormUser.userMail &&
        userEat.password===dataFormUser.password){
        userEat['isLogged']='true';
        localStorage.setItem('userEat', JSON.stringify(userEat));
        this.loginForm.reset();
        this.route.navigate(['tabs', 'tab1']);
      } else {
        this.route.navigateByUrl('login');
        this.toastServ.presentToast('Wrong email or password! 😡');
      }
      this.loadServ.dismissLoad();
    }
  }

  register(event) {
    event.stopPropagation();
    this.isSubmitted = true;
    if (this.registerForm.invalid) {
      this.toastServ.presentToast('Please, inform your data!');
      return;
    } else {
      this.loadServ.presentLoad('Authentication...');
      const dataUser = {
        userName: this.registerForm.value.userName,
        userMail: this.registerForm.value.userMail,
        password: this.registerForm.value.password,
        isLogged: 'false'
      };
      localStorage.setItem('userEat', JSON.stringify(dataUser));
      setTimeout(() => {
        let userEat = JSON.parse(localStorage.getItem('userEat'));
        if (userEat) {
          this.registerForm.reset();
          this.loadServ.dismissLoad();
          userEat['isLogged']='false';
          localStorage.setItem('userEat', JSON.stringify(userEat));
          this.route.navigate(['tabs', 'tab1']);
        }else {
          this.loadServ.dismissLoad();
          this.route.navigateByUrl('login');
          this.toastServ.presentToast('Error to register!');
        }    
      }, 1500);
    }
  }

  async isLoggedIn() {
    const userEat = JSON.parse(localStorage.getItem('userEat'));
    if (userEat && userEat['isLogged'] === 'true') {
      this.route.navigate(['tabs', 'tab1']);
    } else {
      this.route.navigateByUrl('login');
    }
  }

}
