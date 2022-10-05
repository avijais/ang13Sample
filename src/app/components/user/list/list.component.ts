import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productsForm!: FormGroup

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.productsForm = this.fb.group({
      id: [],
      name: [''],
      product_type: [''],
      cream_type: ['']
    })
  }

  onSubmit() {
    console.log("onSubmit");
    let productModel = Object.assign({}, this.productsForm.value);
    console.log(productModel);
    document.getElementById('closePopup')?.click()
    this.productsForm.reset();
  }

}
