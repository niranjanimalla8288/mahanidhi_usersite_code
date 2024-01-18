import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { PackagesComponent } from './packages/packages.component';
import { BusinessRegisterSuccessPageComponent } from './business-register-success-page/business-register-success-page.component';

const routes: Routes = [
  { path: "", component: MainhomeComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "advancedsearch", component: AdvancedSearchComponent },
  { path: "pricing", component: PricingComponent },
  { path: "allusers", component: AllusersComponent },
  { path: "about", component: AboutComponent },
  { path: "location", component: LocationComponent },
  { path: "news", component: NewsComponent },
  { path: "blogpost", component: BlogpostComponent },
  { path: "articles", component: ArticlesComponent },
  { path: "business-category/:id", component: RestaurantComponent },
  { path: "createbusiness", component: CreatebusinessComponent },
  { path: "alloffers", component: AlloffersComponent },
  { path: "contact", component: ContactComponent },
  { path: "list-my-business", component: SignupComponent },
  { path: "featuredbusinessposts", component: FeaturedbusinesspostsComponent },
  { path: "recentsposts", component: RecentspostsComponent },
  { path: "search", component: SearchComponent },
  { path: "topbusinesses", component: TopbusinessesComponent },
  { path: "siderecentposts", component: SiderecentpostsComponent },
  { path: "hometoplocations", component: HometoplocationsComponent },
  { path: "mainnavbar", component: MainnavbarComponent },
  { path: "footer", component: FooterComponent },
  { path: "homeadvancedsearch", component: HomeadvancedsearchComponent },
  { path: "categorieshome", component: CategorieshomeComponent },
  { path: "topusersinhomepage", component: TopusersinhomepageComponent },
  { path: "mainhome", component: MainhomeComponent },
  { path: "homepagesidecontaines", component: HomepagesidecontainesComponent },
  { path: "infradevelopers", component: InfradevelopersComponent },
  { path: "groceries", component: GroceriesComponent },
  { path: "hospitals", component: HospitalsComponent },
  { path: "button-ofterclick-side", component: ButtonOfterclickSideComponent },
  { path: "allpagesnavbar", component: AllpagesNavbarComponent },
  { path: "imgtopinfracompany/:id", component: ImgtopinfracompanyComponent },
  { path: "privacyandpolicy", component: PrivacyandpolicyComponent },
  { path: "termsandconditions", component: TermsandconditionsComponent },
  { path: "advanced-search-components", component: AdvancedSearchComponent },
  { path: "packages", component: PackagesComponent },
  { path: "businnes-register-success", component: BusinessRegisterSuccessPageComponent }
  // {path:"signin",component:SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
