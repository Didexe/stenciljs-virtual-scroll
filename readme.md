![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Stenciljs-virtual-scroll

This is a project for building a standalone Virtual Scroll Web Component using Stencil.
Project contain collection of two components:

**1.** virtual-scroll (VirtualScrollWebComponent).
This component render subset of elements with **DIFFERENT** height, required to fill the viewport

**2.** fetch-helper (FetchHelperWebComponent)
This component show you, how to use virtual scroll without framework.


## Get Started with Angular5 (Ionic 3)

**Step 1.** Install Stenciljs-virtual-scroll

```sh
npm install stenciljs-virtual-scroll --save
```

**Step 2.** Import virtual scroll component into your angular app module

```ts
....
import 'stenciljs-virtual-scroll/dist/virtualscroll';
....

```

**Step 3.** Import CUSTOM_ELEMENTS_SCHEMA into your angular app module

```ts
....
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
....

@NgModule({
    ...
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    ....
})
export class AppModule { }

```

**Step 4.** Copying the Components

For Angular2+

During the build, the components need to be copied to the build output directory. The easiest way to do this is to modify include the collection in the assets array of the .angular-cli.json file.

```json
"assets": [
        "assets",
        "favicon.ico",
        { "glob": "**/*", "input": "../node_modules/stenciljs-virtual-scroll/dist/virtualscroll", "output": "./virtualscroll" }
      ]

```

For Ionic2+

You must use app-script to copy web component files in www directory

1. Add in package.json 
```json
"config": {
    "ionic_copy": "./config/copy.config.js"
  }
```

2. Create config/copy.config.js and put in

```ts
// this is a custom dictionary to make it easy to extend/override
// provide a name for an entry, it can be anything such as 'copyAssets' or 'copyFonts'
// then provide an object with a `src` array of globs and a `dest` string
module.exports = {
    copyAssets: {
      src: ['{{SRC}}/assets/**/*'],
      dest: '{{WWW}}/assets'
    },
    copyIndexContent: {
      src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js'],
      dest: '{{WWW}}'
    },
    copyFonts: {
      src: ['{{ROOT}}/node_modules/ionicons/dist/fonts/**/*', '{{ROOT}}/node_modules/ionic-angular/fonts/**/*'],
      dest: '{{WWW}}/assets/fonts'
    },
    copyPolyfills: {
      src: [`{{ROOT}}/node_modules/ionic-angular/polyfills/${process.env.IONIC_POLYFILL_FILE_NAME}`],
      dest: '{{BUILD}}'
    },
    copySwToolbox: {
      src: ['{{ROOT}}/node_modules/sw-toolbox/sw-toolbox.js'],
      dest: '{{BUILD}}'
    },
    copyVirtualScrollCore: {
      src: ['{{ROOT}}/node_modules/stenciljs-virtual-scroll/dist/virtualscroll/**/*'],
      dest: '{{BUILD}}/virtualscroll'
    },
    copyVirtualScroll: {
      src: ['{{ROOT}}/node_modules/stenciljs-virtual-scroll/dist/virtualscroll.js'],
      dest: '{{BUILD}}'
    }
  }
```

before copyVirtualScrollCore property set standart app-script copy.config properties (if you are modify self config or my version is outdated, get only last 2 properties and put in your)

3.  And register component in app module

```ts
....
import 'stenciljs-virtual-scroll/dist/virtualscroll';
....

``` 

4. rebuild

# Usage


```html
....
  <div class="virtual-container">
    <virtual-scroll #scroll bottom-offset="5" selector="page-example .scroll-content">

      <div slot="virtual" class="virtual-slot">
        <div class="offer virtual-item" [attr.id]="item.index" *ngFor="let item of virtual">
          <div [style.backgroundImage]="'url(' + item.thumbnailUrl + ')'" class="cover">
          </div>
          <div class="title">{{item.index}}</div>
          <div class="title">{{item.title}}</div>
        </div>
      </div>
      <div slot="loader">loading...</div>
    </virtual-scroll>
  </div>
....
```

OR without selector

```html
....
  <div class="virtual-container">
    <virtual-scroll #scroll bottom-offset="5" selector="">

      <div slot="virtual" class="virtual-slot">
        <div class="offer virtual-item" [attr.id]="item.index" *ngFor="let item of virtual">
          {{item.index}}
      </div>
      <div slot="loader">loading...</div>
    </virtual-scroll>
  </div>
....
```


```ts
....
export class ExamplePage {

  @ViewChild('scroll') vscroll: ElementRef;
  private virtual: Array<any> = [];
  ....

  initVScroll() {

    this.vscroll.nativeElement.addEventListener('update', (event) => {
      this.virtual = event.detail;
      //this.changeDetector.detectChanges(); if need
    });

    this.vscroll.nativeElement.addEventListener('toBottom', (event) => {
      this.http.get('https://jsonplaceholder.typicode.com/photos', {}).map(res => res.json()).subscribe(data => {
        this.vscroll.nativeElement.list = this.vscroll.nativeElement.list.concat(data.splice(0, 50))

        if (this.vscroll.nativeElement.list.length > 200) {
          this.vscroll.nativeElement.setInfinateFinally();
        }
        else {
          this.vscroll.nativeElement.setInfinateOn();
        }
        //this.changeDetector.detectChanges(); if need
      });
    });

    this.http.get('https://jsonplaceholder.typicode.com/photos', {}).map(res => res.json()).subscribe(data => {
      this.vscroll.nativeElement.list = data.splice(0, 50);
        //this.changeDetector.detectChanges(); if need
    });


  }
}

....
```

```css
virtual-scroll {
    display: block;
}
```

If you need to use it without framework, watch fetch-helper component.


# Ionic 3 example

[stenciljs ionic-virtual-scroll-example](https://github.com/mgnstudio7/ionic-virtual-scroll-example)

# API

**Selector** 

In this attribute you must set selector of scrollable container (ionic application example).
If attribute is empty, component use inner scroll container.

**bottom-offset** 

offset of elements to fired toBottom() event

**toBottom()** 

this event is fired if scroll came to the end

**update()** 

this event is fired every time when virtual scroll data is changed

**setInfinateOn()** 

this method must call every time when lazy load data is finish.
If this method do not call. toBottom event never fired again

**setInfinateFinally()** 

this method must call if lazy load finally and never fired toBottom() evend, and hide loader element

**clear()** 

this method clear all need params of component, but not list

```ts
....
    this.vscroll.nativeElement.list = [];
    this.vscroll.nativeElement.clear(); 
    //this.changeDetector.detectChanges(); if need     
....
```

**scrollToNode()** 

set list item index, duration, offset

```ts
....
    this.vscroll.nativeElement.scrollToNode(25, 1000, -50);
....
```

**forceUpdateComponent()** 

this method re-checks all dimensions, add the missing ones and force update component

```ts
....
    this.vscroll.nativeElement.forceUpdateComponent();
....
```

**virtual-ratio** 

add nodes after last and before first viewed nodes in viewport.

# WARN

nodes(list items) index must be different. Component set different index but if you change it, or if your list contain dublicates there may be problems.