import { Component, OnInit } from '@angular/core';
import { ModalService } from '../shared/services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private modalService: ModalService) {}


  ngOnInit(): void {}

  onOpenModal(modalType :string) {
    this.modalService.openDialog(modalType);
  }
}
