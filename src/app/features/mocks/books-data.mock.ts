import { Book } from '../models/book.model';

export const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    isbn: '978000000001',
    title: 'Design Patterns',
    description: 'Presenta patrones esenciales para resolver problemas comunes en el desarrollo orientado a objetos.',
    editorial: {
      id: 1,
      name: 'Addison-Wesley',
      phone: '123-456-7890',
      website: 'https://www.awl.com',
      email: 'contact@awl.com',
      state: 'Massachusetts'
    },
    dateCreated: '2023-04-14',
    price: 50.91,
    stock: 19,
    category: 'History',
    bestSeller: false,
    authors: [
      { id: 5, name: 'Bert', lastName: 'Bates', identityNumber: 'BB567890', email: 'bbates@example.com', state: 'New York' },
      { id: 6, name: 'Kathy', lastName: 'Sierra', identityNumber: 'KS678901', email: 'ksierra@example.com', state: 'California' },
      { id: 4, name: 'Eric', lastName: 'Freeman', identityNumber: 'EF456789', email: 'efreeman@example.com', state: 'California' }
    ]
  },
  {
    id: 2,
    isbn: '978000000002',
    title: 'Clean Code',
    description: 'Guía esencial sobre cómo escribir código legible, mantenible y profesional.',
    editorial: {
      id: 2,
      name: 'O’Reilly Media',
      phone: '987-654-3210',
      website: 'https://www.oreilly.com',
      email: 'info@oreilly.com',
      state: 'California'
    },
    dateCreated: '2023-10-26',
    price: 48.32,
    stock: 13,
    category: 'Fiction',
    bestSeller: false,
    authors: [
      { id: 4, name: 'Eric', lastName: 'Freeman', identityNumber: 'EF456789', email: 'efreeman@example.com', state: 'California' },
      { id: 6, name: 'Kathy', lastName: 'Sierra', identityNumber: 'KS678901', email: 'ksierra@example.com', state: 'California' }
    ]
  },
  {
    id: 3,
    isbn: '978000000003',
    title: 'Sapiens',
    description: 'Una mirada profunda y accesible sobre la evolución del Homo sapiens.',
    editorial: {
      id: 1,
      name: 'Addison-Wesley',
      phone: '123-456-7890',
      website: 'https://www.awl.com',
      email: 'contact@awl.com',
      state: 'Massachusetts'
    },
    dateCreated: '2023-11-19',
    price: 36.15,
    stock: 17,
    category: 'Thriller',
    bestSeller: true,
    authors: [
      { id: 2, name: 'Richard', lastName: 'Helm', identityNumber: 'RH234567', email: 'rhelm@example.com', state: 'Sydney' },
      { id: 10, name: 'Delia', lastName: 'Owens', identityNumber: 'DO012345', email: 'dowens@example.com', state: 'Georgia' }
    ]
  },
  {
    id: 4,
    isbn: '978000000004',
    title: 'The Alchemist',
    description: 'Una fábula sobre seguir los sueños y el destino personal.',
    editorial: {
      id: 5,
      name: 'Penguin Random House',
      phone: '877-777-7777',
      website: 'https://www.penguinrandomhouse.com',
      email: 'prh@penguin.com',
      state: 'New York'
    },
    dateCreated: '2023-03-26',
    price: 28.42,
    stock: 14,
    category: 'Thriller',
    bestSeller: true,
    authors: [
      { id: 3, name: 'Ralph', lastName: 'Johnson', identityNumber: 'RJ345678', email: 'rjohnson@example.com', state: 'Illinois' },
      { id: 8, name: 'Yuval', lastName: 'Harari', identityNumber: 'YH890123', email: 'yharari@example.com', state: 'Tel Aviv' }
    ]
  },
  {
    id: 5,
    isbn: '978000000005',
    title: 'Refactoring',
    description: 'Cómo mejorar la estructura interna del código sin alterar su comportamiento.',
    editorial: {
      id: 1,
      name: 'Addison-Wesley',
      phone: '123-456-7890',
      website: 'https://www.awl.com',
      email: 'contact@awl.com',
      state: 'Massachusetts'
    },
    dateCreated: '2023-09-17',
    price: 29.01,
    stock: 11,
    category: 'Thriller',
    bestSeller: true,
    authors: [
      { id: 5, name: 'Bert', lastName: 'Bates', identityNumber: 'BB567890', email: 'bbates@example.com', state: 'New York' },
      { id: 7, name: 'Paulo', lastName: 'Coelho', identityNumber: 'PC789012', email: 'pcoelho@example.com', state: 'Rio de Janeiro' },
      { id: 9, name: 'Alex', lastName: 'Michaelides', identityNumber: 'AM901234', email: 'amichaelides@example.com', state: 'London' }
    ]
  },
  {
    id: 6,
    isbn: '978000000006',
    title: 'The Silent Patient',
    description: 'Una novela psicológica donde una pintora deja de hablar tras un crimen.',
    editorial: {
      id: 2,
      name: 'O’Reilly Media',
      phone: '987-654-3210',
      website: 'https://www.oreilly.com',
      email: 'info@oreilly.com',
      state: 'California'
    },
    dateCreated: '2023-01-18',
    price: 25.00,
    stock: 16,
    category: 'Fiction',
    bestSeller: false,
    authors: [
      { id: 9, name: 'Alex', lastName: 'Michaelides', identityNumber: 'AM901234', email: 'amichaelides@example.com', state: 'London' },
      { id: 8, name: 'Yuval', lastName: 'Harari', identityNumber: 'YH890123', email: 'yharari@example.com', state: 'Tel Aviv' }
    ]
  },
  {
    id: 7,
    isbn: '978000000007',
    title: 'Head First Design Patterns',
    description: 'Patrones explicados con ejemplos divertidos e ilustraciones.',
    editorial: {
      id: 1,
      name: 'Addison-Wesley',
      phone: '123-456-7890',
      website: 'https://www.awl.com',
      email: 'contact@awl.com',
      state: 'Massachusetts'
    },
    dateCreated: '2023-07-09',
    price: 59.99,
    stock: 10,
    category: 'Programming',
    bestSeller: true,
    authors: [
      { id: 6, name: 'Kathy', lastName: 'Sierra', identityNumber: 'KS678901', email: 'ksierra@example.com', state: 'California' },
      { id: 1, name: 'Erich', lastName: 'Gamma', identityNumber: 'AG123456', email: 'egamma@example.com', state: 'Zurich' },
      { id: 2, name: 'Richard', lastName: 'Helm', identityNumber: 'RH234567', email: 'rhelm@example.com', state: 'Sydney' }
    ]
  },
  {
    id: 8,
    isbn: '978000000008',
    title: 'Where the Crawdads Sing',
    description: 'Kya, una joven aislada en los pantanos, es acusada de asesinato.',
    editorial: {
      id: 4,
      name: 'Celadon Books',
      phone: '321-654-9870',
      website: 'https://www.celadonbooks.com',
      email: 'info@celadon.com',
      state: 'New York'
    },
    dateCreated: '2023-02-13',
    price: 34.75,
    stock: 8,
    category: 'Thriller',
    bestSeller: false,
    authors: [
      { id: 10, name: 'Delia', lastName: 'Owens', identityNumber: 'DO012345', email: 'dowens@example.com', state: 'Georgia' },
      { id: 7, name: 'Paulo', lastName: 'Coelho', identityNumber: 'PC789012', email: 'pcoelho@example.com', state: 'Rio de Janeiro' }
    ]
  },
  {
    id: 9,
    isbn: '978000000009',
    title: 'Site Reliability Engineering',
    description: 'Principios de fiabilidad y gestión de incidentes a gran escala.',
    editorial: {
      id: 5,
      name: 'Penguin Random House',
      phone: '877-777-7777',
      website: 'https://www.penguinrandomhouse.com',
      email: 'prh@penguin.com',
      state: 'New York'
    },
    dateCreated: '2023-05-24',
    price: 45.00,
    stock: 12,
    category: 'Programming',
    bestSeller: true,
    authors: [
      { id: 1, name: 'Erich', lastName: 'Gamma', identityNumber: 'AG123456', email: 'egamma@example.com', state: 'Zurich' },
      { id: 3, name: 'Ralph', lastName: 'Johnson', identityNumber: 'RJ345678', email: 'rjohnson@example.com', state: 'Illinois' },
      { id: 4, name: 'Eric', lastName: 'Freeman', identityNumber: 'EF456789', email: 'efreeman@example.com', state: 'California' }
    ]
  },
  {
    id: 10,
    isbn: '978000000010',
    title: 'The Pragmatic Programmer',
    description: 'Consejos prácticos para pensar y actuar como un programador profesional.',
    editorial: {
      id: 3,
      name: 'HarperOne',
      phone: '800-123-4567',
      website: 'https://www.harperone.com',
      email: 'support@harperone.com',
      state: 'New York'
    },
    dateCreated: '2023-08-15',
    price: 41.20,
    stock: 9,
    category: 'Programming',
    bestSeller: false,
    authors: [
      { id: 8, name: 'Yuval', lastName: 'Harari', identityNumber: 'YH890123', email: 'yharari@example.com', state: 'Tel Aviv' },
      { id: 2, name: 'Richard', lastName: 'Helm', identityNumber: 'RH234567', email: 'rhelm@example.com', state: 'Sydney' }
    ]
  }
];
