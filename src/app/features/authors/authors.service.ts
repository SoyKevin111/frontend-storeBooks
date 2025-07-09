import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/common/crud.service';
import { Author } from '../../shared/models/author.model';

const API_URL = 'http://localhost:3000/authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService extends CrudService<Author> {

  constructor() {
    super(API_URL)
  }
}
