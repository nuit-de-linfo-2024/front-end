import { Injectable } from '@angular/core';
import { Result } from '../models/result.dto';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  resultData: Result[] = [];


  constructor() { 

    
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): string {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
