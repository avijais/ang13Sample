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
  expenses: any = []
  isEdit= false;

  constructor(
    private fb: FormBuilder,
    private api: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getExpenses()
    this.createForm()
  }

  getExpenses() {
    this.api.getExpenses().subscribe(
      success => {
        console.log('getExpenses : ', success)
        this.expenses = success
      }, err => {
        console.log("err : ", err)
        alert(err.message);
      }
    )
  }

  createForm() {
    const dateObj = new Date();
    const date = dateObj.getDate() + '/' + dateObj.getMonth() + '/' + dateObj.getFullYear();
    const time = dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
    this.productsForm = this.fb.group({
      id: [],
      amount: [],
      description: [''],
      expense_category: [''],
      paid_by: [''],
      date_time: [date + ' ' + time]
    })
  }

  onClosePopup() {
    setTimeout(() => {
      this.isEdit = false;
    }, 500);
  }

  onSubmit() {
    console.log("onSubmit");
    let productModel = Object.assign({}, this.productsForm.value);
    console.log(productModel);

    this.api.addExpense(productModel).subscribe(
      success => {
        console.log('success : ', success);
        document.getElementById('closePopup')?.click()
        this.getExpenses()
        this.productsForm.reset();
        alert('Product added successfully');
      }, err => {
        console.log('error : ', err);
        alert(err.message)
      }
    )
  }

  deleteExpense(id: any) {
    this.api.deleteExpens(id).subscribe(
      success => {
        this.getExpenses()
        alert('Expense deleted successfully')
      }, err => {
        alert(err.message)
      }
    )
  }

  editExpense(expense: any) {
    this.isEdit = true
    this.productsForm.patchValue({
      id: expense.id,
      amount: expense.amount,
      description: expense.description,
      expense_category: expense.expense_category,
      paid_by: expense.paid_by,
      date_time: expense.date_time
    })
  }

  saveEditExpense() {
    let expensesData = Object.assign({}, this.productsForm.value)
    
    this.api.editExpens(expensesData).subscribe(
      success => {
        document.getElementById('closePopup')?.click()
        alert('Updated Successfully.')
        this.getExpenses()
        this.isEdit = false
        this.productsForm.reset()
      }, err => {
        alert(err.message)
      }
    )
  }

}
