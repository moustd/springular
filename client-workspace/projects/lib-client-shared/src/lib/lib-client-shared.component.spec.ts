import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LibClientSharedComponent} from './lib-client-shared.component';

describe('LibClientSharedComponent', () => {
  let component: LibClientSharedComponent;
  let fixture: ComponentFixture<LibClientSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LibClientSharedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibClientSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
