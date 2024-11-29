import { Component, EventEmitter, inject, Inject, Output } from '@angular/core';
import { ChampsService } from '../../services/champs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  champsService = inject(ChampsService);
}
