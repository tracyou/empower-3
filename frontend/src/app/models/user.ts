export class User {
  username: string;
  password: string;
  userType: string;
  title: string;
  description: string;

  constructor(username: string, password: string, userType: string, title: string, description: string) {
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.title = title;
    this.description = description;
  }
}
