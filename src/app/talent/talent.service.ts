import { Injectable } from '@angular/core';
import { Talent } from './talent';

@Injectable({
  providedIn: 'root',
})
export class TalentService {
  private talents: Talent[] = [
    {
      id: '1',
      name: "Brian O'Keefe",
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Frontend Developer',
      description:
        'Placerat eget faucibus eu rhoncus. Scelerisque ornare nisl mattis volutpat. Ut elit sit massa tristique. Convallis ac aliquet tortor lorem et tortor lobortis amet. Blandit ut imperdiet cursus faucibus. Tortor auctor laoreet a ultrices dignissim nunc sit. Vel libero senectus nisl porta massa arcu tellus tempor.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget.

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '2',
      name: 'Bernice Kassulke',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Investor Research Architect',
      description:
        'Nisl elit magna fusce integer erat. Placerat eget faucibus eu rhoncus. Scelerisque ornare nisl mattis volutpat. Ut elit sit massa tristique. Convallis ac aliquet tortor lorem et tortor lobortis amet. Blandit ut imperdiet cursus faucibus. Tortor auctor laoreet a ultrices dignissim nunc sit. Vel libero senectus nisl porta massa arcu tellus tempor.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '3',
      name: 'Mary Fahey',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Global Security Manager',
      description:
        'Bibendum dui nam tellus at platea facilisi. At nibh aliquet porttitor duis pellentesque porta lacus sed. Viverra hac ultrices nec pretium vel diam nulla. Massa suspendisse auctor quisque senectus urna malesuada. Scelerisque eu a sapien adipiscing leo proin. Nisi sed vulputate non egestas integer. At elit odio accumsan accumsan faucibus.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '4',
      name: 'Anne Krajcik',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Direct Functionality Strategist',
      description:
        'Tincidunt vitae duis aliquet cursus quam mauris quis bibendum condimentum. Tristique nunc ullamcorper at purus suspendisse purus risus aliquam ultrices. Vitae volutpat arcu viverra facilisi pellentesque semper. Eleifend nibh urna id elit quam sit vel dictumst. Interdum elementum elementum faucibus ultrices consectetur sit a faucibus. Volutpat odio eu eget nunc.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '5',
      name: 'Ken Schowalter',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Investor Creative Architect',
      description:
        'Mauris rhoncus scelerisque amet ipsum. Quis sit id arcu vitae morbi sed mi. In orci dui sit penatibus phasellus nibh convallis. Iaculis enim enim habitasse rhoncus non nam. Sagittis imperdiet ornare nunc sit et in risus tortor purus. Nisi dolor ligula scelerisque duis. Ipsum amet odio diam vitae tellus ut viverra pretium leo.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [],
      frameworkTools: [],
      language: [],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '6',
      name: 'Sheldon Sanford',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Human Group Specialist',
      description:
        'Pellentesque libero quis magna tempus. In morbi elit mauris lacus sit auctor. Pretium malesuada mauris quis id egestas consectetur dictum in. Fames aliquam ac dui porta dignissim elementum dolor urna. Neque vel feugiat et etiam eros felis tincidunt sed risus. Sem orci facilisi molestie aenean condimentum mattis nunc.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '7',
      name: 'Levi Thiel',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Frontend Developer',
      description:
        'Ipsum adipiscing leo adipiscing mi. Molestie sit dignissim congue odio dui turpis. Ipsum nisl eu ultrices diam. Ipsum odio scelerisque blandit urna pellentesque. Porttitor sem arcu nec pellentesque metus tellus amet faucibus vel. Suspendisse tempor lacus congue montes eget at. Enim sed viverra nunc aenean id at sit odio amet.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '8',
      name: 'Evelyn Greenfelder',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Lead Marketing Analyst',
      description:
        'Ornare tempus eget bibendum duis. Neque arcu in lorem non quam pretium proin. Sit erat ut vel turpis cursus. Sed scelerisque feugiat volutpat leo accumsan. Nunc tincidunt habitant dui nisl malesuada a neque phasellus elit. Turpis netus lobortis fames in dictumst suspendisse. Aenean id pretium commodo sagittis cras lacus ut.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
    {
      id: '9',
      name: 'William Lehner',
      campus: 'Politeknik Negeri Malang',
      study: 'Software Engineering',
      program: 'Alumni Magang Merdeka B7',
      role: 'Direct Metrics Coordinator',
      description:
        'Mauris lobortis tincidunt ultricies sed. Nulla varius massa donec feugiat. In cras tellus placerat tortor enim enim non. Turpis ipsum eu proin eget luctus at. Duis nisi ultricies pretium varius condimentum. Magna nibh quis accumsan gravida eget parturient pulvinar et quis. Facilisis pulvinar dictum tellus ornare a at urna id.',
      aboutProject: `In nullam et et accumsan interdum placerat faucibus. Urna ut ut tristique lacus quam cursus morbi. Suspendisse cum pretium massa euismod. Potenti morbi aliquam mollis ultrices lectus arcu. Nulla nunc at cursus pharetra pharetra augue id tincidunt libero. Vulputate habitant consectetur nec hac quisque ac urna malesuada. Velit sed id bibendum ut pharetra vel ultrices eget. 

        Elementum morbi eleifend id consectetur vitae amet. Ut venenatis dui justo et velit id nam mattis. Morbi neque at hac in ut aliquet porttitor. Pellentesque amet porttitor lorem diam pellentesque venenatis sed. Fames a interdum a eget viverra urna mauris nibh. Aliquet et tristique mattis feugiat amet. Augue dui volutpat scelerisque eget.
        Ornare dui venenatis lectus ut id eget vitae. Tellus et scelerisque vitae sed ultrices. Montes quisque lacus ipsum et nisi sed vulputate. Nullam cras parturient sit mi convallis.`,
      hardSkill: [
        'Front-End Development',
        'Responsive Design',
        'API Integration',
        'UI/UX Collaboration',
        'Website Optimization',
      ],
      softSkill: [
        'Problem-Solving',
        'Analytical Thinking',
        'Collaboration and Teamwork',
        'Communication (Technical & Non-Technical)',
        'Attention to Detail',
        'Time Management',
        'Adaptive',
        'Leadership',
      ],
      frameworkTools: [
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'Angular',
        'Vscode',
        'Git',
        'Figma',
      ],
      language: ['Javascript', 'Typescript', 'PHP'],
      email: '',
      linkedin: 'https://www.linkedin.com',
      github: 'https://www.github.com',
      instagram: 'https://www.instagram.com',
    },
  ];

  constructor() {}

  getAllTalents() {
    return this.talents;
  }

  getTalentById(id: string) {
    return this.talents.find((talent) => talent.id === id);
  }
}
