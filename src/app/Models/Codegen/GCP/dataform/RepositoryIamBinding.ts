import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RepositoryIAMBindingCondition } from "../types/RepositoryIAMBindingCondition";

export interface RepositoryIAMBindingArgs {
  //
  Role?: string;

  //
  Condition?: RepositoryIAMBindingCondition;

  //
  Members?: Array<string>;

  //
  Project?: string;

  //
  Region?: string;

  //
  Repository?: string;
}
export class RepositoryIAMBinding extends Resource {
  //
  public Condition?: RepositoryIAMBindingCondition;

  //
  public Etag?: string;

  //
  public Members?: Array<string>;

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
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Region", ""),
      new DynamicUIProps(InputType.String, "Repository", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
    ];
  }
}
