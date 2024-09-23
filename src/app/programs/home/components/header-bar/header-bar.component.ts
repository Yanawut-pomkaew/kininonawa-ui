import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss'
})
export class HeaderBarComponent {
  items = [
    {label : "Home"},
    {label : "Books"},
  ]
}
