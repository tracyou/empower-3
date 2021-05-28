enum UserType {
  Initiative = 'Initiative',
  Authority = 'Authority',
}

export class User {
  username: string;
  password: string;
  userType: UserType;
  title: string;
  description: string;

  constructor(username: string, password: string, userType: UserType, title: string, description: string) {
    this.username = username;
    this.password = password;
    this.userType = userType;
    this.title = title;
    this.description = description;
  }
}
