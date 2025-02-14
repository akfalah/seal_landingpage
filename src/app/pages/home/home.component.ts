import { Component } from '@angular/core';
import { BannerComponent } from "./components/banner/banner.component";
import { MitraKolaborasiComponent } from "./components/mitra-kolaborasi/mitra-kolaborasi.component";
import { ProgramTerbaruComponent } from "./components/program-terbaru/program-terbaru.component";
import { WhySealComponent } from "./components/why-seal/why-seal.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-home',
  imports: [BannerComponent, MitraKolaborasiComponent, ProgramTerbaruComponent, WhySealComponent, TestimonialsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
