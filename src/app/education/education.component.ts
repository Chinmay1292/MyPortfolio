import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'Mahaveer English School',
      course: 'SSC',
      duration: '2008-2018', 
      score: '93.2%',
    },
    {
      institute: 'Shahu Dayanand Jr. College',
      course: 'HSC',
      duration: '2018-2020',
      score: '82.55%',
    },
    {
      institute: 'VIT Bhopal University',
      course: 'B.Tech. CSE Cyber Security',
      duration: '2020-2024',
      score: '8.83 CGPA',
    }
  ];
  constructor() { }
  ngOnInit(): void {
    
  }

}
