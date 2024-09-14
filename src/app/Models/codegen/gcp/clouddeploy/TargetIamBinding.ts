import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  clouddeploy_TargetIamBindingCondition,
  clouddeploy_TargetIamBindingCondition_GetTypes,
} from "../types/clouddeploy_TargetIamBindingCondition";

export interface TargetIamBindingArgs {
  //
  project?: string;

  //
  role?: string;

  //
  condition?: clouddeploy_TargetIamBindingCondition;

  //
  location?: string;

  //
  members?: Array<string>;

  //
  name?: string;
}
export class TargetIamBinding extends DS_Resource {
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

  //
  public condition?: clouddeploy_TargetIamBindingCondition;

  //
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "name", "", () => [], false, true),
      new DynamicUIProps(
        InputType.String,
        "project",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => clouddeploy_TargetIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
