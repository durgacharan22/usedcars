import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  constructor(private router:Router,private http:HttpService) { }
  
    ngOnInit() {
    }
  
    signin(form){
      this.http.setForm(form.value)
      this.router.navigateByUrl('/two')
    }

}
