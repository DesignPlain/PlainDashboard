import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_TargetIamMemberCondition,
  clouddeploy_TargetIamMemberCondition_GetTypes,
} from "../types/clouddeploy_TargetIamMemberCondition";

export interface TargetIamMemberArgs {
  //
  project?: string;

  //
  role?: string;

  //
  condition?: clouddeploy_TargetIamMemberCondition;

  //
  location?: string;

  //
  member?: string;

  //
  name?: string;
}
export class TargetIamMember extends Resource {
  //
  public location?: string;

  //
  public member?: string;

  //
  public name?: string;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: clouddeploy_TargetIamMemberCondition;

  //
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
    ];
  }
}
