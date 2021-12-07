import {Component, Directive, OnInit, QueryList, ViewChildren} from '@angular/core';

@Directive({selector: '[app-one]'})
export class AppOne {
}

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.addBaseUrl();
    this.removeEpisodeSpanTag();
   this. addTargetAttr();
  }

  addBaseUrl(): void {
    const vals: NodeListOf<Element> = document.querySelectorAll('a.xmov');
    for (let idx = 0; idx < vals.length; idx++) {
      const ele: Element = vals.item(idx);
      const url = ele.attributes.getNamedItem('href');
      const nurl = document.createAttribute('href');
      nurl.value = 'https://xmovies8.pw' + (url?.value ?? '');
      ele.attributes.setNamedItem(nurl);
    }
  }
  addTargetAttr(){
    const vals: NodeListOf<Element> = document.querySelectorAll('a');
    vals.forEach(ele => {
      const att = document.createAttribute('target');
      att.value ='_blank';
      ele.attributes.setNamedItem(att);
    })
  }

  removeEpisodeSpanTag() {
    const spanz = ['span.mli-quality', 'span.mli-eps'];
    for (const clazname of spanz) {
      const list = document.querySelectorAll(clazname);
      list.forEach((nd, key, parent) => {
        const parentNode = nd.parentNode;
        if (parentNode !== null) {
          parentNode.removeChild(nd);
        }
      })
    }
  }
}
