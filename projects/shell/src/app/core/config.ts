import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config: Record<string, string> = {};

  async loadConfig(): Promise<void> {
    this.config = await fetch('/config.json').then((res) => res.json());
  }

  getRemoteUrl(remoteName: string): string {
    return this.config[remoteName];
  }
}
