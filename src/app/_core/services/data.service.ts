import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
    items = [];
  
    constructor(
      private http: HttpClient
    ) {}

    getBrands() {
      return this.http.get('../../assets/data/brand.json');
      }
    getVideos() {
      return this.http.get('../../assets/data/videos.json');
    }
    getInstagram(username) {
      return this.http.get(`https://www.instagram.com/${username}/?__a=1`);
    }  
  }