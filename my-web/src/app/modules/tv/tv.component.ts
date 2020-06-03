import { Component, OnInit } from '@angular/core';

declare var Aliplayer: any;

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  public player: any;

  public show: boolean = false;

  public channel: any[] = [
    {
      name: 'CCTV1',
      icon: '../../../assets/tv/icon/cctv1.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8'
    },
    {
      name: 'CCTV2',
      icon: '../../../assets/tv/icon/cctv2.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv2hd.m3u8'
    },
    {
      name: 'CCTV3',
      icon: '../../../assets/tv/icon/cctv3.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8'
    },
    {
      name: 'CCTV4',
      icon: '../../../assets/tv/icon/cctv4.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv4hd.m3u8'
    },
    {
      name: 'CCTV5',
      icon: '../../../assets/tv/icon/cctv5.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv5hd.m3u8'
    },
    {
      name: 'CCTV5+',
      icon: '../../../assets/tv/icon/cctv5+.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv5phd.m3u8'
    },
    {
      name: 'CCTV6',
      icon: '../../../assets/tv/icon/cctv6.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8'
    },
    {
      name: 'CCTV7',
      icon: '../../../assets/tv/icon/cctv7.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv7hd.m3u8'
    },
    {
      name: 'CCTV8',
      icon: '../../../assets/tv/icon/cctv8.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv8hd.m3u8'
    },
    {
      name: 'CCTV9',
      icon: '../../../assets/tv/icon/cctv9.jpg',
      source: 'http://ivi.bupt.edu.cn/hls/cctv9hd.m3u8'
    },
    {
      name: 'CCTV10',
      icon: '../../../assets/tv/icon/cctv10.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv10hd.m3u8'
    },
    {
      name: 'CCTV11',
      icon: '../../../assets/tv/icon/cctv11.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv11hd.m3u8'
    },
    {
      name: 'CCTV12',
      icon: '../../../assets/tv/icon/cctv12.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv12hd.m3u8'
    },
    {
      name: 'CCTV13',
      icon: '../../../assets/tv/icon/cctv13.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv13hd.m3u8'
    },
    {
      name: 'CCTV14',
      icon: '../../../assets/tv/icon/cctv14.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv14hd.m3u8'
    },
    {
      name: 'CCTV15',
      icon: '../../../assets/tv/icon/cctv15.png',
      source: 'http://ivi.bupt.edu.cn/hls/cctv15hd.m3u8'
    },
    {
      name: 'CCTV17',
      icon: '../../../assets/tv/icon/cctv17.jpg',
      source: 'http://ivi.bupt.edu.cn/hls/cctv17hd.m3u8'
    },
    {
      name: '高清电影',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/chchd.m3u8'
    },
    {
      name: '贵州卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/gzhd.m3u8'
    },
    {
      name: '四川卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/schd.m3u8'
    },
    {
      name: '北京卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/btv1hd.m3u8'
    }, 
    {
      name: '北京文艺',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/btv2hd.m3u8'
    },
    {
      name: '北京影视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/btv4hd.m3u8'
    },
    {
      name: '北京体育',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/btv6hd.m3u8'
    },
    {
      name: '北京新闻',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/btv9hd.m3u8'
    },
    {
      name: '北京纪实',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/btv11hd.m3u8'
    },
    {
      name: '天津卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/tjhd.m3u8'
    },
    {
      name: '吉林卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/jlhd.m3u8'
    },
    {
      name: '辽宁卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/lnhd.m3u8'
    },
    {
      name: '黑龙江卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/hljhd.m3u8'
    },
    {
      name: '山东卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/sdhd.m3u8'
    },
    {
      name: '山西卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/sxhd.m3u8'
    },
    {
      name: '河南卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/hnhd.m3u8'
    },
    {
      name: '河北卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/hebeihd.m3u8'
    },
    {
      name: '湖南卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/hunanhd.m3u8'
    },
    {
      name: '湖北卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/hbhd.m3u8'
    },
    {
      name: '广东卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/gdhd.m3u8'
    },
    {
      name: '广西卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/gxhd.m3u8'
    },
    {
      name: '深圳卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/szhd.m3u8'
    },
    {
      name: '江苏卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/jshd.m3u8'
    },
    {
      name: '安徽卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/ahhd.m3u8'
    },
    {
      name: '东方卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/dfhd.m3u8'
    },
    {
      name: '江西卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/jxhd.m3u8'
    },
    {
      name: '福建卫视',
      icon: '',
      source: 'http://ivi.bupt.edu.cn/hls/fjhd.m3u8'
    },
    {
      name: '其他1',
      icon: '',
      source: 'https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8'
    },
    {
      name: '其他2',
      icon: '',
      source: 'http://elbofang.smgtech.net/live/elearning.m3u8'
    }
  ];

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.tvPlay(this.channel[0].source);
  }

  showChannel() {
    this.show = !this.show;
  }

  getUrlPar(par) {
    let reg = new RegExp("(^|&)" + par + "=([^&]*)(&|$)");
    let res = window.location.search.substr(1).match(reg);
    if (res != null) return unescape(res[2]); return null;
  }

  tvPlay(source) {
    this.show = false;
    this.player && this.player.dispose();
    this.player = new Aliplayer({
      "id": "video-box",
      "source": this.getUrlPar('url') || source,
      "width": "100%",
      "height": "100%",
      "autoplay": true,
      "isLive": true,
      "rePlay": false,
      "playsinline": true,
      "preload": true,
      "controlBarVisibility": "hover",
      "useH5Prism": true,
      "extraInfo": {
        "crossOrigin": "anonymous"
      },
      "skinLayout": [
        {
          "name": "bigPlayButton",
          "align": "blabs",
          "x": 30,
          "y": 80
        },
        {
          "name": "errorDisplay",
          "align": "tlabs",
          "x": 0,
          "y": 0
        },
        {
          "name": "infoDisplay"
        },
        {
          "name": "controlBar",
          "align": "blabs",
          "x": 0,
          "y": 0,
          "children": [
            {
              "name": "liveDisplay",
              "align": "tlabs",
              "x": 15,
              "y": 6
            },
            {
              "name": "fullScreenButton",
              "align": "tr",
              "x": 10,
              "y": 10
            },
            {
              "name": "subtitle",
              "align": "tr",
              "x": 15,
              "y": 12
            },
            {
              "name": "setting",
              "align": "tr",
              "x": 15,
              "y": 12
            },
            {
              "name": "volume",
              "align": "tr",
              "x": 5,
              "y": 10
            },
            {
              "name": "snapshot",
              "align": "tr",
              "x": 10,
              "y": 12
            }
          ]
        }
      ]
    }, function (player) {
      // console.log("\n ================== 播放器已创建成功 ==================");
      // console.log("\n this：", this);
      // console.log("\n player：", player);
      // console.log("\n 当前播放流地址：", this.source);
      // this.player.play();
    });

    /* h5截图按钮, 截图成功回调 */
    this.player.on('snapshoted', function (data) {
      let pictureData = data.paramData.base64;
      let downloadElement = document.createElement('a');
      downloadElement.setAttribute('href', pictureData);
      let fileName = 'Aliplayer' + Date.now() + '.png';
      downloadElement.setAttribute('download', fileName);
      downloadElement.click();
      pictureData = null;
    });
  }

}
