import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private httpClient: HttpClient){}

  get(url: string, options: {
    headers?: HttpHeaders;
    observe: 'response';
    params?: HttpParams;
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    }): Observable<HttpResponse<Object>>;

    get_products(){
      this.httpClient.get(this.baseUrl + '/products').subscribe((res : any[])=>{
      console.log(res);
      this.products = res;
      });
    }
  

  ngOnInit() {


  }

}
