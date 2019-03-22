import { Vendedor } from "../../vendedores/vendedor/shared/vendedor.model";

export class Venda{
    id : number;
    idVendedor : number;
    porcentagemComissao : number;
    dataVenda: string;
    vendaCancelada: boolean;
}