import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./_contact.scss']
})
export class ContactComponent implements OnInit {
  defaultGender = 'male';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log('submited', f);
    f.reset();
  }

}
