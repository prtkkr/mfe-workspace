import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'products',
    loadChildren: async () => {
      const config = (window as any).__mfeConfig;
      const m = await loadRemoteModule({
        type: 'module',
        remoteEntry: config.getRemoteUrl('products'),
        exposedModule: './Routes',
      });
      return m.routes;
    },
  },
];
