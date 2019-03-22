import { Component, Attribute } from '@angular/core';  
import { VendasService } from '../vendas/shared/vendas.service';
import { ProdutoService } from '../produtos/shared/produto.service';
  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {  
  
  dataAtual : string;

  constructor( private vendasService: VendasService, private produtoService : ProdutoService) { }

    ngOnInit() {
      this.dataAtual = Date();
      this.vendasService.getVendasList();
      this.produtoService.getProdutoList();
    }
}

