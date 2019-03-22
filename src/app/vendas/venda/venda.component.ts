import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { VendasService } from '../shared/vendas.service';
import { VendedorService } from '../../vendedores/vendedor/shared/vendedor.service';
import { ProdutoService } from '../../produtos/shared/produto.service';
import { Produto } from '../../produtos/shared/produto.model';
import { VendaProduto } from '../shared/vendaProduto.model';
import { VendaProdutoService } from '../shared/venda-produto.service';
import { Venda } from '../shared/venda.model';
import { map } from '../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  selectedIdVendedor: number;
  selectedIdProduto: number;

  selectedProduto: Produto;
  listaProdutoVenda: Produto[];
  vendaProduto: VendaProduto;
  vendaAtual: Venda;

  selectedChangeVendedorHandler(event: any) {
    this.selectedIdVendedor = event.target.value;
  }
  selectedChangeProdutoHandler(event: any) {
    this.selectedIdProduto = event.target.value;
  }

  constructor(
    private vendasService: VendasService,
    private vendedorService: VendedorService,
    private vendaProdutoService: VendaProdutoService,
    private toastr: ToastrService,
    private produtoService: ProdutoService
  ) { }

  ngOnInit() {
    this.resetForm();
    this.vendedorService.getVendedorList();
    this.produtoService.getProdutoList();
    this.vendaAtual = new Venda();
    this.listaProdutoVenda = [];
  }

  resetForm(form?: NgForm) {

    this.vendasService.selectedVenda = {
      id: 0,
      porcentagemComissao: 5,
      idVendedor: 0,
      dataVenda: Date(),
      vendaCancelada: false
    }
    this.listaProdutoVenda = [];
  }

  adicionarProduto(form?: NgForm) {
    if (this.selectedIdProduto > 0) {
      this.selectedProduto = this.produtoService.listProduto.find(x => x.id == this.selectedIdProduto);
      if (!this.listaProdutoVenda.includes(this.selectedProduto))
        this.listaProdutoVenda.push(this.selectedProduto);
      else
        this.toastr.warning("Produto ja adicionado a Venda");
    } else
      this.toastr.info("Selecione um Produto para adicionar a venda");
  }

  onDelete(produto: Produto) {

    this.listaProdutoVenda.splice(this.listaProdutoVenda.indexOf(produto), 1);
    this.toastr.warning("Registro Excluido com sucesso", "Produto");

  }

  onSubmit(form: NgForm, listaProdutosAtual : Produto[]) {
    if (this.listaProdutoVenda.length > 0 && this.selectedIdVendedor > 0) {

      this.vendasService.postVenda(form.value).pipe(map(x => {
        return x
      })).subscribe(data => {
        this.insertVendaProdutos(data, listaProdutosAtual);
      })
    
      this.resetForm(form);
      this.toastr.success('Registro adicionado com sucesso!', 'Venda de Produtos');
    } else {
      this.toastr.info("Adicione ao menos 1 produto a Venda e/ou Selecione um Vendedor");
    }

  }

  insertVendaProdutos(vendaAtual: Venda, listaProdutosAtual : Produto[]) {
    
    listaProdutosAtual.forEach(p => {
      
      this.vendaProduto = new VendaProduto();
      this.vendaProduto.id = 0;
      this.vendaProduto.idProduto = p.id;
      this.vendaProduto.idVenda = vendaAtual.id;
      this.vendaProdutoService.postVendaProduto(this.vendaProduto);
      
    });
  }

}
