import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securesourcemanager_InstanceIamMemberCondition,
  securesourcemanager_InstanceIamMemberCondition_GetTypes,
} from "../types/securesourcemanager_InstanceIamMemberCondition";

export interface InstanceIamMemberArgs {
  //
  role?: string;

  //
  condition?: securesourcemanager_InstanceIamMemberCondition;

  //
  instanceId?: string;

  //
  location?: string;

  //
  member?: string;

  //
  project?: string;
}
export class InstanceIamMember extends Resource {
  //
  public condition?: securesourcemanager_InstanceIamMemberCondition;

  //
  public etag?: string;

  //
  public instanceId?: string;

  //
  public location?: string;

  //
  public member?: string;

  //
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        securesourcemanager_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "instanceId", "", [], true, true),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
    ];
  }
}
