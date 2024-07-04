import { Injectable } from '@angular/core';
import Peer, { DataConnection } from 'peerjs';
import { env } from '../../env';

@Injectable({
  providedIn: 'root'
})
export class SenderService {
  private peer!: Peer ;
  private conn: DataConnection[] = [];
  private baseName = env.baseName;
  constructor() {
  }

  connect(id: string) {
    this.peer = new Peer(this.baseName + id);

    this.peer.on('open', () => {

      const conn = this.peer.connect(this.baseName + 'receiver');
      conn.on('open', () => {
        this.conn.push(conn);
      });
    });
  }

  async send(message: string) {
    this.conn.forEach((conn) => {
      conn.send(message);
    });
  }

}
