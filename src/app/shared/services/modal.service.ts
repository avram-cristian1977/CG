import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal = new BehaviorSubject(false);
  modalType = ""
  constructor() {}

  openDialog(type:string) {
    this.modalType = type
    console.log("type is : ", type);
    console.log("modaltype is : ", this.modalType);
    
    this.showModal.next(true);

  }

  closeDialog() {
    this.showModal.next(false);
  }
}
