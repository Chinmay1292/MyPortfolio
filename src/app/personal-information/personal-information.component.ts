import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string [][]=[
    ['Name', 'Chinmay Chougule'],
    ['DOB', '12/09/2002'],
    ['email', 'chinmaychougule1212@gmail.com'],
    ['Education', 'B.Tech. CSE Cyber Security'],
  ];

  aboutMe: string[] = [
    'Hi, I am a pre-final year student in VIT-Bhopal University.',
    'Aspiring Web, Python and Java Developer who loves playing with Data and Cloud',
    'I am a self-taught programmer and a Cyber Security enthusiast.',
    'Currently, working on a few projects and learning new technologies.',
  ]
  
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
