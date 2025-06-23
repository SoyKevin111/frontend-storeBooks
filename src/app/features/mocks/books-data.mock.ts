import { Book } from "../models/book.model";

export const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    isbn: '978-0-123456-47-2',
    title: 'El arte de programar',
    editorial: 'TechBooks',
    dateCreated: '2023-01-15',
    price: 49.99,
    stock: 12,
    category: 'Tecnología',
    authors: ['Carlos López', 'Ana Torres', 'Javier Méndez']
  },
  {
    id: 2,
    isbn: '978-1-234567-89-0',
    title: 'Historia del tiempo',
    editorial: 'Ciencia Viva',
    dateCreated: '2022-03-22',
    price: 34.5,
    stock: 8,
    category: 'Ciencia',
    authors: ['Stephen Hawking', 'María Gómez', 'Tomás Aguilar']
  },
  {
    id: 3,
    isbn: '978-0-987654-32-1',
    title: 'Cien años de soledad',
    editorial: 'Sudamericana',
    dateCreated: '2020-07-10',
    price: 25.0,
    stock: 20,
    category: 'Literatura',
    authors: ['Gabriel García Márquez', 'Lucía Herrera', 'Eduardo Fernández']
  },
  {
    id: 4,
    isbn: '978-3-598215-10-0',
    title: 'Clean Code',
    editorial: 'Prentice Hall',
    dateCreated: '2018-05-01',
    price: 52.75,
    stock: 15,
    category: 'Programación',
    authors: ['Robert C. Martin', 'Sarah Becker', 'Tom Johnson']
  },
  {
    id: 5,
    isbn: '978-0-112233-44-5',
    title: 'Introducción a la Filosofía',
    editorial: 'Pensadores',
    dateCreated: '2021-10-18',
    price: 19.9,
    stock: 5,
    category: 'Filosofía',
    authors: ['Ana María Ruiz', 'Jorge Cortés', 'Elena Ramos']
  },
  {
    id: 6,
    isbn: '978-1-556789-12-3',
    title: 'Javascript Avanzado',
    editorial: 'Code Master',
    dateCreated: '2022-08-25',
    price: 45.0,
    stock: 10,
    category: 'Tecnología',
    authors: ['Luis Ramírez', 'Marta Sánchez', 'David Torres']
  },
  {
    id: 7,
    isbn: '978-9-876543-21-0',
    title: 'El universo en una cáscara de nuez',
    editorial: 'Ciencia Viva',
    dateCreated: '2019-04-14',
    price: 30.5,
    stock: 7,
    category: 'Ciencia',
    authors: ['Stephen Hawking', 'Natalia Ortega', 'Raúl Jiménez']
  },
  {
    id: 8,
    isbn: '978-0-998877-66-5',
    title: 'Don Quijote de la Mancha',
    editorial: 'Real Academia',
    dateCreated: '2017-09-30',
    price: 39.95,
    stock: 18,
    category: 'Clásicos',
    authors: ['Miguel de Cervantes', 'Pedro Alarcón', 'Marina Silva']
  },
  {
    id: 9,
    isbn: '978-0-445566-77-8',
    title: 'Data Science desde cero',
    editorial: 'O\'Reilly',
    dateCreated: '2023-02-11',
    price: 59.99,
    stock: 6,
    category: 'Tecnología',
    authors: ['Joel Grus', 'Isabel Domínguez', 'Carlos Medina']
  },
  {
    id: 10,
    isbn: '978-2-334455-66-7',
    title: 'El código Da Vinci',
    editorial: 'Umbriel',
    dateCreated: '2003-06-05',
    price: 22.0,
    stock: 9,
    category: 'Novela',
    authors: ['Dan Brown', 'Laura Martínez', 'Andrés Vega']
  }
];
