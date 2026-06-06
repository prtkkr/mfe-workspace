import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import { ConfigService } from './app/core/config';

async function start() {
  const configService = new ConfigService();

  await configService.loadConfig();

  (window as any).__mfeConfig = configService;

  await bootstrapApplication(App, appConfig);
}

start().catch(console.error);
