import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @ViewChild('radioGroup') radioGroup: IonRadioGroup;
  preference: string = 'no preferences';
  allergy: string = '';
  eatPref: string = '';
  categories = [
    { value: 'vegetarian', name: 'Vegetarian', isChecked: true },
    { value: 'vegan', name: 'Vegan', isChecked: false },
    { value: 'halal', name: 'Halal', isChecked: false },
    { value: 'kosher', name: 'Kosher', isChecked: false }
  ];

  defaultSelectedRadio = 'vegetarian';
  //Get value on ionChange on IonRadioGroup
  selectedRadioGroup:any;
  //Get value on ionSelect on IonRadio item
  selectedRadioItem:any;

  constructor(
    private route: Router
  ){
    this.getPreference();
  }
  
  ngOnInit(): void {
  }

  radioGroupChange(event) {
    this.selectedRadioGroup = event.detail;    
    this.setPreference(event.detail);
  }

  radioSelect(event) {
    this.selectedRadioItem = event.detail;
  }

  setPreference(valueBox){
    this.preference = valueBox.value;
    localStorage.setItem('eatBox', JSON.stringify(valueBox));
  }

  getPreference(){
    this.selectedRadioItem = JSON.parse(localStorage.getItem('eatBox'));
    this.selectedRadioGroup = JSON.parse(localStorage.getItem('eatBox'));
    this.preference = JSON.parse(localStorage.getItem('eatBox'))?.value || 'vegetarian';
    this.allergy = JSON.parse(localStorage.getItem('eatAlergy'));
    this.eatPref = JSON.parse(localStorage.getItem('eatPref'));
  }

  inputAllergy(event) {
    console.log('inputAlergy: ', event.target.value);
    this.allergy = event.target.value;
    localStorage.setItem('eatAlergy', JSON.stringify(event.target.value));
  }

  inputeatPref(event) {
    console.log('eatPref: ', event.target.value);
    this.eatPref = event.target.value;
    localStorage.setItem('eatPref', JSON.stringify(event.target.value));
  }

  logout() {
    let userEat = JSON.parse(localStorage.getItem('userEat'));
    userEat['isLogged']='false';
    localStorage.setItem('userEat', JSON.stringify(userEat));
    this.route.navigateByUrl('login');
  }
}
