import { Component, OnInit } from '@angular/core';
import { PaymentDetailServiceService } from '../shared/payment-detail-service.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
