import { Component, OnInit } from '@angular/core';

import { StarWarsApiService } from './services/star-wars-api/star-wars-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'decorator-modify-response';

  constructor(private starWarsApiService: StarWarsApiService) {}

  public ngOnInit(): void {
    const darthVaderId = 4;
    this.starWarsApiService.getHero(darthVaderId).subscribe(console.log);
  }
}
