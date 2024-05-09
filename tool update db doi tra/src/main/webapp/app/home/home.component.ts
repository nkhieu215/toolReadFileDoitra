import { Component, OnInit } from '@angular/core';

import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import * as XLSX from 'xlsx';
import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  resourceUrl = this.applicationConfigService.getEndpointFor('api/insert');
  resourceUrl1 = this.applicationConfigService.getEndpointFor('api/insertdetail');
  account: Account | null = null;
  ExcelData:any;
  id=1;
  idDetail=1;
  one=true;
  two=false;
  list: any[] = []
  listDetail: any[] = []
  fileName = 'test'
  constructor(private accountService: AccountService, private loginService: LoginService,
    protected applicationConfigService: ApplicationConfigService,
    protected http:HttpClient
  ) {}

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
        header: ['id', 'idLoi', 'sl', 'idPT', 'tenLoi', 'solo', 'namsx','ngayKT','tenSP','ngayTN','idsppl','idspplNew','nvpt'],
        defval: '',
      });
    };
    setTimeout(()=>{
      this.ExcelData = this.ExcelData.filter((item:any)=>item.id !== 'id')
      console.log("read file: ",this.ExcelData)
    },1000)
      }
    insertDB():void{
      this.one=false;
      this.two = true;
      for(let j=0;j<this.ExcelData.length;j++){
        for(let i = 0;i<this.ExcelData[j].sl;i++){
          const item = {id:this.id,
                        stt:i+1,
                        tenNhanVienPhanTich:this.ExcelData[j].nvpt,
                        theLoaiPhanTich:'Lot',
                        lotNumber:this.ExcelData[j].solo,
                        soLuong:1,
                        username:'admin',
                        namSanXuat:2024,
                        trangThai:'true',
                        phanLoaiId:this.ExcelData[j].idspplNew,
                        idLoi:this.ExcelData[j].idLoi,
                        tenLoi:this.ExcelData[j].tenLoi
                      }
          this.list.push(item);
          this.id++;
        }
      }
        // for(let i = 0;i<this.ExcelData[0].sl;i++){
        //   const item = {id:this.id,
        //                 stt:i+1,
        //                 tenNhanVienPhanTich:this.ExcelData[0].nvpt,
        //                 theLoaiPhanTich:'Lot',
        //                 lotNumber:this.ExcelData[0].solo,
        //                 soLuong:1,
        //                 username:'admin',
        //                 namSanXuat:2024,
        //                 trangThai:'true',
        //                 phanLoaiId:this.ExcelData[0].idspplNew}
        //                 this.list.push(item);
        //                 this.id++;
        //               }
                      // console.log("lisst:",this.list)
                      // this.http.post<any>(this.resourceUrl,this.list).subscribe();
    }
    insertChiTietLoi():void{
      for(let i =0 ;i<this.list.length;i++){
        const list:any[] =[]
        for(let j =1;j<= 39;j++){
          if(j === this.list[i].idLoi){
            const item ={
              id:this.idDetail,
              soLuong:1,
              username:'admin',
              idLoi:j,
              phanTichId:this.list[i].id
            }
            list.push(item);
            this.idDetail++
          }else{
            const item ={
              id:this.idDetail,
              soLuong:0,
              username:'admin',
              idLoi:j,
              phanTichId:this.list[i].id
            }
            list.push(item);
            this.idDetail++
          }
        }
        this.http.post<any>(this.resourceUrl1,list).subscribe()
      }        // const data = document.getElementById("table-data");
        // const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(list);
      // // create workbook
      // const wb: XLSX.WorkBook = XLSX.utils.book_new();
      // XLSX.utils.book_append_sheet(wb, ws, 'ChiTietSanXuatHangNgay');
      // XLSX.writeFile(wb, `${this.fileName}.xlsx`);
    }
    // exportToExcel(): void {
    //   // const data = document.getElementById("table-data");
    //   const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    //   // create workbook
    //   const wb: XLSX.WorkBook = XLSX.utils.book_new();
    //   XLSX.utils.book_append_sheet(wb, ws, 'ChiTietSanXuatHangNgay');
    //   XLSX.writeFile(wb, `${this.fileName}.xlsx`);
    // }
    //  ExcelDateToJSDate(date:any):Date {
    //   let timee = new Date(Math.round((date - 25569)*86400*1000));
    //   timee = ((timee.getMonth() > 8) ? (timee.getMonth() + 1) : ('0' + (timee.getMonth() + 1))) + '/' + ((timee.getDate() > 9) ? timee.getDate() : ('0' + timee.getDate())) + '/' + timee.getFullYear();
    //   return timee;
    // }
    };
