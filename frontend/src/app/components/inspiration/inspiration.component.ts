import {Component, Input, OnInit} from '@angular/core';
import {TrainingModuleService} from '../../services/training-module.service';
import {TrainingModule} from '../../models/training-module';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

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

  constructor(private moduleService: TrainingModuleService, private router: Router) {
  }

  ngOnInit(): void {
    this.router.navigate(['/inspiration']);
    this.modules = this.moduleService.modules;
    console.log(this.modules);
  }

  onFilter(): void {
    this.filter();
    console.log(this.modules);
  }

  filter(): Subscription {
    if (this.tool) {
      return this.moduleService.getRestModulesTool(this.tool)
        .subscribe(data => {
          this.modules.splice(0);
          this.modules.push(...data);
          this.router.navigate(['/inspiration'], {queryParams: {tool: this.tool}});
        });
    }

    if (this.theme) {
      return this.moduleService.getRestModulesTheme(this.theme)
        .subscribe(data => {
          this.modules.splice(0);
          this.modules.push(...data);
          this.router.navigate(['/inspiration'], {queryParams: {theme: this.theme}});
        });
    }

    if (this.location) {
      return this.moduleService.getRestModulesLocation(this.location)
        .subscribe(data => {
          this.modules.splice(0);
          this.modules.push(...data);
          this.router.navigate(['/inspiration'], {queryParams: {location: this.location}});
        });
    }

    if (this.language) {
      return this.moduleService.getRestModulesLanguage(this.language)
        .subscribe(data => {
          this.modules.splice(0);
          this.modules.push(...data);
          this.router.navigate(['/inspiration'], {queryParams: {language: this.language}});
        });
    }
  }
}
