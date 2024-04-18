import { Injectable } from '@angular/core';
import { Project } from '../_models/projects';
import { Tag } from '../_models/tags';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Sample Angular one ", summary: "Test Description", description: '', projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT], pictures: [''] },
    {id: 1, name: "Sample Angular two", summary: "Test Description", description: '', projectLink: '', tags: [Tag.JAVASCRIPT, Tag.TYPESCRIPT], pictures: [''] },
    {id: 2, name: "Sample Angular three", summary: "Test Description", description: '', projectLink: '', tags: [Tag.JAVA, Tag.TYPESCRIPT], pictures: [''] },
    {id: 3, name: "Sample Angular four", summary: "Test Description", description: '', projectLink: '', tags: [Tag.PYTHON, Tag.TYPESCRIPT], pictures: [''] },
    {id: 4, name: "Sample Angular last", summary: "Test Description", description: '', projectLink: '', tags: [Tag.PYTHON, Tag.TYPESCRIPT], pictures: [''] },
    ]
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project{
      let project = this.projects.find(project => project.id === id);

      if (project === undefined) {
        throw new TypeError('There is no project that matches the id: ' + id );
      }
      return project;
  }

  LastProject() : Project{

    return this.GetProjectById(this.projects.length - 1);
  }
}
