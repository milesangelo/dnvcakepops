import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoLogsComponent } from './photologs.component';

describe('PhotoLogComponent', () => {
  let component: PhotoLogsComponent;
  let fixture: ComponentFixture<PhotoLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
