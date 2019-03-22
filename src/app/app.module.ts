import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoListComponent } from './produtos/produto-list/produto-list.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ProdutoFilterPipe } from './produtos/produto-list/produto-filter.pipe';
import { VendaComponent } from './vendas/venda/venda.component';
import { VendaListComponent } from './vendas/venda-list/venda-list.component';
import { VendedorComponent } from './vendedores/vendedor/vendedor.component';
import { VendasComponent } from './vendas/vendas.component';
import { VendaFilterPipe } from './vendas/venda-list/venda-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoComponent,
    DashboardComponent,
    ProdutoListComponent,
    ProdutoFilterPipe,
    VendaFilterPipe,
    VendaComponent,
    VendaListComponent,
    VendedorComponent,
    VendasComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
