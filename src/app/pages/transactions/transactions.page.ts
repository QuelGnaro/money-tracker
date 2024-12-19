import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }


  // TODO: searchList filtra la lista della transazioni
  searchList() { }

  //TODO: downloadXML scarica la lista delle transazioni in formato XML
  downloadXML() { }

  navigateBack() {
    this.router.navigate(['/dashboard']);
  }
}
