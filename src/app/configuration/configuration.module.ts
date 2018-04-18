import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { routing }   from './configuration.routes';
import { ConfigurationComponent } from './configuration.component';
import { UserComponent } from './components/user/user.component';
import { AgentComponent } from './components/agent/agent.component';
import { SystemComponent } from './components/system/system.component';
import { ConfigurationService } from './configuration.service';

@NgModule({
  imports: [
    //NgModule,
    //BrowserModule,
    FormsModule,
    //HttpModule,
    HttpClientModule,
    routing
  ],
  declarations: [ConfigurationComponent, UserComponent, AgentComponent, SystemComponent],
  providers: [ConfigurationService]
})
export class ConfigurationModule { }
