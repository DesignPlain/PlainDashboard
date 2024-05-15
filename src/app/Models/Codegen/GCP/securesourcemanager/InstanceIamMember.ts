import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securesourcemanager_InstanceIamMemberCondition,
  Securesourcemanager_InstanceIamMemberCondition_GetTypes,
} from "../types/Securesourcemanager_InstanceIamMemberCondition";

export interface InstanceIamMemberArgs {
  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Securesourcemanager_InstanceIamMemberCondition;

  //
  InstanceId?: string;

  //
  Location?: string;

  //
  Member?: string;
}
export class InstanceIamMember extends Resource {
  //
  public InstanceId?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Securesourcemanager_InstanceIamMemberCondition;

  //
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Securesourcemanager_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "InstanceId", "", [], true, true),
    ];
  }
}
