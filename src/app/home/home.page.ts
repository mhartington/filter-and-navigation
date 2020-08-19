import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public filterVal: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public location: Location,
  ) {}
  ngOnInit() {
    const filter = this.activatedRoute.snapshot.queryParamMap.get('filter');
    if (filter) {
      this.filterVal = parseInt(filter);
    }
  }
  increment() {
    this.filterVal += 1;
    this.navigate();
  }
  decrement() {
    this.filterVal -= 1;
    this.navigate();
  }
  navigate() {
    const navExtras: NavigationExtras = {
      queryParams: { filter: this.filterVal },
    };
    this.router.navigate([], { ...navExtras });
  }
}
