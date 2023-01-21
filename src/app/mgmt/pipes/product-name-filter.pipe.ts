import { Pipe, PipeTransform } from '@angular/core';
// parameterized pipe
@Pipe({
  name: 'productNameFilter',
})
export class ProductNameFilterPipe implements PipeTransform {
  transform(products: any, productNameTyped: string): any {
    if (productNameTyped !== '') {
      return [...products].filter(
        (product) =>
          product.name.toLowerCase().includes(productNameTyped.toLowerCase()) &&
          product
      );
    } else return products;
  }
}
