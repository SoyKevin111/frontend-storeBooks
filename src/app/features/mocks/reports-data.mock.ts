import { BestSellers, BestSellersByCategory, LowRotationBooks, MonthlySales } from "../../shared/models/reports.models";

export const mockMonthlySales: MonthlySales[] = [
  { month: 'January', sales: 3200, booksSold: 850 },
  { month: 'February', sales: 2800, booksSold: 740 },
  { month: 'March', sales: 3500, booksSold: 910 },
  { month: 'April', sales: 4100, booksSold: 980 },
  { month: 'May', sales: 4700, booksSold: 1120 },
  { month: 'June', sales: 3900, booksSold: 950 },
  { month: 'July', sales: 5200, booksSold: 1230 },
  { month: 'August', sales: 4900, booksSold: 1190 },
  { month: 'September', sales: 4300, booksSold: 1020 },
  { month: 'October', sales: 4500, booksSold: 1080 },
];

export const mockLowRotationBooks: LowRotationBooks[] = [
  {
    isbn: '978-0000000001',
    title: 'Ancient Civilizations',
    authors: ['Jane Carter'],
    sales: 12,
    lastSold: '2023-10-05',
  },
  {
    isbn: '978-0000000002',
    title: 'Intro to Botany',
    authors: ['Mark Thompson'],
    sales: 8,
    lastSold: '2023-08-17',
  },
  {
    isbn: '978-0000000003',
    title: 'The Lost Galaxy',
    authors: ['Nina Rivers'],
    sales: 15,
    lastSold: '2023-09-10',
  },
  {
    isbn: '978-0000000004',
    title: 'Understanding Algebra',
    authors: ['Carlos Méndez'],
    sales: 5,
    lastSold: '2023-07-22',
  },
  {
    isbn: '978-0000000005',
    title: 'Philosophy 101',
    authors: ['Sophie Bennett'],
    sales: 7,
    lastSold: '2023-06-30',
  },
  {
    isbn: '978-0000000006',
    title: 'A World of Birds',
    authors: ['Laura Green'],
    sales: 6,
    lastSold: '2023-05-14',
  },
  {
    isbn: '978-0000000007',
    title: 'Zen and You',
    authors: ['Hiro Tanaka'],
    sales: 9,
    lastSold: '2023-08-02',
  },
  {
    isbn: '978-0000000008',
    title: 'Basic Economics',
    authors: ['Samuel King'],
    sales: 11,
    lastSold: '2023-11-01',
  },
  {
    isbn: '978-0000000009',
    title: 'Creative Writing Tricks',
    authors: ['Alice Rowe'],
    sales: 4,
    lastSold: '2023-04-25',
  },
  {
    isbn: '978-0000000010',
    title: 'Lost in the Ice',
    authors: ['Gregory Falk'],
    sales: 10,
    lastSold: '2023-09-30',
  },
];

export const mockBestSellers: BestSellers[] = [
  { title: 'The Fire Within', category: 'FICTION', sales: 1200 },
  { title: 'History of Time', category: 'HISTORY', sales: 1100 },
  { title: 'Dragon’s Legacy', category: 'FANTASY', sales: 1050 },
  { title: 'Life of a Genius', category: 'BIOGRAPHY', sales: 980 },
  { title: 'Midnight Whispers', category: 'MYSTERY', sales: 1020 },
  { title: 'Hearts Collide', category: 'ROMANCE', sales: 1120 },
  { title: 'Silent Threat', category: 'THRILLER', sales: 970 },
  { title: 'Healthy Mind, Healthy Life', category: 'HEALTH', sales: 950 },
  { title: 'Otaku Dreams', category: 'ANIME', sales: 880 },
  { title: 'Fated Kingdom', category: 'ANIME', sales: 910 },
];

