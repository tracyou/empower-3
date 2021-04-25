export class Authority {
  devolopmentGoals: string;
  parisAgreement: string;
  structure: string;
  toolName: string;
  toolLabel: string;
  toolDescription: string;
  support: string;

  constructor(devolopmentGoals: string, parisAgreement: string, structure: string, toolName: string, toolLabel: string,
              toolDescription: string, support: string) {
    this.devolopmentGoals = devolopmentGoals;
    this.parisAgreement = parisAgreement;
    this.structure = structure;
    this.toolName = toolName;
    this.toolLabel = toolLabel;
    this.toolDescription = toolDescription;
    this.support = support;
  }
}
