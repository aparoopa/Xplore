import { Component, OnInit } from '@angular/core';
import { RouterModule , Routes, Router,NavigationEnd } from '@angular/router'; // for routing

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  MaterialUploadPage(){
    this.router.navigate(['/upload-material']);
  }
  SearchPage(){
    this.router.navigate(['/search-page']);
  }

}
