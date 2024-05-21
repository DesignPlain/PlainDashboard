import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_TargetIamMemberCondition,
  clouddeploy_TargetIamMemberCondition_GetTypes,
} from "../types/clouddeploy_TargetIamMemberCondition";

export interface TargetIamMemberArgs {
  //
  condition?: clouddeploy_TargetIamMemberCondition;

  //
  location?: string;

  //
  member?: string;

  //
  name?: string;

  //
  project?: string;

  //
  role?: string;
}
export class TargetIamMember extends Resource {
  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: clouddeploy_TargetIamMemberCondition;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public member?: string;

  //
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        clouddeploy_TargetIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "name", "", [], false, true),
    ];
  }
}
