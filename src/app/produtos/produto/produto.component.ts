import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ProdutoService } from '../shared/produto.service'
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html'
})
export class ProdutoComponent implements OnInit {
  getData :  string;

  constructor(private produtoService: ProdutoService, private toastr: ToastrService) { }
  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.produtoService.selectedProduto = {
      id: null,
      nome: '',
      valorBruto: null,
      ativo: false
    }
  }

  onSubmit(form: NgForm) {
      if (form.value.Id == null) {
        this.produtoService.postProduto(form.value)
          .subscribe(data => {
            this.resetForm(form);
            this.produtoService.getProdutoList();
            this.toastr.success('Registro adicionado com sucesso!', 'Produto');
          })
      }
      else {
        this.produtoService.putProduto(form.value.Id, form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.produtoService.getProdutoList();
          this.toastr.info('Registro atualizado com sucesso!', 'Produto');
        });
      }
  }

}
