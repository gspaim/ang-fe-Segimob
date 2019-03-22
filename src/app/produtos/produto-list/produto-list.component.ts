import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service'
import { Produto } from '../shared/produto.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  searchTerm: string;
  constructor(private produtoService: ProdutoService, private toastr : ToastrService) { }

  ngOnInit() {
    this.produtoService.getProdutoList();
  }

  showForEdit(prd: Produto) {
    this.produtoService.selectedProduto = Object.assign({}, prd);
  }

  onDelete(id: number) {
    if (confirm('Você tem certeza que deseja apagar o registro ?') == true) {
      this.produtoService.deleteProduto(id)
      .subscribe(x => {
        this.produtoService.getProdutoList();
        this.toastr.warning("Registro Excluido com sucesso","Produto");
      })
    }
  }

}
