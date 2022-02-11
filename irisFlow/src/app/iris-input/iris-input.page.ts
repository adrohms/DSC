import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-iris-input',
  templateUrl: './iris-input.page.html',
  styleUrls: ['./iris-input.page.scss'],
})
export class IrisInputPage implements OnInit {
  isSend: string = 'Send';
  data:string = '';
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSend(){
    this.data?this.data:this.isSend;
  }

  onSubmit(form: NgForm){
    const alturaSepa = form.value.alturaSepa;
    const larguraSepa = form.value.larguraSepa;
    const alturaPeta = form.value.alturaPeta;
    const larguraPeta = form.value.larguraPeta;

    
    this.http.get(`http://localhost:8000/irisFlower/predict/${alturaSepa}/${larguraSepa}/${alturaPeta}/${larguraPeta}`)
    .pipe(
      map((res: any) => {
        console.log(res);
        return res.key;
      })
    ).subscribe(key => {
      this.data = key;
      console.log(this.data);
    })
    
    
    
  }
  

}
  



