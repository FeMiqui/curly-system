import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  listofMessages: Messages[]; // object: name and array message
  listofContacts:string[]; // string of names
  constructor() { 
    this.listofMessages = [
      {
      name:"Contact1",
      text:["one","two"]
    },
    {
      name:"Contact2",
      text:["one","two"]
    },
  ]
    this.listofContacts = [
      "Contact1","Contact2"
    ]
  }

  ngOnInit(): void {
  }
    
}

export interface Messages{ // example on how to create the architecture of variables
  name:string;
  text:string [];
}
