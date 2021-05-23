export class TrainingModule {
  name: string;
  tool: string;
  theme: string;
  location: string;
  language: string;

  constructor(name: string, tool: string, theme: string, location: string, language: string) {
    this.name = name;
    this.tool = tool;
    this.theme = theme;
    this.location = location;
    this.language = language;
  }
}
