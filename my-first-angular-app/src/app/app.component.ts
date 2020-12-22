import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  myControl = new FormControl();
  states;
  constructor(){
     this.loadStates();
  }


  //build list of states as map of key-value pairs for Autocomplete form
  loadStates() {
     var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
        Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
        Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
        Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
        North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
        South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
        Wisconsin, Wyoming';
     this.states =  allStates.split(/, +/g).map( function (state) {
        return {
           value: state.toUpperCase(),
           display: state
        };
     });
  }

  //checkbox values
  checked = false;
  indeterminate = false;
  labelPosition = 'after';
  disabled = false;

  //email validators
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
]);

//radio button values
favoriteSeason: string;
seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];


//select value
selectedValue: string;
foods: Food[] = [
   {value: 'steak', display: 'Steak'},
   {value: 'pizza', display: 'Pizza'},
   {value: 'tacos', display: 'Tacos'}
];

//slider values
   invert = false;
   thumbLabel = false;
   value = 0;
   vertical = false;

   color = 'primary';
   mode = 'determinate';
   bufferValue = 75;centered = false;
   unbounded = false;
   radius: number;
   color: string;


}
