import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';;

import { switchMap } from 'rxjs/operators';

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
    let uid = this.route.snapshot.paramMap.get('id');
  }

}
