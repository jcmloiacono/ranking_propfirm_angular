import { Component, ElementRef, ViewChild, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {
  
  @ViewChild('crfCanvas', { static: true }) crfCanvas!: ElementRef;
  canvas: any;
  deg: number;
  speed: number = 10;
  ctx: any;
  width: number = 0;
  center: number = 0;
  isStopped: boolean = true;
  lock: boolean = false;
  slowDownRand: number = 0;
  totalSpins: number = 0;
  targetSpins: number = 0;
  color_data: string[] = [
    '#fedf30',
    '#fdb441',
    '#fd6930',
    '#eb5454',
    '#bf9dd3',
    '#29b8cd',
    '#00f2a6',
    '#f67',
    '#f64',
  ];
  label_data: string[] = [
    'Divyesh',
    'Roshni',
    'Rency',
    'Reem',
    'Ditya',
    'Feny',
    'Greny',
    'Ronil',
    'Ronil',
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.deg = this.rand(0, 360);
  }

  ngOnInit(): void {
    // Fix error canvas
    if (isPlatformBrowser(this.platformId)) {
      this.canvas = this.crfCanvas.nativeElement;
      this.ctx = this.canvas.getContext('2d');
      this.width = this.canvas.width; // size
      this.center = this.width / 2; // center
      this.create_spinner();
    }
  }

  create_spinner(): void {
    const color = this.color_data;
    const label = this.label_data;
    const slices = color.length;
    const sliceDeg = 360 / slices;
    this.deg = this.rand(0, 360);
    this.speed = 10;
    this.slowDownRand = 0;
    this.ctx.clearRect(0, 0, this.width, this.width);
    for (let i = 0; i < slices; i++) {
      this.ctx.beginPath();
      this.ctx.fillStyle = color[i];
      this.ctx.moveTo(this.center, this.center);
      this.ctx.arc(
        this.center,
        this.center,
        this.width / 2,
        this.deg2rad(this.deg),
        this.deg2rad(this.deg + sliceDeg)
      );
      this.ctx.lineTo(this.center, this.center);
      this.ctx.fill();
      const drawText_deg = this.deg + sliceDeg / 2;
      this.ctx.save();
      this.ctx.translate(this.center, this.center);
      this.ctx.rotate(this.deg2rad(drawText_deg));
      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(label[i], 150, 5); //ubicacion del texto inicio de la rueda
      this.ctx.restore();
      this.deg += sliceDeg;
    }
  }

  spin = (): void => {
    const color = this.color_data;
    const label = this.label_data;
    const slices = color.length;
    const sliceDeg = 360 / slices;
    this.deg += this.speed;
    this.deg %= 360;
    this.totalSpins++;

    // Decrement Speed after reaching target spins
    if (this.totalSpins >= this.targetSpins) {
      if (!this.lock) {
        this.lock = true;
        this.slowDownRand = this.rand(0.994, 0.998);
      }
      this.speed = this.speed > 0.2 ? (this.speed *= this.slowDownRand) : 0;
    }

    // Stopped!
    if (this.lock && this.speed === 0) {
      let ai = Math.floor(((360 - this.deg - 90) % 360) / sliceDeg); // deg to Array Index
      ai = (slices + ai) % slices; // Fix negative index
      alert("You got:\n" + label[ai]); // Get Array Item from end Degree
      this.lock = false;
      this.isStopped = true;
      this.totalSpins = 0;
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.width);
    for (let i = 0; i < slices; i++) {
      this.ctx.beginPath();
      this.ctx.fillStyle = color[i];
      this.ctx.moveTo(this.center, this.center);
      this.ctx.arc(
        this.center,
        this.center,
        this.width / 2,
        this.deg2rad(this.deg),
        this.deg2rad(this.deg + sliceDeg)
      );
      this.ctx.lineTo(this.center, this.center);
      this.ctx.fill();
      const drawText_deg = this.deg + sliceDeg / 2;
      this.ctx.save();
      this.ctx.translate(this.center, this.center);
      this.ctx.rotate(this.deg2rad(drawText_deg));
      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(label[i], 150, 5); // ubicacion del texto mientras rueda
      this.ctx.restore();
      this.deg += sliceDeg;
    }

    window.requestAnimationFrame(this.spin);
  }

  startSpin(): void {
    if (this.lock) return;
    this.isStopped = false;
    this.targetSpins = this.rand(50, 100); // Random number of spins before slowing down
    window.requestAnimationFrame(this.spin);
  }

  stops(): void {
    this.isStopped = true;
  }

  deg2rad(deg: number): number {
    return (deg * Math.PI) / 180;
  }

  rand(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}

/* CON BOTON STOP  
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottery',
  templateUrl: './lottery.component.html',
  styleUrls: ['./lottery.component.scss']
})
export class LotteryComponent implements OnInit {
  @ViewChild('crfCanvas', { static: true }) crfCanvas!: ElementRef;
  canvas: any;
  deg: number;
  speed: number = 10;
  ctx: any;
  width: number = 0;
  center: number = 0;
  isStopped: boolean = true;
  lock: boolean = false;
  slowDownRand: number = 0;
  color_data: string[] = [
    '#fedf30',
    '#fdb441',
    '#fd6930',
    '#eb5454',
    '#bf9dd3',
    '#29b8cd',
    '#00f2a6',
    '#f67',
  ];
  label_data: string[] = [
    'Divyesh',
    'Roshni',
    'Rency',
    'Reem',
    'Ditya',
    'Feny',
    'Greny',
    'Ronil',
  ];

  constructor() {
    this.deg = this.rand(0, 360);
  }

  ngOnInit(): void {
    this.canvas = this.crfCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width; // size
    this.center = this.width / 2; // center
    this.create_spinner();
  }

  create_spinner(): void {
    const color = this.color_data;
    const label = this.label_data;
    const slices = color.length;
    const sliceDeg = 360 / slices;
    this.deg = this.rand(0, 360);
    this.speed = 10;
    this.slowDownRand = 0;
    this.ctx.clearRect(0, 0, this.width, this.width);
    for (let i = 0; i < slices; i++) {
      this.ctx.beginPath();
      this.ctx.fillStyle = color[i];
      this.ctx.moveTo(this.center, this.center);
      this.ctx.arc(
        this.center,
        this.center,
        this.width / 2,
        this.deg2rad(this.deg),
        this.deg2rad(this.deg + sliceDeg)
      );
      this.ctx.lineTo(this.center, this.center);
      this.ctx.fill();
      const drawText_deg = this.deg + sliceDeg / 2;
      this.ctx.save();
      this.ctx.translate(this.center, this.center);
      this.ctx.rotate(this.deg2rad(drawText_deg));
      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(label[i], 100, 5);
      this.ctx.restore();
      this.deg += sliceDeg;
    }
  }

  spin = (): void => {
    const color = this.color_data;
    const label = this.label_data;
    const slices = color.length;
    const sliceDeg = 360 / slices;
    this.deg += this.speed;
    this.deg %= 360;

    // Increment speed
    if (!this.isStopped && this.speed < 3) {
      this.speed += 1 * 0.1;
    }

    // Decrement Speed
    if (this.isStopped) {
      if (!this.lock) {
        this.lock = true;
        this.slowDownRand = this.rand(0.994, 0.998);
      }
      this.speed = this.speed > 0.2 ? (this.speed *= this.slowDownRand) : 0;
    }

    // Stopped!
    if (this.lock && this.speed === 0) {
      let ai = Math.floor(((360 - this.deg - 90) % 360) / sliceDeg); // deg to Array Index
      ai = (slices + ai) % slices; // Fix negative index
      alert("You got:\n" + label[ai]); // Get Array Item from end Degree
      this.lock = false;
      this.isStopped = true;
      return;
    }

    this.ctx.clearRect(0, 0, this.width, this.width);
    for (let i = 0; i < slices; i++) {
      this.ctx.beginPath();
      this.ctx.fillStyle = color[i];
      this.ctx.moveTo(this.center, this.center);
      this.ctx.arc(
        this.center,
        this.center,
        this.width / 2,
        this.deg2rad(this.deg),
        this.deg2rad(this.deg + sliceDeg)
      );
      this.ctx.lineTo(this.center, this.center);
      this.ctx.fill();
      const drawText_deg = this.deg + sliceDeg / 2;
      this.ctx.save();
      this.ctx.translate(this.center, this.center);
      this.ctx.rotate(this.deg2rad(drawText_deg));
      this.ctx.textAlign = 'right';
      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 15px sans-serif';
      this.ctx.fillText(label[i], 100, 5);
      this.ctx.restore();
      this.deg += sliceDeg;
    }

    window.requestAnimationFrame(this.spin);
  }

  startSpin(): void {
    if (this.lock) return;
    this.isStopped = false;
    window.requestAnimationFrame(this.spin);
  }

  stops(): void {
    this.isStopped = true;
  }

  deg2rad(deg: number): number {
    return (deg * Math.PI) / 180;
  }

  rand(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
} */