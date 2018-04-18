import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../../configuration.service';
import { BaseService } from '../../../base.service';
import { CelebroOverview, CelebroOverview_Data} from '../../../base.service';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.scss']
})
export class SystemComponent implements OnInit {

  subject = "System configuration";
  context = "Elasticsearch";
  nodes = 1;
  indices = 133;
  shards = 1322;
  docs = 51349322;
  disk = "19.2gb"
  celebroData :CelebroOverview;

  //constructor(private configurationService:ConfigurationService, private baseService:BaseService) { }
  constructor() { }

  ngOnInit() {
    //this.getCelebroOverview();
  }

  getCelebroOverview(){
    //this.configurationService.getCelebroOverview().subscribe(Data => this.celebroData = Data);
   // this.baseService.getCelebroOverview().subscribe(Data => this.celebroData = Data);
  }
}
