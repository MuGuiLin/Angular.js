import { Component, OnInit } from '@angular/core';

import anime from "animejs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    anime.timeline({ loop: false })
      .add({
        targets: '.ml8 .circle-white',
        scale: [0, 3],
        opacity: [1, 0],
        easing: "easeInOutExpo",
        rotateZ: 360,
        duration: 1100
      }).add({
        targets: '.ml8 .circle-container',
        scale: [0, 1],
        duration: 1100,
        easing: "easeInOutExpo",
        offset: '-=1000'
      }).add({
        targets: '.ml8 .circle-dark',
        scale: [0, 1],
        rotateZ: -360,
        duration: 1100,
        easing: "easeOutExpo",
        offset: '-=600'
      }).add({
        targets: '.ml8 .letters-left',
        scale: [0, 1],
        duration: 1200,
        offset: '-=550'
      }).add({
        targets: '.ml8 .bang',
        scale: [0, 1],
        rotateZ: [45, 15],
        duration: 1200,
        offset: '-=1000'
      })
    // .add({
    //   targets: '.ml8',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1400
    // });

    anime({
      targets: '.ml8 .circle-dark-dashed',
      rotateZ: 360,
      duration: 8000,
      easing: "linear",
      loop: true
    });

    anime({
      targets: '.article',
      opacity: 1,
      loop: false,
      duration: 10000,
      delay: 6000,
    });

  }

}
