import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RepositoryIAMMemberCondition } from "../types/RepositoryIAMMemberCondition";

export interface RepositoryIAMMemberArgs {
  //
  Condition?: RepositoryIAMMemberCondition;

  //
  Member?: string;

  //
  Project?: string;

  //
  Region?: string;

  //
  Repository?: string;

  //
  Role?: string;
}
export class RepositoryIAMMember extends Resource {
  //
  public Condition?: RepositoryIAMMemberCondition;

  //
  public Etag?: string;

  //
  public Member?: string;

  //
  public Project?: string;

  //
  public Region?: string;

  //
  public Repository?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Region", ""),
      new DynamicUIProps(InputType.String, "Repository", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
    ];
  }
}
