import { Component, OnInit } from '@angular/core';
import { PaymentDetailServiceService } from 'src/app/shared/payment-detail-service.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailServiceService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

populateForm(pd:PaymentDetail){
  this.service.formData = Object.assign({},pd);
}


onDelete(PMid) {
  if (confirm('Are you sure to delete this record ?')) {
    this.service.deletePaymentDetail(PMid)
      .subscribe(res => {
        debugger;
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'Payment Detail Register');
      },
        err => {
          debugger;
          console.log(err);
        })
  }
}
}
