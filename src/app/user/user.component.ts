import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  detailStr:string
  detailAuthor:string
  detailBio:any
  detailExperience:any
  detailSkills:any
  detailLanguages:any

  @Output() submitDetail = new EventEmitter();
  detail: any;
  detailPublisher: any;

  forwardDetail(){
    this.detail= new this.detail(this.detailStr,this.detailAuthor,this.detailPublisher)
    this.submitDetail.emit(this.detail)
    this.detailStr=''
    this.detailAuthor=''
    this.detailBio=''
    this.detailExperience=''
    this.detailLanguages=''
    this.detailSkills=''
  }
  
  constructor() { }

  ngOnInit() {
    
  }
  getDetail(newDetail){
    this.detail.push(newDetail)
  }

}
