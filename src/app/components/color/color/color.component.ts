import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[];
  currentColor:Color;
  emptyColor:Color;
  filterColorText="";
 
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

    getColors()
    {
      this.colorService.getallcolors().subscribe(response=>{
        this.colors=response.data;
        
      })
    }

    setCurrentColor(color:Color){
      this.currentColor=color;
    }
    currentColorClass(color:Color){
      if(this.currentColor==color)
      {
        return " list-group-item list-group-item-action active";
      }else{
        return  "list-group-item list-group-item-action"
      }
    }
   
    currentAllColorClass(){
      if(!this.currentColor){
        return "list-group-item list-group-item-action active";
      }else{
        return "list-group-item list-group-item-action";
      }
    }
  
    clearCurrentColor(){
      this.currentColor=this.emptyColor;
    }
}
