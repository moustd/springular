import {Component, OnInit} from '@angular/core';
import {GreetingControllerService} from '../../../../lib-server-api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  value;

  constructor(private greetingControllerService: GreetingControllerService) {

  }

  ngOnInit(): void {

  }

  send() {
    this.greetingControllerService.greeting(this.value).subscribe((greeting) => {
      alert(greeting.content)
    });
  }
}
