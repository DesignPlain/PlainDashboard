import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceConfigComponent } from './resource-config.component';

describe('ResourceConfigComponent', () => {
  let component: ResourceConfigComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResourceConfigComponent]
    });
    fixture = TestBed.createComponent(ResourceConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
