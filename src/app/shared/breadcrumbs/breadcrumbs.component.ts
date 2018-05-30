import { Component, OnInit } from '@angular/core';
import { LastfmService } from '../../services/lastfm.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: {
    name: string;
    path: string
  }[] = [];

  constructor(
    private lastfm: LastfmService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.router.events.subscribe(event => {
    //   // console.log(event)
    // })
   }

   private myUrl: any;
   bread = [];
   data = [];

  ngOnInit() {
    this.createBreadcrumbs();
  }
  createBreadcrumbs(){    

    this.activatedRoute.url.subscribe(
      (data: any) => {

        this.breadcrumbs = []
        this.breadcrumbs.push({
          name: 'LastFm',
          path: ''
        })
        for (let i of data) {
          this.myUrl = i.path
          this.bread.push(this.myUrl)
          let changedPath = this.bread.join('/')
          let o = { name: this.myUrl, path: `/${changedPath}` };
          this.breadcrumbs.push(o)
        }
        
        // console.log(this.breadcrumbs)
      },
      (error: any) => console.debug("URL ERROR", error));
  }
}
