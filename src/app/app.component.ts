import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KininonawaService } from './programs/Service/kininonawa.service';
import { HomeComponent } from './programs/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , HomeComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kininonawa-ui';
  a!: string;

  constructor(
    private service : KininonawaService
  ) {
    let bean = {
      category1 : "QQPYTUQCVBZXzFEAQTQWOEPT=315SAFASASHWEUY2W46123-516SAVG"
    }
    this.service.getAllBooks(bean).subscribe((res : any) => {
      this.a = res.bookName;
    });

    let bean1 = {
      bookRef : "b2def9f5-f6ea-4982-b95e-fbb919c77ae9"
    }
    this.service.getBookById(bean1).subscribe((res : any) => {
      console.log(res);
    });
  }





}
