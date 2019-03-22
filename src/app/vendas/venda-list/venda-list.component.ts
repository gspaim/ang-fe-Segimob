import { Component, OnInit } from '@angular/core';
import { VendasService } from '../shared/vendas.service';
import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from '../../produtos/shared/produto.service';
import { VendaProduto } from '../shared/vendaProduto.model';
import { formatDate } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-venda-list',
  templateUrl: './venda-list.component.html',
  styleUrls: ['./venda-list.component.css']
})
export class VendaListComponent implements OnInit {

  dataAtual : string;
  
  constructor(private vendasService: VendasService, private produtoService : ProdutoService  ,private toastr : ToastrService) { }

  ngOnInit() {
    this.dataAtual = formatDate(Date(),'yyyy-MM-dd','en-us');
  }

  getValorVenda(vendaProdutos : VendaProduto[])
  {
    var valorTotal : number = 0;

    vendaProdutos.forEach(v => {
      valorTotal += this.produtoService.listProduto.find(x => x.id == v.idProduto).valorBruto;
    });

    return valorTotal;
  }

  

}
