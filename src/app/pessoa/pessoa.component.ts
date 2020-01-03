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

<<<<<<< HEAD
  ngOnInit() {
=======
   ngOnInit() {
>>>>>>> 9b3b32e7c381e892c333481d840707c93486ba6c

  }
}
