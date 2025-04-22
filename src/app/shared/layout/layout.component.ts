import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutComponent {
showAlert() {
  
}

}
