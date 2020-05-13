import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model.model';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
//http://localhost:51474/api/PaymentDetail

export class PaymentDetailServiceService {
  formData: PaymentDetail = {
    CVV: null,
    CardOwnerName: null,
    CardNumber: null,
    ExpirationDate: null,
    PMid: null
  }
  readonly rootURL = 'http://localhost:51474/api';
  list : PaymentDetail[];
/**
 *
 */

constructor(public http: HttpClient) { }

postPaymentDetail(formData: PaymentDetail) {
  return this.http.post(this.rootURL + '/PaymentDetail', this.formData);
}
putPaymentDetail(formData:PaymentDetail) {
  return this.http.put(this.rootURL + '/PaymentDetail/'+ this.formData.PMid, this.formData);
}
deletePaymentDetail(id) {
  return this.http.delete(this.rootURL + '/PaymentDetail/'+ id);
}

refreshList(){
  this.http.get(this.rootURL + '/PaymentDetail')
  .toPromise()
  .then(res => this.list = res as PaymentDetail[]);
}

}