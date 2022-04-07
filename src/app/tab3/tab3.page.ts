import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonRadioGroup } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @ViewChild('radioGroup') radioGroup: IonRadioGroup;
  // userForm: FormGroup;
  preference: string = 'no preferences';
  allergy: string = '';
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
    private fb: FormBuilder,
    private route: Router
  ){
    // this.userForm = this.fb.group({
    //   name: [''],
    //   isChecked: ['']
    // });
    this.getPreference();
  }
  
  ngOnInit(): void {
    // this.radioGroup.value = 'vegetarian';    
  }

  // get formControls() { return this.userForm.controls; };

  radioGroupChange(event) {
    // console.log("radioGroupChange",event.detail);
    this.selectedRadioGroup = event.detail;    
    this.setPreference(event.detail);
  }

  radioSelect(event) {
    // console.log("radioSelect",event.detail);
    this.selectedRadioItem = event.detail;
  }

  setPreference(valueBox){
    // console.log('valueBox: ', valueBox);
    this.preference = valueBox.value;
    localStorage.setItem('eatBox', JSON.stringify(valueBox));
  }

  getPreference(){
    this.selectedRadioItem = JSON.parse(localStorage.getItem('eatBox'));
    this.selectedRadioGroup = JSON.parse(localStorage.getItem('eatBox'));
    this.preference = JSON.parse(localStorage.getItem('eatBox'))?.value || 'vegetarian';
    // console.log('selectedBox: ', this.selectedRadioItem, this.selectedRadioGroup);
    this.allergy = JSON.parse(localStorage.getItem('eatAlergy'));
  }

  inputAllergy(event) {
    console.log('inputAlergy: ', event.target.value);
    this.allergy = event.target.value;
    localStorage.setItem('eatAlergy', JSON.stringify(event.target.value));
  }

  logout() {
    let userEat = JSON.parse(localStorage.getItem('userEat'));
    userEat['isLogged']='false';
    localStorage.setItem('userEat', JSON.stringify(userEat));
    this.route.navigateByUrl('login');
  }
}
