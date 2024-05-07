import { Component, OnInit } from '@angular/core';

import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import * as XLSX from 'xlsx';
@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  account: Account | null = null;
  ExcelData:any;
  constructor(private accountService: AccountService, private loginService: LoginService) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.account = account));
  }

  login(): void {
    this.loginService.login();
  }
  ReadExcel(event: any): void {
    this.ExcelData = [];
    const file = event.target!.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = e => {
      const workBook = XLSX.read(fileReader.result, { type: 'binary' });
      const sheetNames = workBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(workBook.Sheets[sheetNames[0]], {
        header: ['id', 'idLoi', 'sl', 'idPT', 'tenLoi', 'solo', 'namsx','ngayKT','tenSP','ngayTN'],
        defval: '',
      });
    };
    setTimeout(()=>{
      // this.ExcelData = this.ExcelData.filter(item=>)
      console.log("read file: ",this.ExcelData)
    },1000)
      }
    };
