import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { DefaultService } from 'src/app/services/default.service';

@Component({
  selector: 'app-debounce-http-request',
  templateUrl: './debounce-http-request.component.html',
  styleUrls: ['./debounce-http-request.component.css'],
})
export class DebounceHttpRequestComponent implements OnInit {
  query = new FormControl('');
  list: any;

  constructor(private ds: DefaultService) {}

  ngOnInit(): void {
    this.query.valueChanges.pipe(debounceTime(500)).subscribe((value) => {
      if (!value) {
        console.log("NO VALUE, DIDN'T MADE A REQUEST");
      } else {
        this.ds.autocomplete(value).subscribe((data) => {
          const URL = `https://www.reddit.com/subreddits/search.json?q=${value}`;

          if (this.ds.cache.get(URL)) {
            this.list = data.data.children.map(
              (child: any) => child.data.display_name
            );
            console.log('Cached Data', this.list);
          } else {
            this.ds.cache.set(URL, data);
            this.list = data.data.children.map(
              (child: any) => child.data.display_name
            );
            console.log('New Request Data', this.list);
          }
        });
      }
    });
  }
}
