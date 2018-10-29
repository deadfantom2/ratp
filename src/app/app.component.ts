import {Component, OnInit} from '@angular/core';
import { RatpService } from "./services/ratp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor( private ratp: RatpService ) { }


  ngOnInit() {

  }


  test(){
    this.ratp.getDatas().subscribe(res => res);
  }




}
