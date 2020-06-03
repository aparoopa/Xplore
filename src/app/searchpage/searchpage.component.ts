import { Component, OnInit } from '@angular/core';
import {XploreService} from '../xplore.service';
import { RouterModule , Routes, Router,NavigationEnd } from '@angular/router'; // for routing


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  isMaterialEntered:boolean;
  isMaterialDescEntered:boolean
  materialId:any;
  materialDesc:any;
  MatDescCheckboxdisabled: boolean;
  customerlist:any;

  constructor(public router: Router,public xploresservice: XploreService ) { }

  ngOnInit(): void {
    this.materialId='';
    this.materialDesc='';
    this.isMaterialEntered = true;
    this.isMaterialDescEntered = true;
    var modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
    
    
  }
 
  searchProductInfo(){
    if(this.materialId.length < 2 && this.materialDesc.length < 3){
      this.isMaterialEntered = false;
      this.isMaterialDescEntered = false;
      this.MatDescCheckboxdisabled = false;
    }
    else{
    this.router.navigate(['/prod-search-page']);
    }
  }

  //close the modal
  closeShipTo(){
    var modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "none";
  }
  DoneLookup(){
    this.closeShipTo();
  }

  searchCustomerLookup(){
    var modal = document.getElementsByClassName('modal') as HTMLCollectionOf<HTMLElement>;
    modal[0].style.display = "block";
    this.xploresservice.getCustomers()
                       .subscribe((response) =>{
                         this.customerlist = response,
                        console.log(response);
                       }) 
  }
  displayexactmatch(event){
    if ( event.target.checked ) {
      this.MatDescCheckboxdisabled = true;
 }
  }

}
