import { Component } from '@angular/core';
import { DataService } from 'src/shared/services/data.service';
import { DirectoryModel, fileModel } from 'src/shared/models/directoryModel';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dirData: DirectoryModel[];
  public fileList: fileModel[];
  public isSelected = false ;
  subscriber = true;
  constructor(private directory: DataService){
  }
  ngOnInit(){
    this.pageInit();
  }

  ngOnDestroy(){
    this.subscriber=false;
  }

  pageInit(){
    this.directory.getDirectory().pipe(takeWhile(() => this.subscriber)).subscribe(results => {
      this.dirData = results.directory;
    });
  }

  onChange(event) {
    this.isSelected = true;
    var x = this.dirData.filter(function(x){
      return x.id == event
    });
    this.fileList = x[0].fileObj;
  }
}
