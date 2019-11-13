import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';;

import { switchMap } from 'rxjs/operators';
import { environment } from '@env/environment';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  uid: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router, ) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get('id');
    if ( !environment.production ) {
      console.log(this.uid);
    }
  }

}
