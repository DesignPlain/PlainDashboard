import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workbench_InstanceIamMemberCondition,
  workbench_InstanceIamMemberCondition_GetTypes,
} from "../types/workbench_InstanceIamMemberCondition";

export interface InstanceIamMemberArgs {
  //
  role?: string;

  //
  condition?: workbench_InstanceIamMemberCondition;

  //
  location?: string;

  //
  member?: string;

  //
  name?: string;

  //
  project?: string;
}
export class InstanceIamMember extends Resource {
  //
  public member?: string;

  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: workbench_InstanceIamMemberCondition;

  //
  public etag?: string;

  //
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        workbench_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
