import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/projects';
import { Tag } from '../_models/tags';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  
  typescript: boolean = false;
  angular: boolean = false;
  python: boolean = false;
  java: boolean = false;
  android: boolean = false;
  javascript: boolean = false;
  laravel: boolean = false;

  filtering: boolean = false;
  
  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Vannucci - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];
      
    if (this.typescript) {
        filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if (this.java) {
      filterTags.push(Tag.JAVA);
    }
    if (this.android) {
      filterTags.push(Tag.ANDROID);
    }
    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if (this.laravel) {
      filterTags.push(Tag.LARAVEL);
    }

    if(this.python || this.android || this.angular || this.java || this.javascript || this.typescript) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

ResetFilters() {
  this.typescript = false;
  this.angular = false;
  this.python = false;
  this.java = false;
  this.android = false;
  this.javascript = false;
  this.laravel = false;
  this.filtering = false;

  this.projects = this.projectService.GetProjects();
}


}
