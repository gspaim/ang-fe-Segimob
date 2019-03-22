import { PipeTransform, Pipe } from '@angular/core';
import { Venda } from '../shared/venda.model';

@Pipe({
    name: 'vendaFilter'
})
export class VendaFilterPipe implements PipeTransform {
    transform(vendas: Venda[], searchTerm: string): Venda[] {
        if (!vendas || !searchTerm) {
            return vendas;
        }
        return vendas.filter(venda =>
            venda.dataVenda.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}