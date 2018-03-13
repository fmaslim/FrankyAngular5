import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { RedditComponent } from './reddit/reddit.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';
import { ProductComponent } from './product/product.component';
import { InventoryRootComponent } from './inventory-root/inventory-root.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';
import { Metric, AnalyticsImplementation, AnalyticsService } from './analytics-demo/analytics-demo.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { SearchBoxComponent, YoutubeServiceInjectables } from './search-box/search-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    RedditComponent,
    ArticleComponent,
    ProductComponent,
    InventoryRootComponent,
    ProductListComponent,
    PriceDisplayComponent,
    ProductDepartmentComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    AnalyticsDemoComponent,
    SimpleHttpComponent,
    SearchBoxComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule // The effect is that we will be able to inject HttpClient into our components
  ],
  providers: [{
    provide: AnalyticsService,
    useFactory: () => {
      // create an implementation of that interface that will log the event
      const loggingImplementation: AnalyticsImplementation = {
        recordEvent: (metric: Metric): void => {
          console.log('The metric is: ' + metric);
        }
      };

      // Create the new AnalyticsService with the implementation
      return new AnalyticsService(loggingImplementation);
    }
  },
  YoutubeServiceInjectables
],
  bootstrap: [AppComponent]
})
export class AppModule { }
