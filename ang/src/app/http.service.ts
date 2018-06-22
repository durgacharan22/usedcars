import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  form = {}
  
      constructor(private http:Http){}
  
      setForm(form){
              this.form = form
              console.log(this.form)
      }
      getForm(){
          return this.form
      }
      postService(){
          return this.http.post('',this.form)
      }
}
