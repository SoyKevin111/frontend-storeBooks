
export interface MonthlySales {
	month: string;
	sales: number;
	booksSold: number;
}

export interface LowRotationBooks {
	isbn: string;
	title: string;
	authors: string[];
	sales: number;
	lastSold: string; //fecha
}

export interface BestSellersByCategory {
	isbn: string;
	title: string;
	authors: string[];
	editorial: string;
	price: number;
	category: string;
	bestSeller: boolean;
}

export interface BestSellers {
	title: string;
	category: string;
	sales: number;
}