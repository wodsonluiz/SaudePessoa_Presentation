import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../entities/Pessoa';
import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  private _Url = '';

  constructor(private _http: HttpClient) { }

  getPessoas(nome: string): Observable<Pessoa>{
    return this._http.get<Pessoa[]>(this._Url)
    .pipe(
      
    )
  }

  ngOnInit() {
  }

}
