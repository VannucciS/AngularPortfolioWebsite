import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  latestProject = {} as Project;



  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Vannucci - Home');
  }
  ngOnInit(): void {
    this.latestProject = this.projectService.LastProject();
  }

}
