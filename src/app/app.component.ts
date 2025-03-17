import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { IProduct } from './models/product';
import { ProductsService } from './services/products.service';
import { Observable, tap } from 'rxjs';
import { GlobalErrorComponent } from "./components/global-error/global-error.component";
import { FormsModule } from '@angular/forms';
import { FilterProductsPipe } from './pipes/filter-products.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    CommonModule, 
    ProductComponent, 
    GlobalErrorComponent, 
    FormsModule,
    FilterProductsPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent implements OnInit {
  title = 'angular app';
  loading = false;
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>
  term=''

  constructor(private productsSerice: ProductsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.products$ = this.productsSerice
      .getAll()
      .pipe(
        tap(() => this.loading = false)
      )

    // this.productsSerice
    //   .getAll()
    //   .subscribe(products => {
    //     this.products = products;
    //     this.loading = false;
    //   })
  }
}
