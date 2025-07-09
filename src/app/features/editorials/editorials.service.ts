import { Injectable } from '@angular/core';
import { CrudService } from '../../shared/common/crud.service';
import { Editorial } from '../../shared/models/editorial.model';

const API_URL = 'http://localhost:3000/editorials';

@Injectable({
  providedIn: 'root'
})
export class EditorialsService extends CrudService<Editorial> {

  constructor() {
    super(API_URL)
  }
}
