import { Component } from '@angular/core';
import { PwaInstallService } from './services/pwa-install.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private pwaInstallService: PwaInstallService) {}

  public installApp(): void {
    this.pwaInstallService.promptInstall();
  }
}
