import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private route: Router
  ){    
  }

  logout() {
    let userEat = JSON.parse(localStorage.getItem('userEat'));
    userEat['isLogged']='false';
    localStorage.setItem('userEat', JSON.stringify(userEat));
    this.route.navigateByUrl('login');
  }
}
