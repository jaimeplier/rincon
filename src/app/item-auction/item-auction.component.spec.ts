import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemAuctionComponent } from './item-auction.component';

describe('ItemAuctionComponent', () => {
  let component: ItemAuctionComponent;
  let fixture: ComponentFixture<ItemAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
