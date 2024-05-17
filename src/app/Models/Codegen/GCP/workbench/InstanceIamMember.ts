import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workbench_InstanceIamMemberCondition,
  Workbench_InstanceIamMemberCondition_GetTypes,
} from "../types/Workbench_InstanceIamMemberCondition";

export interface InstanceIamMemberArgs {
  //
  Role?: string;

  //
  Condition?: Workbench_InstanceIamMemberCondition;

  //
  Location?: string;

  //
  Member?: string;

  //
  Name?: string;

  //
  Project?: string;
}
export class InstanceIamMember extends Resource {
  //
  public Name?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Workbench_InstanceIamMemberCondition;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Name", "", [], false, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Workbench_InstanceIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
    ];
  }
}
