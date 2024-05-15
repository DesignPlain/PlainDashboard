import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_TargetIamBindingCondition,
  Clouddeploy_TargetIamBindingCondition_GetTypes,
} from "../types/Clouddeploy_TargetIamBindingCondition";

export interface TargetIamBindingArgs {
  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Clouddeploy_TargetIamBindingCondition;

  //
  Location?: string;

  //
  Members?: Array<string>;

  //
  Name?: string;
}
export class TargetIamBinding extends Resource {
  //
  public Condition?: Clouddeploy_TargetIamBindingCondition;

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
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Clouddeploy_TargetIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "Name", "", [], false, true),
    ];
  }
}
