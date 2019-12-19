import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

    configUrl = 'https://viacep.com.br/ws/08340146/json';

    getConfig() {
    return this.http.get(this.configUrl);
    }
  constructor(private http: HttpClient) { }
}