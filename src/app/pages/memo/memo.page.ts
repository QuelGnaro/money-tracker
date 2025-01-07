import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MemosService } from 'src/app/services/memos.service';

@Component({
  selector: 'app-memo',
  templateUrl: './memo.page.html',
  styleUrls: ['./memo.page.scss'],
})
export class MemoPage implements OnInit {

  memos: any[] = [
    { name: 'Memo 1', description: 'Description 1', date: '2021-09-01', id: 1 },
  ];

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);


  constructor(
    private navCtrk: NavController,
    private memosService: MemosService
  ) { }


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  goToNewMemo() {
    this.navCtrk.navigateForward('memos/new-memo');
  }

  deletememo(id: number) {

  }

  memoDetails(id: number) {
    this.navCtrk.navigateForward(`memos/update-memo/${id}`);
  }

  deleteMemo(id: number) { }


  onToggleNotifications(event: any) {
    console.log('Toggle changed:', event.detail.checked);
  }

}
