import { style } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { HlmIconComponent, provideIcons } from '@spartan-ng/ui-icon-helm';
import { HlmToggleDirective } from '@spartan-ng/ui-toggle-helm';
import { BrnToggleDirective } from '@spartan-ng/ui-toggle-brain';
import {
  lucideVolumeX,
  lucideVolume,
  lucideVolume1,
  lucideVolume2,
  lucideMoveVertical,
} from '@ng-icons/lucide';
import { Sound } from './sound-interface';
import { NoteComponent } from './note/note.component';
@Component({
  selector: 'app-sound',
  standalone: true,
  imports: [BrnToggleDirective, HlmToggleDirective, HlmIconComponent, NoteComponent],
  templateUrl: './sound.component.html',
  styleUrl: './sound.component.scss',
  providers: [
    provideIcons({ lucideVolumeX, lucideVolume, lucideVolume1, lucideVolume2, lucideMoveVertical }),
  ],
  host: {
    '[style.display]': '"grid"',
    '[style.grid-template-columns]': '"repeat("+(columns+1)+", 1fr)"',
  },
})
export class SoundComponent implements OnInit {
  protected volume: 0 | 1 | 2 | -1 = 2;
  ngOnInit(): void {
    this.fillSounds();
  }
  @Input() columns: number = 0;
  // get columnsArray(): number[] {
  //   return Array(this.columns)
  //     .fill(0)
  //     .map((_, i) => i + 1);
  // }

  protected sounds: Sound[] = [];

  private fillSounds(){
    for (let i = 0; i < this.columns; i++) {
      // const element = array[index];
      
    this.sounds.push({volume: '2'})
    }
  }


}
