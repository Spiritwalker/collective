import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-pages',
  templateUrl: './top-pages.component.html',
  styleUrls: ['./top-pages.component.scss']
})

/**
 * Top Pages Component
 */
export class TopPagesComponent implements OnInit {

  // Top Selling data
  @Input() TopPages: Array<{
    item?: string;
    cantidad?: string;
    porcentaje?: string;
  }> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
