import { Component, EventEmitter, Output } from "@angular/core";
import { provideIcons } from "@ng-icons/core";
import { lucideListMusic } from "@ng-icons/lucide";
import { HlmButtonDirective } from "../../../../../libs/ui/ui-button-helm/src/lib/hlm-button.directive";
import { HlmIconComponent } from "../../../../../libs/ui/ui-icon-helm/src/lib/hlm-icon.component";

@Component({
  selector: "app-chat",
  standalone: true,
  imports: [HlmButtonDirective, HlmIconComponent],
  providers: [provideIcons({ lucideListMusic })],
  templateUrl: "./chat.component.html",
  styleUrl: "./chat.component.scss",
})
export class ChatComponent {

@Output()	public toPlayground = new EventEmitter<void>();
onPlayground() {
  this.toPlayground.emit();
}
}
