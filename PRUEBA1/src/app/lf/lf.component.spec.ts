import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LfComponent } from './lf.component';

describe('LfComponent', () => {
  let component: LfComponent;
  let fixture: ComponentFixture<LfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LfComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
