import { Component } from '@angular/core';
import { ModalService } from './shared/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showModal: boolean = false
  constructor(private modalService: ModalService) {}

  ngOnInit(){
    this.modalService.showModal.subscribe(showModal => this.showModal = showModal)
  }

}
