import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-placeholder',
  templateUrl: './image-placeholder.component.html',
  styleUrls: ['./image-placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagePlaceholderComponent implements OnInit {

  @Input() shape: string = "circle"
  @Input() width: string = "96px"
  @Input() height: string = "96px"
  @Input() imageUrl: string = ''

  loaded: boolean = false;

  constructor(private cd:ChangeDetectorRef) { }

  ngOnInit(): void {
    const image = new Image();
    image.src = this.imageUrl;


    image.onload = () => {
      setTimeout(() => {
        this.loaded = true;
        this.cd.detectChanges()
      }, Math.floor(Math.random() * (1000 - 250)) + 250)
    }
  }

}
