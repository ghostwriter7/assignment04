import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({providedIn: 'root'})
export class NotificationService {
  constructor(private messageService: MessageService) {}

  add(severity: string, summary: string): void {
    this.messageService.add({severity, summary});
  }

  clear(): void {
    this.messageService.clear();
  }
}
