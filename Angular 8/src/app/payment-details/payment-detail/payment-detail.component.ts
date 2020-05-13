import { Component, OnInit } from '@angular/core';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { NgForm } from "@angular/forms";
import { PaymentDetail } from 'src/app/shared/payment-detail.model.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailServiceService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PMid: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMid == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetail(form.value).subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}