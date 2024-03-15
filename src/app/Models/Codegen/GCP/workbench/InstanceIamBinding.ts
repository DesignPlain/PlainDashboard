import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceIAMBindingCondition } from "../types/InstanceIAMBindingCondition";

export interface InstanceIAMBindingArgs {
  //
  Role?: string;

  //
  Condition?: InstanceIAMBindingCondition;

  //
  Location?: string;

  //
  Members?: Array<string>;

  //
  Name?: string;

  //
  Project?: string;
}
export class InstanceIAMBinding extends Resource {
  //
  public Condition?: InstanceIAMBindingCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Members?: Array<string>;

  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
    ];
  }
}
