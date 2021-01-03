export interface Step {
  Header: string;
  Id: number;
  Status: Status;
}

export enum Status {
  Inactive,
  Active,
  Done
}