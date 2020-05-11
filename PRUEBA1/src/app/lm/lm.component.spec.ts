import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LmComponent } from './lm.component';

describe('LmComponent', () => {
  let component: LmComponent;
  let fixture: ComponentFixture<LmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
