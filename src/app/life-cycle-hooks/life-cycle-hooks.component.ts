import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements OnChanges,OnInit, DoCheck, AfterViewInit, AfterViewChecked,
        AfterContentInit,AfterContentChecked , OnDestroy{

interval:any;

ngOnInit():void{
  console.log("ngOnInit running");
  this.interval=setInterval(()=>{
    console.log("count");
  },5000)
}

ngOnDestroy(): void {
  console.log("ngDestroy running");
  clearInterval(this.interval);

}

ngOnChanges(changes:SimpleChanges):void{
  console.log("ngOnChanges running");
}

ngDoCheck(): void{
  console.log("ngDoCheck running");
}

ngAfterContentInit(): void {
  console.log("ngAfterContentInit running");
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit");
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked running");
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked running");
}
}
