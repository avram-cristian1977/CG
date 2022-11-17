import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../shared/services/modal.service';
import { RegisterValidators } from '../validators/register-validators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(private modalService: ModalService) {}

  modalType = this.modalService.modalType


 
  onCloseModal() {
    this.modalService.closeDialog();
  }
}
