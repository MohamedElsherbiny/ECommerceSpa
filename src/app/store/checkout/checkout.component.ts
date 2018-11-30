import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/model/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnDestroy, OnInit {
  orderSent = false;
  submitted = false;
  constructor(public order: Order) { }

  ngOnInit() {
    const s = JSON.stringify(this.order);
    console.log(s);
  }
  ngOnDestroy(): void {
    const s = JSON.stringify(this.order);
    console.log(s);
  }
  submitOrder(form: NgForm) {
    this.submitted = true;
    // if (form.valid) {
    //   this.repository.saveOrder(this.order).subscribe(order => {
      console.log(this.order);
        this.order.clear();
        //  this.orderSent = true;
        this.submitted = false;
    //   });
  }
}


