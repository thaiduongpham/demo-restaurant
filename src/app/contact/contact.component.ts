import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Contact } from './contact.model';
import { BackendService } from '../shared/backend.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./_contact.scss']
})
export class ContactComponent implements OnInit {
  defaultGender = 'male';
  emailValue;
  phoneValue;
  // Toast Option
  public options = {
    position: ['top', 'right'],
    lastOnBottom: true
  };

  constructor(
    private backendService: BackendService,
    private quoteService: NotificationsService) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    const controls = f.controls;
    const firstName = controls.firstname.value;
    const lastName = controls.lastname.value;
    const gender = controls.gender.value;
    const email = controls.email.value;
    const phone = controls.phone.value;
    const message = controls.message.value;
    const contact = new Contact(firstName, lastName, gender, email, phone, message);
    this.backendService.storeContactInfo(contact)
      .subscribe(
        (reponse) => {
          this.quoteService.success('SUCCESS', 'Thanks for your info!', {
            timeOut: 3000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true
          });
        },
        (error) => console.log(error)
      );
  }

}
