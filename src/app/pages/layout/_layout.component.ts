import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  imports:[RouterOutlet],
  template: `<nav class="navbar navbar-light p-0">
                <label class="navbar-brand p-2">{{page}}</label>
            </nav>
            <router-outlet />`
})
export class Layout implements OnInit {
    page : string = "";

    ngOnInit(): void {
        this.page = "Dashboard";
    }
}
