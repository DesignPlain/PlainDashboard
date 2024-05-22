import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_TargetIamBindingCondition,
  clouddeploy_TargetIamBindingCondition_GetTypes,
} from "../types/clouddeploy_TargetIamBindingCondition";

export interface TargetIamBindingArgs {
  //
  members?: Array<string>;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: clouddeploy_TargetIamBindingCondition;

  //
  location?: string;
}
export class TargetIamBinding extends Resource {
  //
  public condition?: clouddeploy_TargetIamBindingCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public members?: Array<string>;

  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        clouddeploy_TargetIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
