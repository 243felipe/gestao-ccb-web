import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrmMenuComponent } from './frm-menu/frm-menu.component';
import { FrmDashboaordComponent } from './frm-dashboaord/frm-dashboaord.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FrmMenuComponent,
    FrmDashboaordComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gestao-ccb-web';
}
