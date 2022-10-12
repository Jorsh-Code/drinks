import { Component, OnInit,Inject  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DrinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public apiService: ApiService
  ) { }

  ngOnInit(): void {
   
  }

}
