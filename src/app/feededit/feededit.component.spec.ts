import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeededitComponent } from './feededit.component';

describe('FeededitComponent', () => {
  let component: FeededitComponent;
  let fixture: ComponentFixture<FeededitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeededitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeededitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
