import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Default settings</h1>
    <mat-carousel>
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>No autoplay</h1>
    <mat-carousel [autoplay]="false">
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>No loop</h1>
    <mat-carousel [loop]="false">
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>No arrows</h1>
    <mat-carousel [showArrows]="false">
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>No stepper</h1>
    <mat-carousel [showStepper]="false">
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>Await animation</h1>
    <mat-carousel [awaitAnimation]="true">
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>Different overlay color</h1>
    <mat-carousel>
      <mat-carousel-item
        *ngFor="let item of items"
        overlayColor="#ff000040"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>No overlay</h1>
    <mat-carousel>
      <mat-carousel-item
        *ngFor="let item of items"
        [showOverlay]="false"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>

    <h1>With custom content</h1>
    <mat-carousel>
      <mat-carousel-item
        *ngFor="let item of items; let i = index"
        backgroundImage="assets/dummy.png"
      >
        <div
          style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center"
        >
          <h1>Slider #{{ i + 1 }}</h1>
          <p>This is the text for slider #{{ i + 1 }}</p>
          <button mat-flat-button>Click me #{{ i + 1 }}</button>
        </div>
      </mat-carousel-item>
    </mat-carousel>

    <h1>With maximum items limit</h1>
    <mat-carousel maxItems="3">
      <mat-carousel-item
        *ngFor="let item of items"
        backgroundImage="assets/dummy.png"
      ></mat-carousel-item>
    </mat-carousel>
  `
})
export class AppComponent {
  public items = new Array<never>(5);
}
