import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView();
    }
  }
}
