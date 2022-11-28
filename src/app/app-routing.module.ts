import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudAwsRequestComponent } from './cloud-aws-request/cloud-aws-request.component';
import { CloudAwsDatasetComponent } from './cloud-aws-dataset/cloud-aws-dataset.component';
import { CloudAwsJobComponent } from './cloud-aws-job/cloud-aws-job.component';
import { HomeComponent } from './home/home.component';
import { OnpremDatasourceComponent } from './onprem-datasource/onprem-datasource.component';

const routes: Routes = [  
{path:  "", pathMatch:  "full",redirectTo:  "home"},
{path: "home", component: HomeComponent},
{path: "onprem-datasource", component: OnpremDatasourceComponent},
{path: "cloud-aws-request", component: CloudAwsRequestComponent},
{path: "cloud-aws-dataset", component: CloudAwsDatasetComponent},
{path: "cloud-aws-job", component: CloudAwsJobComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
