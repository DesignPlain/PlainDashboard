import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workbench_InstanceIamBindingCondition,
  workbench_InstanceIamBindingCondition_GetTypes,
} from "../types/workbench_InstanceIamBindingCondition";

export interface InstanceIamBindingArgs {
  //
  project?: string;

  //
  role?: string;

  //
  condition?: workbench_InstanceIamBindingCondition;

  //
  location?: string;

  //
  members?: Array<string>;

  //
  name?: string;
}
export class InstanceIamBinding extends Resource {
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
  public condition?: workbench_InstanceIamBindingCondition;

  //
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        workbench_InstanceIamBindingCondition_GetTypes(),
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
    ];
  }
}
