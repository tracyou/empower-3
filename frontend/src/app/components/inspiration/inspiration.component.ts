import {Component, Input, OnInit} from '@angular/core';
import {TrainingModuleService} from '../../services/training-module.service';
import {TrainingModule} from '../../models/training-module';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-inspiration',
  templateUrl: './inspiration.component.html',
  styleUrls: ['./inspiration.component.css']
})
export class InspirationComponent implements OnInit {
  @Input() tool;
  @Input() theme;
  @Input() location;
  @Input() language;
  modules: TrainingModule[];

  constructor(private moduleService: TrainingModuleService) {
  }

  ngOnInit(): void {
    this.modules = this.moduleService.modules;
    console.log(this.modules);
  }

  onFilter(): void {
    this.filter();
    console.log(this.modules);
  }

  filter(): Subscription {
      return this.moduleService.getRestModulesFilter(this.tool, this.theme, this.location, this.language)
        .subscribe(data => {
          this.modules.splice(0);
          this.modules.push(...data);
        });
  }
}
