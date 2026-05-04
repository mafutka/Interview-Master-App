import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponennt } from './app/app';

bootstrapApplication(AppComponennt, appConfig).catch((err) => console.error(err));
