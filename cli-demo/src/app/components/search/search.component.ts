import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public keyWords: string | undefined;

  public history: any[] = [];
  constructor() {
    console.log(this);

  }

  ngOnInit() {
  }

  onSearch() {

    if (!this.keyWords) {
      alert('请输入关键字！');
      return false;
    }

    if (-1 == this.history.indexOf(this.keyWords)) {

      // this.history = [...this.keyWords, ...[this.history]];
      this.history.unshift(this.keyWords);

    } else {
      alert(`${this.keyWords}已经添加过啦，不能重复添加！`);

    }

    this.keyWords = '';
    console.log(this.history);

  }

  delHistory(i) {
    // alert(i);
    if (confirm(`您确定要删除【${this.history[i]}】这个关键字吗？`)) {
      this.history.splice(i, 1);
    }

  }

}
