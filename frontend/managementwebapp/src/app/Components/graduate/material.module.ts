import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll';
import { MatTreeModule } from '@angular/material/tree';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatButtonModule,
        MatGridListModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatRadioModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ScrollingModule,
        TableVirtualScrollModule,
        MatCheckboxModule,
        MatDividerModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatExpansionModule,
        MatTreeModule
    ],
    exports: [

        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatButtonModule,
        MatGridListModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatRadioModule,
        MatToolbarModule,
        MatSidenavModule,
        MatBadgeModule,
        MatListModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatChipsModule,
        MatTooltipModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        ScrollingModule,
        TableVirtualScrollModule,
        MatCheckboxModule,
        MatDividerModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatExpansionModule,
        MatTreeModule
    ],
    providers: [
        MatDatepickerModule,
    ],
    declarations: []
})

export class AngularMaterialModule { }