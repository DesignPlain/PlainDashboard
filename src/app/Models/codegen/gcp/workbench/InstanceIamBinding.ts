import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  workbench_InstanceIamBindingCondition,
  workbench_InstanceIamBindingCondition_GetTypes,
} from "../types/workbench_InstanceIamBindingCondition";

export interface InstanceIamBindingArgs {
  //
  location?: string;

  //
  members?: Array<string>;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: workbench_InstanceIamBindingCondition;
}
export class InstanceIamBinding extends DS_Resource {
  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: workbench_InstanceIamBindingCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public members?: Array<string>;

  //
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        () => workbench_InstanceIamBindingCondition_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
