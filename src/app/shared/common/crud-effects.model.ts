import { Observable } from "rxjs";


export interface CrudService<T> {
	findAll: () => Observable<T[]>;
	create: (item: T) => Observable<T>;
	update: (item: T, id: number) => Observable<T>;
	delete: (id: number) => Observable<void>;
}

export interface CrudActions<T> {
	load: any;
	loadSucess: (payload: {
		items: T[]
	}) => any;

	create: any;
	createSuccess: (payload: {
		newItem: T
	}) => any;

	edit: any;
	editSuccess: (payload: {
		editedItem: T
	}) => any;

	delete: any;
	deleteSuccess: (payload: {
		id: number
	}) => any;

}