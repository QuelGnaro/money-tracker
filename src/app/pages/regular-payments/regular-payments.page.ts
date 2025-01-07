import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-regular-payments',
  templateUrl: './regular-payments.page.html',
  styleUrls: ['./regular-payments.page.scss'],
})
export class RegularPaymentsPage implements OnInit {

  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  payments = [
    { name: 'Netflix', amount: 10.99, date: '2021-10-01', id: 1 },
    { name: 'Netflix', amount: 10.99, date: '2021-10-01', id: 1 },
    { name: 'Netflix', amount: 10.99, date: '2021-10-01', id: 1 },
    { name: 'Netflix', amount: 10.99, date: '2021-10-01', id: 1 },

  ];

  constructor(
    private navCtrk: NavController,
    private paymentsService: PaymentsService
  ) { }



  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  goToNewPayment() {
    this.navCtrk.navigateForward('regular-payments/new-payment');
  }

  deletePayment(id: number) { }

  paymentDetails(id: number) {
    this.navCtrk.navigateForward(`regular-payments/update-payment/${id}`);
  }


  onToggleNotifications(event: any) {
    console.log('Toggle changed:', event.detail.checked);
  }

  // todo: implementare la funzione per abilitare e disabilitare le notifiche cercare cosa installare 
  // // Funzione chiamata quando il toggle cambia stato
  // async onToggleNotifications(event: any) {
  //   if (event.detail.checked) {
  //     this.enableNotifications();
  //   } else {
  //     this.disableNotifications();
  //   }
  // }

  // // Abilita le notifiche
  // async enableNotifications() {
  //   try {
  //     // Richiedi permessi
  //     const permission = await PushNotifications.requestPermissions();
  //     if (permission.receive === 'granted') {
  //       // Registra il dispositivo
  //       PushNotifications.register();

  //       // Ascolta il token del dispositivo
  //       PushNotifications.addListener('registration', (token: Token) => {
  //         console.log('Device token:', token.value);
  //         // Invia il token al server, se necessario
  //       });

  //       // Ascolta notifiche ricevute
  //       PushNotifications.addListener('pushNotificationReceived', (notification) => {
  //         console.log('Push notification received:', notification);
  //       });
  //     } else {
  //       console.error('Permessi per le notifiche non concessi.');
  //     }
  //   } catch (error) {
  //     console.error('Errore durante l’attivazione delle notifiche:', error);
  //   }
  // }

  // // Disabilita le notifiche
  // async disableNotifications() {
  //   try {
  //     // Questo esempio usa Local Notifications per notifiche non inviate dal server
  //     console.log('Notifiche disabilitate.');
  //     // Puoi aggiungere logica per disattivare notifiche lato server, se necessario.
  //   } catch (error) {
  //     console.error('Errore durante la disattivazione delle notifiche:', error);
  //   }
  // }
}
