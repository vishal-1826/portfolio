import { Component,OnInit,Input } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule,NgIf],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit {
  @Input() message!: string;
  visible = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => this.visible = false, 10000); // Hide notification after 10 seconds
  }

}
