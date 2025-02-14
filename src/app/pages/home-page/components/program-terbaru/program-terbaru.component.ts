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
      description: `Magang Kampus Merdeka adalah peluang terbaik bagi mahasiswa untuk merasakan dunia kerja secara langsung dan mengembangkan keterampilan profesional sebelum lulus! Dalam program ini, kamu bisa magang di berbagai perusahaan ternama, startup inovatif, hingga institusi pemerintah, sambil mendapatkan bimbingan dari para mentor berpengalaman. Selain menambah pengalaman dan relasi, magang juga bisa dikonversi menjadi SKS, sehingga kamu tetap bisa lulus tepat waktu. Dengan pengalaman kerja nyata dan sertifikat yang diakui industri, magang adalah langkah awal yang tepat untuk membangun karier impianmu! 🚀`,
    },
    {
      image: 'assets/images/program-prakerja.svg',
      title: 'Internship & Coaching Class',
      description: `
        <div class="space-y-6">
          <p>
            Sebuah program yang mengintegrasikan pengalaman magang di instansi mitra dengan pendampingan berupa sesi coaching intensif yang berfokus pada pengembangan keterampilan profesional dan personal mahasiswa.
          </p>
          <div>
            <p>Tujuan Bagi Mahasiswa:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Mendapatkan pengalaman kerja nyata</li>
              <li>Mengembangkan keterampilan yang relevan</li>
              <li>Membangun jaringan profesional</li>
              <li>Meningkatkan daya saing</li>
              <li>Mentransformasikan diri menjadi lebih profesional</li>
            </ul>
          </div>
          <div>
            <p>Tujuan Bagi Instansi:</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Mendapatkan talenta potensial</li>
              <li>Ikut berpartisipasi dalam mengembangkan SDM unggul</li>
              <li>Mendapatkan ide & inovasi baru</li>
              <li>Efisiensi rekrutmen</li>
            </ul>
          </div>
        </div>
      `,
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

  template = `
    <div class="space-y-6">
      <p>
        Lorem ipsum dolor sit amet consectetur. Placerat adipiscing neque sit
        elit. Condimentum ligula eu aenean vitae. Nulla pellentesque morbi
        interdum mi. Orci eget tellus ut fringilla quisque lorem vestibulum.
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Pellentesque viverra id imperdiet purus ut pharetra sagittis.</li>
        <li>Vel mi interdum platea condimentum ut.</li>
        <li>Ut massa cras quam pharetra non integer nullam in convallis.</li>
      </ul>
      <p>
        Integer lorem pellentesque felis nisi. Cum malesuada euismod et
        elementum.
      </p>
      <p>
        Scelerisque ut a dui nec proin. Elit et pulvinar et euismod in. Eu
        gravida elementum praesent ut lectus ut porttitor venenatis ultricies.
        Nulla.
      </p>
    </div>
  `;

  selectedItem = this.programs[0].title;

  toggleItem(title: string) {
    if (this.selectedItem === title) return;
    this.selectedItem = title;
  }

  getSelectedItem() {
    return this.programs.find((program) => program.title === this.selectedItem);
  }
}
