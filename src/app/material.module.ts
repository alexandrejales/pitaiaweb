import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatGridListModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatTableModule,
        MatNativeDateModule,
        MatMenuModule,
        MatCardModule,
        MatBadgeModule,
        MatSliderModule,
        MatDialogModule,
        MatProgressBarModule,
    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatInputModule,
        MatGridListModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatTableModule,
        MatNativeDateModule,
        MatMenuModule,
        MatCardModule,
        MatBadgeModule,
        MatSliderModule,
        MatDialogModule,
        MatProgressBarModule,
    ]
})
export class MaterialModule {


}