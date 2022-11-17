import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  showModal = new BehaviorSubject(false);
  constructor() {}

  openDialog() {
    this.showModal.next(true);

  }

  closeDialog() {
    this.showModal.next(false);
  }
}
