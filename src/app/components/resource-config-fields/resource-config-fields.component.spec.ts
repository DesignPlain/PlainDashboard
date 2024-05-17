import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceConfigFieldsComponent } from './resource-config-fields.component';

describe('ResourceConfigFieldsComponent', () => {
  let component: ResourceConfigFieldsComponent;
  let fixture: ComponentFixture<ResourceConfigFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceConfigFieldsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResourceConfigFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
