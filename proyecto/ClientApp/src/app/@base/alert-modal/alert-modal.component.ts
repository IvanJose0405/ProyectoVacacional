import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})

export class AlertModalComponent implements OnInit {
  @Input() title;
  @Input() cuerpo;
    constructor(public modal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
