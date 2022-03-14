import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  /*
  isLoading = new Subject<boolean>();

  constructor() {}

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
  }
  */
  loadingSub: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  /**
   * Contains in-progress loading requests
   */
  loadingMap: Map<string, boolean> = new Map<string, boolean>();
  /**
  Imposta il valore della proprietà loadingSub in base a quanto segue:
    * - Se il caricamento è true, aggiungi l'URL fornito a loadingMap con un valore true, imposta il valore loadingSub su true
    * - Se il caricamento è false, rimuovere la voce loadingMap e solo quando la mappa è vuota imposteremo loadingSub su false
    * @param loading {boolean}
   * @param url {string}
   */

  setLoading(loading: boolean, url: string): void {
    if (!url) {
      throw new Error(
        'The request URL must be provided to the LoadingService.setLoading function'
      );
    }
    if (loading === true) {
      this.loadingMap.set(url, loading);
      this.loadingSub.next(true);
    } else if (loading === false && this.loadingMap.has(url)) {
      this.loadingMap.delete(url);
    }
    if (this.loadingMap.size === 0) {
      this.loadingSub.next(false);
    }
  }
}
