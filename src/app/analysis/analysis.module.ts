import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing }   from './analysis.routes';
import { AnalysisComponent } from './analysis.component';
import { CorrelationComponent } from './components/correlation/correlation.component';
import { ElastalertComponent } from './components/elastalert/elastalert.component';
import { AnalysisService } from './analysis.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AnalysisComponent, CorrelationComponent, ElastalertComponent],
  providers: [AnalysisService]
})
export class AnalysisModule { }
