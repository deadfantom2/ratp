import {Component, OnInit} from '@angular/core';
import { RatpService } from "./services/ratp.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  datas:any;

  constructor( private ratp: RatpService ) { }


  ngOnInit() {
    this.test()
  }


  test(){
    this.datas = this.ratp.getDatas().subscribe(res => {
      this.datas = res
      console.log(this.datas)
    });
  }




}
