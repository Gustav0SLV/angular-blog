import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  PhotoCover:string =''
  ContentTitle:string=''
  ContentDescription:string=''
  private id:string | null ='0'
 
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.SetValuesToComponent(this.id)
  }

    SetValuesToComponent(id:string | null){
      const result = dataFake.filter(article => article.id == id)[0]

    this.ContentTitle = result.title
    this.ContentDescription = result.description
    this.PhotoCover = result.photo
     
    }
  
}
