import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FocusDirective } from '../../directives/focus.directive';
import { ProductsService } from '../../services/products.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule, FocusDirective],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {
  form: FormGroup;

  constructor(
    private productsService: ProductsService,
    private modalService: ModalService
  ) {
    this.form = new FormGroup({
      inputValue: new FormControl<string>('', [
        Validators.minLength(3),
      ])
    })
  }

  get inputCheck() {
    return this.form.controls.inputValue as FormControl;
  }

  changeInputValue(): void {
    console.log(this.form.value.inputValue);

    this.productsService.create({
      id: 934902349,
      title: this.form.value.inputValue as string,
      price: 13.5,
      description: 'lorem ipsum set',
      category: 'cloothes',
      image: 'https://i.pravatar.cc',
      rating: {
        rate: 42,
        count: 100
      }
    }).subscribe(() => {
      this.modalService.close();
    });
  }
}
