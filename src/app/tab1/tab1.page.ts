import { DataService } from '../services/data/data.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  categories: any;
  preference: string = 'no preferences';

  constructor(
    private dataApi: DataService,
    private router: Router
  ){
  }

  ngOnInit(): void {
    this.getDishesCategory();
  }

  getDishesCategory(){
    this.categories = this.dataApi.getDishess();
    // console.log('Cats: ', this.categories);
  }

  goToCategory(cat) {
    // console.log('Click cat: ', cat.title);
    let navigationExtras: NavigationExtras = {
      state: {
        data: cat
      }
    };
    this.router.navigate(['/tabs/tab2'], navigationExtras);
  }
}
