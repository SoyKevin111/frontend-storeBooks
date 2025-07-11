import { of } from "rxjs";

export function handleError(error: any, action: any) {
	const type = error?.error?.error || 'UNKNOWN_ERROR';
	const message = error?.error?.message || 'An unknown error occurred.';

	console.log(`${type}: ${message}`);

	return of(action({
		error: {
			type,
			message
		}
	}));
}