export const mockBestSellersByCategory: BestSellersByCategory[] = [
  // FICTION
  {
    isbn: '978-0000000001',
    title: 'The Fire Within',
    authors: ['J.K. Morgan'],
    editorial: 'Nova Press',
    price: 19.99,
    category: 'FICTION',
    bestSeller: true,
  },
  {
    isbn: '978-0000000002',
    title: 'Shadows of the Wind',
    authors: ['Carla Ruiz'],
    editorial: 'Literaria',
    price: 21.5,
    category: 'FICTION',
    bestSeller: true,
  },

  // HISTORY
  {
    isbn: '978-0000000003',
    title: 'History of Time',
    authors: ['Stephen Howe'],
    editorial: 'Chronos Books',
    price: 24.99,
    category: 'HISTORY',
    bestSeller: true,
  },
  {
    isbn: '978-0000000004',
    title: 'Empires and Ashes',
    authors: ['Diana Schultz'],
    editorial: 'Histobook',
    price: 23.0,
    category: 'HISTORY',
    bestSeller: true,
  },

  // FANTASY
  {
    isbn: '978-0000000005',
    title: 'Dragon’s Legacy',
    authors: ['Tina Frost'],
    editorial: 'Fantasy Ink',
    price: 22.5,
    category: 'FANTASY',
    bestSeller: true,
  },
  {
    isbn: '978-0000000006',
    title: 'The Moonblade',
    authors: ['Eric Thorn'],
    editorial: 'Mystic Realms',
    price: 26.0,
    category: 'FANTASY',
    bestSeller: true,
  },

  // BIOGRAPHY
  {
    isbn: '978-0000000007',
    title: 'Life of a Genius',
    authors: ['Emma Grant'],
    editorial: 'TrueStory Media',
    price: 18.0,
    category: 'BIOGRAPHY',
    bestSeller: true,
  },
  {
    isbn: '978-0000000008',
    title: 'The Painter’s Path',
    authors: ['Leo Alvarez'],
    editorial: 'MemoirWorks',
    price: 20.0,
    category: 'BIOGRAPHY',
    bestSeller: true,
  },

  // MYSTERY
  {
    isbn: '978-0000000009',
    title: 'Midnight Whispers',
    authors: ['Paul Dean'],
    editorial: 'Mystery House',
    price: 20.99,
    category: 'MYSTERY',
    bestSeller: true,
  },
  {
    isbn: '978-0000000010',
    title: 'The Locked Room',
    authors: ['Sarah Blake'],
    editorial: 'Dark Reads',
    price: 19.5,
    category: 'MYSTERY',
    bestSeller: true,
  },

  // ROMANCE
  {
    isbn: '978-0000000011',
    title: 'Hearts Collide',
    authors: ['Sasha Lee'],
    editorial: 'LovePress',
    price: 17.5,
    category: 'ROMANCE',
    bestSeller: true,
  },
  {
    isbn: '978-0000000012',
    title: 'Letters to Juliet',
    authors: ['Rosa Jimenez'],
    editorial: 'Romance & Co.',
    price: 16.8,
    category: 'ROMANCE',
    bestSeller: true,
  },

  // THRILLER
  {
    isbn: '978-0000000013',
    title: 'Silent Threat',
    authors: ['Marcus Black'],
    editorial: 'Pulse Books',
    price: 21.0,
    category: 'THRILLER',
    bestSeller: true,
  },
  {
    isbn: '978-0000000014',
    title: 'The Last Witness',
    authors: ['Julia Kane'],
    editorial: 'Edge House',
    price: 22.3,
    category: 'THRILLER',
    bestSeller: true,
  },

  // HEALTH
  {
    isbn: '978-0000000015',
    title: 'Healthy Mind, Healthy Life',
    authors: ['Diane Wells'],
    editorial: 'Vital Reads',
    price: 16.99,
    category: 'HEALTH',
    bestSeller: true,
  },
  {
    isbn: '978-0000000016',
    title: 'The Sleep Cure',
    authors: ['Carlos Luna'],
    editorial: 'WellBeing Press',
    price: 18.2,
    category: 'HEALTH',
    bestSeller: true,
  },

  // ANIME
  {
    isbn: '978-0000000017',
    title: 'Otaku Dreams',
    authors: ['Yuki Takahashi'],
    editorial: 'AnimeCore',
    price: 14.99,
    category: 'ANIME',
    bestSeller: true,
  },
  {
    isbn: '978-0000000018',
    title: 'Fated Kingdom',
    authors: ['Aiko Sato'],
    editorial: 'Shōnen House',
    price: 23.99,
    category: 'ANIME',
    bestSeller: true,
  },
];





