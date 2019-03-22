import { Injectable } from '@angular/core';
import { VendaProduto } from './vendaProduto.model';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VendaProdutoService {

  url : string = "http://localhost:58631/";

  constructor(private http: Http) { }

  postVendaProduto(vendaProdutos : VendaProduto)
  {
    var body = JSON.stringify(vendaProdutos);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});

    return this.http.post(this.url + 'api/VendaProdutos',body,requestOptions).pipe(map(x => x.json())).toPromise().then(y => { return y});

  }
}
