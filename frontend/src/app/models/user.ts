export class User {
  id: number;
  username: string;
  password: string;
  userKind: string;
  title: string;
  description: string;

  constructor(id: number, username: string, password: string, userKind: string, title: string, description: string) {
    this.username = username;
    this.password = password;
    this.userKind = userKind;
    this.title = title;
    this.description = description;
  }

  public static createRandomUser(): User {
    return new User(0, 'winner101', 'hi1234', 'local authority', 'cool authority', 'we are very cool');
  }
}
