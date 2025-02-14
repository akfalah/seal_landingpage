import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Matt Cannon',
      program: 'Magang',
      position: 'UI/UX Designer',
      comment:
        'Praesent feugiat rutrum nisi, ut sodales risus aliquet in. Fusce elit dolor, accumsan in scelerisque eu, posuere at lorem. Phasellus ac turpis est. Pellentesque vestibulum auctor velit sed gravida. Cras dapibus lorem et volutpat fermentum. Nullam sodales ultrices laoreet. Duis facilisis, ex quis laoreet ultrices, ex arcu varius mauris, ac aliquet enim justo sit amet felis. Sed at diam erat. Nunc sed nunc vel nibh efficitur ultrices in in leo.',
    },
    {
      name: 'Riri Annisatunnaza',
      program: 'Magang',
      position: 'Cloud Engineer & System Analyst',
      comment:
        'Mengikuti Program Magang di SEAL merupakan pengalaman yang sangat berharga bagi saya. Program ini memberikan saya kesempatan untuk terlibat langsung dalam proses transformasi digital. Sebagai System Analyst, saya belajar banyak tentang analisis kebutuhan sistem, merancang solusi teknis, dan memastikan aplikasi atau sistem yang dikembangkan sesuai dengan tujuan bisnis serta kebutuhan stakeholders. Pengalaman ini telah meningkatkan soft skill dan hard skill saya sehingga meningkatkan kesiapan saya untuk bekerja.',
    },
    {
      name: 'John Baron',
      program: 'MSIB',
      position: 'Cloud Engineer',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum, leo et cursus suscipit, enim felis aliquam tortor, eu efficitur felis quam ut nisl. Integer a nunc eget felis varius egestas ac scelerisque quam. Sed justo erat, consectetur eu ullamcorper a, scelerisque in arcu. Proin nec neque vitae ex vestibulum.',
    },
  ];

  selectedItem = this.testimonials[1].name;
  direction: 'left' | 'right' = 'right';

  currentIndex() {
    return this.testimonials.findIndex(
      (testimonial) => testimonial.name === this.selectedItem
    );
  }

  toggleItem(name: string) {
    const currentIndex = this.currentIndex();
    const nextIndex = this.testimonials.findIndex(
      (testimonial) => testimonial.name === name
    );

    this.direction = nextIndex > currentIndex ? 'right' : 'left';
    this.selectedItem = name;
  }

  prevItem() {
    const currentIndex = this.currentIndex();
    const prevIndex =
      (currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
    
      this.toggleItem(this.testimonials[prevIndex].name);
  }

  nextItem() {
    const currentIndex = this.currentIndex();
    const nextIndex = (currentIndex + 1) % this.testimonials.length;
    
    this.toggleItem(this.testimonials[nextIndex].name);
  }

  getSelectedItem() {
    return this.testimonials.find(
      (testimonial) => testimonial.name === this.selectedItem
    );
  }
}
