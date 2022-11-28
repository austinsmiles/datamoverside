import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudAwsRequestComponent } from './cloud-aws-request/cloud-aws-request.component';
import { CloudAwsDatasetComponent } from './cloud-aws-dataset/cloud-aws-dataset.component';
import { CloudAwsJobComponent } from './cloud-aws-job/cloud-aws-job.component';
import { HomeComponent } from './home/home.component';
import { OnpremDatasourceComponent } from './onprem-datasource/onprem-datasource.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OnpremDatasourceComponent,
    CloudAwsRequestComponent,
    CloudAwsDatasetComponent,
    CloudAwsJobComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
