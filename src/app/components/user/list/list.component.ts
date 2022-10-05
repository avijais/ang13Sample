import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiServiceService } from 'src/app/shared/services/api/api-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  productsForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private api: ApiServiceService
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

    this.api.addProduct(productModel).subscribe(
      success => {
        console.log('success : ', success);
        document.getElementById('closePopup')?.click()
        this.productsForm.reset();
        alert('Product added successfully');
      }, err => {
        console.log('error : ', err);
        alert(err.message)
      }
    )
    
  }

}
