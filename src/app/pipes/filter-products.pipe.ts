import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search: string): IProduct[] {
    if (search.length === 0) return products;

    return products.filter((product: IProduct) => product.title.toLowerCase().includes(search.toLowerCase()));
  }

}
