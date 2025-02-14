import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-program-terbaru',
  imports: [CommonModule],
  templateUrl: './program-terbaru.component.html',
  styleUrl: './program-terbaru.component.css',
})
export class ProgramTerbaruComponent {
  programs = [
    {
      image: 'assets/images/program-sib.svg',
      title: 'SIB',
      icon: ['assets/logo/kampusMerdeka.svg', 'assets/logo/kedaireka.svg'],
    },
    {
      image: 'assets/images/program-magang.svg',
      title: 'Magang',
      icon: ['assets/logo/kampusMerdeka.svg', 'assets/logo/kedaireka.svg'],
    },
    {
      image: 'assets/images/program-prakerja.svg',
      title: 'Prakerja',
      icon: ['assets/logo/prakerja.svg'],
    },
    {
      image: 'assets/images/program-mandiri.svg',
      title: 'Mandiri',
    },
    {
      image: 'assets/images/program-online.svg',
      title: 'Online',
    },
  ];

  selectedItem = this.programs[0].title;

  toggleItem(title: string) {
    if (this.selectedItem === title) return;
    this.selectedItem = title;
  }

  getSelectedItem() {
    return this.programs.find((program) => program.title === this.selectedItem)
  }
}
