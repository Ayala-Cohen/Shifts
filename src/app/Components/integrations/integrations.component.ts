import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent implements OnInit {
  activity_days = [1, 2, 3, 4, 5, 6, 7]

  constructor() { }

  ngOnInit() {
  }

}
