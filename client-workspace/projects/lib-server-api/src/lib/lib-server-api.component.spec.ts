import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibServerApiComponent } from './lib-server-api.component';

describe('LibServerApiComponent', () => {
  let component: LibServerApiComponent;
  let fixture: ComponentFixture<LibServerApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibServerApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibServerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
