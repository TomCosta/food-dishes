import { DataService } from '../services/data/data.service';
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
  ){
  }

  ngOnInit(): void {
    this.getDishesCategory();
  }

  getDishesCategory(){
    this.categories = this.dataApi.getDishess();
    console.log('Cats: ', this.categories);
  }

  goToCategory() {

  }
}
