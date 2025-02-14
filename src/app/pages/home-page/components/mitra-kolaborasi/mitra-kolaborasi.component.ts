import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mitra-kolaborasi',
  imports: [CommonModule],
  templateUrl: './mitra-kolaborasi.component.html',
  styleUrl: './mitra-kolaborasi.component.css',
})
export class MitraKolaborasiComponent {
  mitra = [
    { src: 'assets/logo/kekSinghasari.svg', alt: 'KEK Singhasari' },
    { src: 'assets/logo/aws.svg', alt: 'AWS' },
    { src: 'assets/logo/kampusMerdeka.svg', alt: 'Kampus Merdeka' },
    // { src: 'assets/logo/prakerja.svg', alt: 'Prakerja' },
    { src: 'assets/logo/bukalapak.svg', alt: 'Mitra Bukalapak' },
    { src: 'assets/logo/microsoft.svg', alt: 'Microsoft' },
    { src: 'assets/logo/kondigi.svg', alt: 'Kondigi' },
    // { src: 'assets/logo/mcc.svg', alt: 'MCC' },
    { src: 'assets/logo/kedaireka.svg', alt: 'Kedaireka' },
  ];
}
