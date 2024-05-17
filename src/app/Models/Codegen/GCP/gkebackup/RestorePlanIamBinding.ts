import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_RestorePlanIamBindingCondition,
  Gkebackup_RestorePlanIamBindingCondition_GetTypes,
} from "../types/Gkebackup_RestorePlanIamBindingCondition";

export interface RestorePlanIamBindingArgs {
  //
  Members?: Array<string>;

  // The full name of the BackupPlan Resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Gkebackup_RestorePlanIamBindingCondition;

  // The region of the Restore Plan.
  Location?: string;
}
export class RestorePlanIamBinding extends Resource {
  // The region of the Restore Plan.
  public Location?: string;

  //
  public Members?: Array<string>;

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
  public Condition?: Gkebackup_RestorePlanIamBindingCondition;

  //
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
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
        Gkebackup_RestorePlanIamBindingCondition_GetTypes(),
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
