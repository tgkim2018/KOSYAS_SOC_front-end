import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base.service';
import { CelebroOverview, CelebroOverview_data} from './celebro.data';


@Injectable()
export class ConfigurationService {

  fullData:CelebroOverview;
  infoData:CelebroOverview_data;
  baseURL = 'http://192.168.0.249:3001';
  
  //constructor(private baseService:BaseService, public http:HttpClient) { }
  constructor( public http:HttpClient ) { }
  
  //getBaseUrl():string {
    //return this.baseService.getBaseUrl();
  //}

  getCelebroOverview() {
    //this.http.get<CelebroOverview>(this.getBaseUrl().concat('/cats/overview')).subscribe(Data => this.fullData = Data);
    //this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview')).subscribe(Data => this.fullData = Data);
    return this.http.get<CelebroOverview>(this.baseURL.concat('/cats/overview'));
    //this.infoData = this.fullData.data;
    //return this.infoData;
  }
}
