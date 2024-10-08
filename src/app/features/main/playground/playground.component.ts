import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from "@angular/core";

import {
  CdkDrag,
  CdkDragDrop,
  CdkDragEnd,
  CdkDragPlaceholder,
  CdkDragStart,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";
import { SoundComponent } from "./sound/sound.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { provideIcons } from "@ng-icons/core";
import { lucideMessagesSquare } from "@ng-icons/lucide";
import { HlmIconComponent } from "@spartan-ng/ui-icon-helm";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
@Component({
  selector: "app-playground",
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CdkDropList, CdkDrag, CdkDragPlaceholder, SoundComponent, ScrollingModule, HlmButtonDirective, HlmIconComponent],
  providers: [provideIcons({
    lucideMessagesSquare
  })],
  templateUrl: "./playground.component.html",
  styleUrl: "./playground.component.scss",
})
export class PlaygroundComponent {

  @Output()	public toChat = new EventEmitter<void>();
  onChat() {
    this.toChat.emit();
  }
  movies = [
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
    "Episode IX - The Rise of Skywalker",
    "Episode I - The Phantom Menace",
    "Episode II - Attack of the Clones",
    "Episode III - Revenge of the Sith",
    "Episode IV - A New Hope",
    "Episode V - The Empire Strikes Back",
    "Episode VI - Return of the Jedi",
    "Episode VII - The Force Awakens",
    "Episode VIII - The Last Jedi",
    "Episode IX - The Rise of Skywalker",
    
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  @Output() dndEvent = new EventEmitter<CdkDragStart | CdkDragEnd>();
  onTake(event: CdkDragStart | CdkDragEnd) {
    this.dndEvent.emit(event);
  }
}
