import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-sidebar-nav',
  imports: [SidebarModule, MenubarModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.scss'
})
export class SidebarNavComponent {
  visible = false;

  items = [
    { label: 'Dashboard', icon: 'pi pi-home', routerLink: '/' },
    { label: 'Upload Data', icon: 'pi pi-upload', routerLink: '/upload' },
    { label: 'Train Model', icon: 'pi pi-cog', routerLink: '/train' },
    { label: 'Evaluate', icon: 'pi pi-chart-bar', routerLink: '/evaluate' },
    { label: 'Predict & Deploy', icon: 'pi pi-cloud-upload', routerLink: '/predict' }
  ];
}
