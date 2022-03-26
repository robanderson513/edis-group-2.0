import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public activeImage: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    interval(10000)
      .pipe(tap(() => this.changeDisplay()))
      .subscribe();
  }

  private changeDisplay(): void {
    this.activeImage = this.activeImage === 0 ? 1 : this.activeImage === 1 ? 2 : 0;
    this.changeDetectorRef.detectChanges();

    //   ('straight-shooting. recruiting.');
    // ('personal. recruiting.');
    // ('focused. recruiting.');
  }
}
