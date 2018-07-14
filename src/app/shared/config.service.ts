import {Member} from "./member.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfigService{

  darkSkyAPIKey:string;
  newsAPIKey:string;
  projectMembers: Member[];

  constructor(){
    this.darkSkyAPIKey = '';
    this.newsAPIKey = '';
    this.projectMembers = [];
  }

  addMember(name:string, role:string, info:string){
    this.projectMembers.push({'name': name, 'role': role, 'info': info});
  }

  deleteMember(index){
    this.projectMembers.splice(index, 1);
  }

}
