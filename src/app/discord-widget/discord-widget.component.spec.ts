import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordWidgetComponent } from './discord-widget.component';

describe('DiscordWidgetComponent', () => {
  let component: DiscordWidgetComponent;
  let fixture: ComponentFixture<DiscordWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscordWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
