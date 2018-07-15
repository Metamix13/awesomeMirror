import {Member} from "./member.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfigService {

  darkSkyAPIKey: string; // API Key for weather feature
  newsAPIKey: string; // API Key for news feature
  projectMembers: Member[]; //Array of project members for about page

  constructor() {
    //Init attributes with default values
    this.darkSkyAPIKey = '';
    this.newsAPIKey = '';
    this.projectMembers = [];
  }

  /*
    Add member to project member array
   */
  addMember(name: string, role: string, info: string) {
    this.projectMembers.push({'name': name, 'role': role, 'info': info});
  }

  /*
    Delete member from project member array
   */
  deleteMember(index) {
    this.projectMembers.splice(index, 1);
  }

}
