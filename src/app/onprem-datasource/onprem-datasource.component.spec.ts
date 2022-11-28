import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpremDatasourceComponent } from './onprem-datasource.component';

describe('OnpremDatasourceComponent', () => {
  let component: OnpremDatasourceComponent;
  let fixture: ComponentFixture<OnpremDatasourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnpremDatasourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpremDatasourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
