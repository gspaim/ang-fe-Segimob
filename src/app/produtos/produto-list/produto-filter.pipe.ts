import { PipeTransform, Pipe } from '@angular/core';
import { Produto } from '../shared/produto.model';

@Pipe({
    name: 'produtoFilter'
})
export class ProdutoFilterPipe implements PipeTransform {
    transform(produtos: Produto[], searchTerm: string): Produto[] {
        if (!produtos || !searchTerm) {
            return produtos;
        }
        return produtos.filter(produto =>
            produto.nome.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}