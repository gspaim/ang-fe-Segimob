import { Component, OnInit } from '@angular/core';
import { VendedorService } from './shared/vendedor.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  constructor(private vendedorService: VendedorService, private toastr: ToastrService) { }

  ngOnInit() {
  }

}
