import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { AddComponent } from './add/add.component';
import { ChartComponent } from './chart/chart.component';
import { GraduateHomeComponent } from './graduate-home/graduate-home.component';
import { AngularMaterialModule } from './material.module';
import { SearchComponent } from './search/search.component';
import { TrendsComponent } from './trends/trends.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { ViewGraduateDetailsComponent } from './view-graduate-details/view-graduate-details.component';

const routes: Routes = [
    {
        path: '',
        //   canActivate: [AuthGuard],
        component: GraduateHomeComponent,
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
        ChartsModule
    ],
    declarations: [
        GraduateHomeComponent,
        SearchComponent,
        ViewAllComponent,
        ViewGraduateDetailsComponent,
        AddComponent,
        TrendsComponent,
        ChartComponent
    ]
})

export class GraduateLazyModule { }