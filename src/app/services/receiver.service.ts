import { Injectable } from '@angular/core';
import Peer, { DataConnection } from 'peerjs';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../entity/message';
import { env } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class ReceiverService {
  private peer!: Peer ;
  private conn: DataConnection[] = [];
  public messages$ = new BehaviorSubject<Message[]>([]);
  private baseName = env.baseName;

  constructor() {

    this.peer = new Peer(this.baseName + 'receiver');

    this.peer.on('open', (id) => {
      console.log('My peer ID is: ' + id);
    });

    this.peer.on('connection', (conn) => {
      console.log('Connection received' + conn.peer);
      conn.on('data', (data) => {
        const messages = this.messages$.value;
        if(typeof data !== 'string') {
          data = JSON.stringify(data);
        }
        messages.push({from: conn.peer, message: data + '', time: new Date()});
        this.messages$.next(messages);
      });
      this.conn.push(conn);
    });
  }


}
