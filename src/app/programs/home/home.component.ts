import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { KininonawaService } from '../Service/kininonawa.service';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderBarComponent,
    BannerComponent,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  @Input() results: any;
  bookForm!: FormGroup;

  constructor(
    private service: KininonawaService,
    protected fb: FormBuilder,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.initialForm();

    let bean = {
      category1: 'QQPYTUQCVBZXzFEAQTQWOEPT=315SAFASASHWEUY2W46123-516SAVG',
    };
    this.service.getAllBooks(bean).subscribe((res: any) => {
      this.results = res;
    });
  }

  initialForm() {
    this.bookForm = this.fb.group({
      bookName: [null],
    });
  }

  onSave() {
    if(this.bookForm?.get("bookName")?.value && this.bookForm?.get("bookName")?.value.trim() > 0) {
      let bean = {
        ...this.bookForm?.getRawValue(),
      };
      this.service.addBook(bean).subscribe((res: any) => {
        if (res) {
          this.toastr.success('บันทึกสำเร็จ');
        } else {
          this.toastr.error('บันทึกไม่สำเร็จ');
        }
  
        this.ngOnInit();
      });
    } else {
      this.toastr.error('เพิ่มไม่สำเร็จ เนื่องจากไม่ได้ใส่ชื่อหนังสือ');
    }
    
  }

  deleteBook(data: any) {
 
    this.service.deleteBook(data).subscribe((res: any) => {
        this.toastr.success('ลบสำเร็จ');

      this.ngOnInit();
    });
  }
}
