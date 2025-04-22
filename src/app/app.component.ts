import { Component } from '@angular/core';
import { PwaInstallService } from './services/pwa-install.service';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./shared/layout/layout.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, LayoutComponent]
})
export class AppComponent {
  constructor(private pwaInstallService: PwaInstallService) {}

  public installApp(): void {
    this.pwaInstallService.promptInstall();
  }
}
