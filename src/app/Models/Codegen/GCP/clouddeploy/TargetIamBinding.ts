import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TargetIAMBindingCondition } from "../types/TargetIAMBindingCondition";

export interface TargetIAMBindingArgs {
  //
  Members?: Array<string>;

  //
  Name?: string;

  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: TargetIAMBindingCondition;

  //
  Location?: string;
}
export class TargetIAMBinding extends Resource {
  //
  public Members?: Array<string>;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: TargetIAMBindingCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
    ];
  }
}
