import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarNavComponent } from './components/sidebar-nav/sidebar-nav.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarNavComponent, HeaderBarComponent],
  templateUrl: './app.component.html',
  styles: [ `.container {
        display: flex;
        height: 100vh;
      }
      .content {
        flex-grow: 1;
        padding: 20px;
      }`]
})
export class AppComponent {
  title = 'ML-Model-Dashboard';
}
