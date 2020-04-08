import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom2',
  templateUrl: './dom2.component.html',
  styleUrls: ['./dom2.component.scss']
})
export class Dom2Component implements OnInit {

  public text: string = '我在dom2组件中的变量！！';

  public timer: any = null;

  @ViewChild('h2') h2: any;

  @ViewChild('aside') aside: any;

  constructor() {

  }

  ngOnInit() {
    this.aside.nativeElement.style.height = document.body.clientHeight + 'px';
  }

  mupiao(par): void {
    console.log(par);
    console.log(this.h2)
    this.h2.nativeElement.innerHTML = par;
    // this.isShowAside()
  }

  isShowAside(): void {
    console.log(getComputedStyle(this.aside.nativeElement, null)['transform']);
    const matrix: string = getComputedStyle(this.aside.nativeElement, null)['transform'];
    this.aside.nativeElement.style.transform = matrix == 'matrix(1, 0, 0, 1, 0, 0)' ? 'translateX(100%)' : 'translateX(0)';
  }

  backTop() {
    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.timer = setInterval(() => {
      osTop = osTop - 800;
      window.scroll(0, osTop);
      if (osTop <= 0) {
        window.scroll(0, 0);
        clearInterval(this.timer);
      }
    }, 60);
  }

}
