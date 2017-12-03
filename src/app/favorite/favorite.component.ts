import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  //inputs:["isFavorite"]
})
export class FavoriteComponent implements OnInit {
  @Input("is-Favorite") isFavorite:boolean;
  @Output('favChange') change=new EventEmitter();
//  isFavorite:boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavorite=!this.isFavorite
    this.change.emit();
    console.log({newValue:this.isFavorite})
  }
}


// Place this code parent component class
// data={
//   isSelected:true,
//   title:"Title"
// }
// changeFav(value:FavChangedEventArgs){
//   console.log(value)
// }

export interface FavChangedEventArgs{
  newValue:Boolean
}