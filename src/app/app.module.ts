import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { PricingComponent } from './pricing/pricing.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { NewsComponent } from './news/news.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { ArticlesComponent } from './articles/articles.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { CreatebusinessComponent } from './createbusiness/createbusiness.component';
import { AlloffersComponent } from './alloffers/alloffers.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';
// import { SigninComponent } from './signin/signin.component';
import { FeaturedbusinesspostsComponent } from './featuredbusinessposts/featuredbusinessposts.component';
import { RecentspostsComponent } from './recentsposts/recentsposts.component';
import { SearchComponent } from './search/search.component';
import { TopbusinessesComponent } from './topbusinesses/topbusinesses.component';
import { SiderecentpostsComponent } from './siderecentposts/siderecentposts.component';
import { HometoplocationsComponent } from './hometoplocations/hometoplocations.component';
import { MainnavbarComponent } from './mainnavbar/mainnavbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeadvancedsearchComponent } from './homeadvancedsearch/homeadvancedsearch.component';
import { CategorieshomeComponent } from './categorieshome/categorieshome.component';
import { TopusersinhomepageComponent } from './topusersinhomepage/topusersinhomepage.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { HomepagesidecontainesComponent } from './homepagesidecontaines/homepagesidecontaines.component';
import { InfradevelopersComponent } from './infradevelopers/infradevelopers.component';
import { GroceriesComponent } from './groceries/groceries.component';
import { HospitalsComponent } from './hospitals/hospitals.component';
import { ButtonOfterclickSideComponent } from './button-ofterclick-side/button-ofterclick-side.component';
import { AllpagesNavbarComponent } from './allpages-navbar/allpages-navbar.component';
import { ImgtopinfracompanyComponent } from './imgtopinfracompany/imgtopinfracompany.component';
import { PrivacyandpolicyComponent } from './privacyandpolicy/privacyandpolicy.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackagesComponent } from './packages/packages.component';
import { RouterModule } from '@angular/router';
// import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdvancedSearchComponent,
    PricingComponent,
    AllusersComponent,
    AboutComponent,
    LocationComponent,
    NewsComponent,
    BlogpostComponent,
    ArticlesComponent,
    RestaurantComponent,
    CreatebusinessComponent,
    AlloffersComponent,
    ContactComponent,
    SignupComponent,
    // SigninComponent,
    FeaturedbusinesspostsComponent,
    RecentspostsComponent,
    SearchComponent,
    TopbusinessesComponent,
    SiderecentpostsComponent,
    HometoplocationsComponent,
    MainnavbarComponent,
    FooterComponent,
    HomeadvancedsearchComponent,
    CategorieshomeComponent,
    TopusersinhomepageComponent,
    MainhomeComponent,
    HomepagesidecontainesComponent,
    InfradevelopersComponent,
    GroceriesComponent,
    HospitalsComponent,
    ButtonOfterclickSideComponent,
    AllpagesNavbarComponent,
    ImgtopinfracompanyComponent,
    PrivacyandpolicyComponent,
    TermsandconditionsComponent,
    AdvancedSearchComponent,
    PackagesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
