import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { Venda } from './venda.model';
import { Produto } from '../../produtos/shared/produto.model';
import { Vendedor } from '../../vendedores/vendedor/shared/vendedor.model';
import { formatDate } from '@angular/common';
import { VendaProduto } from './vendaProduto.model';

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  url : string = "http://localhost:58631/";

  selectedVenda : Venda;
  selectedVendedor : Vendedor;
  listVendas : any;  
  listProduto : Produto[];
  listVendaProduto: VendaProduto;
  localResponseVenda : any;

  constructor(private http : Http) { }

  postVenda(venda : any){

    venda.dataVenda = formatDate(venda.dataVenda,'yyyy-MM-dd','en-us');
    if (venda.porcentagemComissao == 0) {
      venda.porcentagemComissao = 5;
    }

    var body = JSON.stringify(venda);
    
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});

    return this.http.post(this.url + 'api/Venda' ,body,requestOptions).pipe(map(x => x.json() as Venda));
  }

  getVendasList(){

    this.http.get(this.url + 'api/Venda').pipe(
      map(
        (data : Response) => {
          return data.json();
        }
      )
    ).toPromise().then(x => {
      this.listVendas = x;
    })
  }
}
