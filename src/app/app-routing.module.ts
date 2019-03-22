import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendasComponent } from './vendas/vendas.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'vendas', component: VendasComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
