import { ClassValue } from "clsx";
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ChatComponent } from "./chat/chat.component";
import { PlaygroundComponent } from "./playground/playground.component";

import { CdkDragEnd, CdkDragStart } from "@angular/cdk/drag-drop";
import { EmblaOptionsType } from "embla-carousel-angular";
import {
  HlmCarouselComponent,
  HlmCarouselContentComponent,
  HlmCarouselItemComponent,
  HlmCarouselNextComponent,
  HlmCarouselPreviousComponent,
} from "@spartan-ng/ui-carousel-helm";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: "app-main",
  standalone: true,
  imports: [
    ChatComponent,
    PlaygroundComponent,
    NavbarComponent,
    HlmCarouselComponent,
    HlmCarouselContentComponent,
    HlmCarouselItemComponent,
    HlmCarouselNextComponent,
    HlmCarouselPreviousComponent,
  ],
  templateUrl: "./main.component.html",
  styleUrl: "./main.component.scss",
})
export class MainComponent {
  options: Omit<Partial<EmblaOptionsType>, "axis"> | undefined = {
    duration: 30,
    watchDrag: true,
  };

  hasCarousel(event: CdkDragEnd | CdkDragStart) {
    if ("dropPoint" in event) {
      this.options = {
        watchDrag: true,
      };
    } else if ("source" in event) {
      this.options = {
        watchDrag: false,
      };
    }
  }

  @ViewChild("carousel") carousel!: HlmCarouselComponent;

  @HostListener("document:keydown.control.ArrowLeft", ["$event"])
  left(event: KeyboardEvent) {
    this.prevCarousel();
  }
  @HostListener("document:keydown.control.ArrowRight", ["$event"])
  right(event: KeyboardEvent| null) {
    this.nextCarousel();
  }

  nextCarousel(){
    this.carousel.scrollNext();
  }
  prevCarousel(){
    this.carousel.scrollPrev();
  }


}
