import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  submit(f){
    console.log(f);
  }
  contactMethods=[
    {id:1,name:"Naresh"},
    {id:2,name:"Mahesh"},
    {id:3,name:"Lokesh"}
  ]
}
