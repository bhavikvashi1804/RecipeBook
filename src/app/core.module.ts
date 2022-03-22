import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthIntercetorService } from './auth/auth-interceptor.service';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';

@NgModule({
  providers: [
    RecipeService,
    DataStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthIntercetorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
