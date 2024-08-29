import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MaterialModule } from '../angular-material/material/material.module';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule,
            MatToolbarModule,
            MatIconModule,
            MatGridListModule, MaterialModule
          ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}

