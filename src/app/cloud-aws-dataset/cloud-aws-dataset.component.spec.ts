import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudAwsDatasetComponent } from './cloud-aws-dataset.component';

describe('CloudAwsDatasetComponent', () => {
  let component: CloudAwsDatasetComponent;
  let fixture: ComponentFixture<CloudAwsDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudAwsDatasetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudAwsDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
