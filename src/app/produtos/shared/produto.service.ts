import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import {Produto} from'./produto.model';

@Injectable({ 
  providedIn: 'root'
})

export class ProdutoService {
  
  url : string = "http://localhost:58631/";
  selectedProduto : Produto;
  listProduto : Produto[];
  constructor(private http : Http) { }

  putProduto(id, prd) {
    var body = JSON.stringify(prd);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put(this.url + 'api/Produto/' + id,
      body,
      requestOptions).pipe(map(res => res.json()));
  }

  getProdutoById(id){
    return this.http.get(this.url + 'api/Produto/' + id).pipe
    (map((data : Response) =>{
      return data.json() as Produto;
    })).toPromise().then(x => {
      this.selectedProduto = x;
      return x;
    })
  }

  postProduto(prd : Produto){
    var body = JSON.stringify(prd);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post(this.url + 'api/Produto',body,requestOptions).pipe(map(x => x.json()));
  }

  getProdutoList(){
    this.http.get(this.url + 'api/Produto')
    .pipe(map((data : Response) =>{
      return data.json() as Produto[];
    })).toPromise().then(x => {
      this.listProduto = x;
    })
  }

  deleteProduto(id: number) {
    return this.http.delete(this.url + 'api/Produto/' + id).pipe(map(res => res.json()));
  }
}
