import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Editorial } from '../models/editorial.model';

export const MOCK_BOOKS: Book[] = [
  {
    id: 1,
    isbn: '978-0-123456-47-2',
    title: 'El arte de programar',
    editorial: {
      id: 1,
      name: 'TechBooks',
      phone: '123-456-7890',
      website: 'https://techbooks.com',
      email: 'contact@techbooks.com',
      state: 'Active'
    },
    dateCreated: '2023-01-15',
    price: 49.99,
    stock: 12,
    category: 'Tecnología',
    authors: [
      { id: 1, name: 'Carlos', lastName: 'López', identityNumber: '12345678A', email: 'carlos@correo.com', state: 'Active' },
      { id: 2, name: 'Ana', lastName: 'Torres', identityNumber: '87654321B', email: 'ana@correo.com', state: 'Active' },
      { id: 3, name: 'Javier', lastName: 'Méndez', identityNumber: '11223344C', email: 'javier@correo.com', state: 'Active' }
    ]
  },
  {
    id: 2,
    isbn: '978-1-234567-89-0',
    title: 'Domina Angular',
    editorial: {
      id: 2,
      name: 'CodeMaster',
      phone: '321-654-0987',
      website: 'https://codemaster.dev',
      email: 'info@codemaster.dev',
      state: 'Active'
    },
    dateCreated: '2023-03-20',
    price: 39.99,
    stock: 8,
    category: 'Programación',
    authors: [
      { id: 4, name: 'Lucía', lastName: 'Díaz', identityNumber: '22334455D', email: 'lucia@correo.com', state: 'Active' },
      { id: 5, name: 'Pedro', lastName: 'Núñez', identityNumber: '33445566E', email: 'pedro@correo.com', state: 'Active' },
      { id: 6, name: 'Martín', lastName: 'Rivas', identityNumber: '44556677F', email: 'martin@correo.com', state: 'Active' }
    ]
  },
  {
    id: 3,
    isbn: '978-2-345678-90-1',
    title: 'UX para desarrolladores',
    editorial: {
      id: 3,
      name: 'DesignBooks',
      phone: '456-789-1234',
      website: 'https://designbooks.io',
      email: 'support@designbooks.io',
      state: 'Active'
    },
    dateCreated: '2023-05-10',
    price: 29.99,
    stock: 15,
    category: 'Diseño',
    authors: [
      { id: 7, name: 'Sofía', lastName: 'Herrera', identityNumber: '55667788G', email: 'sofia@correo.com', state: 'Active' },
      { id: 8, name: 'Daniel', lastName: 'Castro', identityNumber: '66778899H', email: 'daniel@correo.com', state: 'Active' },
      { id: 9, name: 'Laura', lastName: 'Gómez', identityNumber: '77889900I', email: 'laura@correo.com', state: 'Active' }
    ]
  },
  {
    id: 4,
    isbn: '978-3-456789-01-2',
    title: 'Inteligencia Artificial Hoy',
    editorial: {
      id: 4,
      name: 'AI Press',
      phone: '789-012-3456',
      website: 'https://aipress.org',
      email: 'ai@press.org',
      state: 'Active'
    },
    dateCreated: '2023-06-25',
    price: 59.99,
    stock: 10,
    category: 'IA',
    authors: [
      { id: 10, name: 'Andrés', lastName: 'Marín', identityNumber: '88990011J', email: 'andres@correo.com', state: 'Active' },
      { id: 11, name: 'Verónica', lastName: 'Salas', identityNumber: '99001122K', email: 'veronica@correo.com', state: 'Active' },
      { id: 12, name: 'Raúl', lastName: 'Ortega', identityNumber: '00112233L', email: 'raul@correo.com', state: 'Active' }
    ]
  },
  {
    id: 5,
    isbn: '978-4-567890-12-3',
    title: 'Fundamentos de Backend',
    editorial: {
      id: 5,
      name: 'TechBooks',
      phone: '123-456-7890',
      website: 'https://techbooks.com',
      email: 'contact@techbooks.com',
      state: 'Active'
    },
    dateCreated: '2023-08-12',
    price: 42.99,
    stock: 6,
    category: 'Programación',
    authors: [
      { id: 13, name: 'Camila', lastName: 'Ríos', identityNumber: '10293847M', email: 'camila@correo.com', state: 'Active' },
      { id: 14, name: 'Jorge', lastName: 'Pérez', identityNumber: '56473829N', email: 'jorge@correo.com', state: 'Active' },
      { id: 15, name: 'Esteban', lastName: 'Soto', identityNumber: '01928374O', email: 'esteban@correo.com', state: 'Active' }
    ]
  },
  {
    id: 6,
    isbn: '978-5-678901-23-4',
    title: 'Bases de datos modernas',
    editorial: {
      id: 6,
      name: 'DBWorld',
      phone: '789-654-3210',
      website: 'https://dbworld.net',
      email: 'info@dbworld.net',
      state: 'Active'
    },
    dateCreated: '2023-09-01',
    price: 34.99,
    stock: 14,
    category: 'Bases de Datos',
    authors: [
      { id: 16, name: 'Isabel', lastName: 'León', identityNumber: '88888888P', email: 'isabel@correo.com', state: 'Active' },
      { id: 17, name: 'Tomás', lastName: 'Vidal', identityNumber: '77777777Q', email: 'tomas@correo.com', state: 'Active' },
      { id: 18, name: 'Natalia', lastName: 'Castro', identityNumber: '66666666R', email: 'natalia@correo.com', state: 'Active' }
    ]
  },
  {
    id: 7,
    isbn: '978-6-789012-34-5',
    title: 'Aprende TypeScript',
    editorial: {
      id: 2,
      name: 'CodeMaster',
      phone: '321-654-0987',
      website: 'https://codemaster.dev',
      email: 'info@codemaster.dev',
      state: 'Active'
    },
    dateCreated: '2023-10-05',
    price: 27.5,
    stock: 11,
    category: 'Programación',
    authors: [
      { id: 19, name: 'Diego', lastName: 'Fuentes', identityNumber: '55555555S', email: 'diego@correo.com', state: 'Active' },
      { id: 20, name: 'Elena', lastName: 'Blanco', identityNumber: '44444444T', email: 'elena@correo.com', state: 'Active' },
      { id: 21, name: 'Luis', lastName: 'Vera', identityNumber: '33333333U', email: 'luis@correo.com', state: 'Active' }
    ]
  },
  {
    id: 8,
    isbn: '978-7-890123-45-6',
    title: 'Cloud Computing 101',
    editorial: {
      id: 7,
      name: 'CloudTech',
      phone: '456-123-7890',
      website: 'https://cloudtech.com',
      email: 'cloud@cloudtech.com',
      state: 'Active'
    },
    dateCreated: '2023-11-15',
    price: 44.0,
    stock: 9,
    category: 'Infraestructura',
    authors: [
      { id: 22, name: 'Patricia', lastName: 'Aguirre', identityNumber: '22222222V', email: 'patricia@correo.com', state: 'Active' },
      { id: 23, name: 'Manuel', lastName: 'Lara', identityNumber: '11111111W', email: 'manuel@correo.com', state: 'Active' },
      { id: 24, name: 'Iván', lastName: 'Delgado', identityNumber: '00000000X', email: 'ivan@correo.com', state: 'Active' }
    ]
  },
  {
    id: 9,
    isbn: '978-8-901234-56-7',
    title: 'Seguridad Informática Básica',
    editorial: {
      id: 8,
      name: 'SecureBooks',
      phone: '101-202-3030',
      website: 'https://securebooks.org',
      email: 'soporte@securebooks.org',
      state: 'Active'
    },
    dateCreated: '2024-01-10',
    price: 36.75,
    stock: 13,
    category: 'Seguridad',
    authors: [
      { id: 25, name: 'Gabriela', lastName: 'Mora', identityNumber: '99999999Y', email: 'gabriela@correo.com', state: 'Active' },
      { id: 26, name: 'Ricardo', lastName: 'Cárdenas', identityNumber: '88888888Z', email: 'ricardo@correo.com', state: 'Active' },
      { id: 27, name: 'Álvaro', lastName: 'Ruiz', identityNumber: '77777777A', email: 'alvaro@correo.com', state: 'Active' }
    ]
  },
  {
    id: 10,
    isbn: '978-9-012345-67-8',
    title: 'DevOps para equipos ágiles',
    editorial: {
      id: 9,
      name: 'AgilePress',
      phone: '999-888-7777',
      website: 'https://agilepress.io',
      email: 'contact@agilepress.io',
      state: 'Active'
    },
    dateCreated: '2024-02-28',
    price: 48.2,
    stock: 7,
    category: 'DevOps',
    authors: [
      { id: 28, name: 'Silvia', lastName: 'Navarro', identityNumber: '66666666B', email: 'silvia@correo.com', state: 'Active' },
      { id: 29, name: 'Héctor', lastName: 'Peña', identityNumber: '55555555C', email: 'hector@correo.com', state: 'Active' },
      { id: 30, name: 'Marta', lastName: 'Lozano', identityNumber: '44444444D', email: 'marta@correo.com', state: 'Active' }
    ]
  }
];
