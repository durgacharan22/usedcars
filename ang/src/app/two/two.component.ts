import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpService} from '../http.service'

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {

  constructor(private router:Router,private http:HttpService) { }
  
    ngOnInit() {
    }
  
    signin(form){
        var formpart1 = this.http.getForm()
        this.http.setForm({...formpart1,...form.value})
        this.http.postService().subscribe(
          res => {
            console.log(res)
            this.router.navigateByUrl('/final')
          },
          err => {
              console.log(err)
          }
        )
        
    }

}
