import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { View1Page } from './view1.page';

describe('View1Page', () => {
  let component: View1Page;
  let fixture: ComponentFixture<View1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ View1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
