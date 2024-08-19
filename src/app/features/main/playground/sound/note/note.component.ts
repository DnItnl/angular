import { Component, HostBinding, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.scss'
})
export class NoteComponent {
  @Input() volume: 0 | 1 | 2 | 3= 0;

  
  private colors= {
    0 : "#1e2025",
    1 : "#168374",
    2 : "#248F79",
    3 : "#0BD8B9"
  }


  @HostBinding('style.background-color') private color: any = this.colors[0];
  @HostBinding('style.border-color') private border: any = this.colors[0];
// destructive
  @HostListener('click', ['$event'])
  click(event: any) {
    console.log(event);
    this.volume == 3 ? this.volume=0 : this.volume++
    // this.volume++;
    console.log(this.volume);
    // @ts-ignore
    this.color = this.colors[Number(this.volume)];
    // @ts-ignore
    this.border = this.colors[Number(this.volume)];



  }

}
