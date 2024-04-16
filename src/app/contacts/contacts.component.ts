import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Vannucci - Contact');
  }
}
