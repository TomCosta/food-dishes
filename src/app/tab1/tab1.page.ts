import { DataService } from '../services/data/data.service';
import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  preference: string = 'no preferences';
  categories: any;
  currentValue = 100;
  currentDualValues = {
    lower: 0,
    upper: 400
  };

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
  }

  rangeValues(event) {
    console.log('rangeValues: ', event.detail.value);
  }

  // use this for single slider on ion-range
  setValue($event: Event): void {
    this.currentValue = parseInt(($event.target as HTMLInputElement).value, 10);
  }
  
  // use this for dual sliders (dual knobs) on ion-range
  setDualValues($event: Event): void {
    this.currentDualValues = JSON.parse(JSON.stringify(($event.target as HTMLInputElement).value));
  }

  goToCategory(cat) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: cat
      }
    };
    this.router.navigate(['/tabs/tab2'], navigationExtras);
  }
}
