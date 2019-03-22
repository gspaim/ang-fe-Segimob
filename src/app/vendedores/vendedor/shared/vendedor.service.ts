import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { map } from 'rxjs/operators';
import { Vendedor } from './vendedor.model';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {
  url : string = "http://localhost:58631/";

  listVendedor: Vendedor[];

  constructor(private http : Http ) { }

  getVendedorList(){
    this.http.get(this.url + 'api/Vendedor')
    .pipe(map((data : Response) => {
      return data.json() as Vendedor[];})).toPromise().then(x => {
        this.listVendedor = x;
      })
  }
}
