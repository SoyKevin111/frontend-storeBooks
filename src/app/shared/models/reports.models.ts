
export interface MonthlySales { 
	month: string;
	sales: number; //ventas
	booksSold: number; //libros vendidos
}

export interface LowRotationBooks {
	isbn: string;
	title: string;
	authors: string[];
	sales: number;
	lastSold: string; //fecha: relacion Item -> Libro --- <3
}

export interface BestSellersByCategory {
	isbn: string; //clase libro
	title: string; //clase libro
	authors: string[]; //clase author
	editorial: string; //clase editorial
	price: number; //clase libro
	sales:number;
	category: string; // clase libro
	bestSeller: boolean; //clase libro
}

export interface BestSellers {
	title: string;
	category: string;
	sales: number;
}