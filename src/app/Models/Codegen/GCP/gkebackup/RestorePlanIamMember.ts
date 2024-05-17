import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_RestorePlanIamMemberCondition,
  Gkebackup_RestorePlanIamMemberCondition_GetTypes,
} from "../types/Gkebackup_RestorePlanIamMemberCondition";

export interface RestorePlanIamMemberArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Gkebackup_RestorePlanIamMemberCondition;

  // The region of the Restore Plan.
  Location?: string;

  //
  Member?: string;

  // The full name of the BackupPlan Resource.
  Name?: string;
}
export class RestorePlanIamMember extends Resource {
  //
  public Member?: string;

  // The full name of the BackupPlan Resource.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Gkebackup_RestorePlanIamMemberCondition;

  //
  public Etag?: string;

  // The region of the Restore Plan.
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full name of the BackupPlan Resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Gkebackup_RestorePlanIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The region of the Restore Plan.",
        [],
        false,
        true,
      ),
    ];
  }
}
