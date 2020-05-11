import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LccComponent } from './lcc.component';

describe('LccComponent', () => {
  let component: LccComponent;
  let fixture: ComponentFixture<LccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LccComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
