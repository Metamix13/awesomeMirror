/*
  Member class for project members of the about page.
    Name: Project member name
    Role: Role in this project (For example: Developer or Examiner
    Info: Additional Information (For example: Workplace)
 */

export class Member {
  public name: string;
  public role: string;
  public info: string;

  constructor(name: string, role: string, info: string){
    //Init attributes with default values
    this.name = name;
    this.role = role;
    this.info = info;
  }
}
