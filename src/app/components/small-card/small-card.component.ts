import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  PhotoCover:string = "https://www.esports.net/br/wp-content/uploads/sites/3/2023/08/loud-2-1024x683.webp"
  @Input()
  CardTitle:string = "EG se consagra como campeão do mundial de valorant 2023 "
  constructor() { }

  ngOnInit(): void {
  }

}
