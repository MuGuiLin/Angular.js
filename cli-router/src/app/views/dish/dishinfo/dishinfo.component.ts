import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { AjaxService } from "../../../services/ajax.service";

@Component({
  selector: 'app-dishinfo',
  templateUrl: './dishinfo.component.html',
  styleUrls: ['./dishinfo.component.scss']
})
export class DishinfoComponent implements OnInit {

  public info: any;

  constructor(public aRouter: ActivatedRoute, public ajax: AjaxService) { }

  ngOnInit() {

    this.aRouter.params.subscribe((par) => {

      if (par.id) {

        this.ajax.get({ api: `api/productcontent?id=${par.id}`}).then((res: any) => {

          this.info = res.result[0];
        })
      }
    })
  }

}
