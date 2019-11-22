import { Component, OnInit } from '@angular/core';
import { SinduService } from '../sindu.service';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  output: any;
  sam: any;
  neelu: Subscription;

  constructor(private p:SinduService) { }

  ngOnInit() {
   this.neelu=timer(0,10000).pipe(switchMap(()=>this.p.getdata())).subscribe(resp=>{console.log(resp)
    this.output=resp['hits']
    })
  }
 siri(sri){
    this.sam=sri;
  }
}
