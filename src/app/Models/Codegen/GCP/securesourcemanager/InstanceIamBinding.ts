import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceIAMBindingCondition } from "../types/InstanceIAMBindingCondition";

export interface InstanceIAMBindingArgs {
  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: InstanceIAMBindingCondition;

  //
  InstanceId?: string;

  //
  Location?: string;

  //
  Members?: Array<string>;
}
export class InstanceIAMBinding extends Resource {
  //
  public Etag?: string;

  //
  public InstanceId?: string;

  //
  public Location?: string;

  //
  public Members?: Array<string>;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: InstanceIAMBindingCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "InstanceId", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
    ];
  }
}
