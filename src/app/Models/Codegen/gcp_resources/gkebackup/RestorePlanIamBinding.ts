import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkebackup_RestorePlanIamBindingCondition,
  gkebackup_RestorePlanIamBindingCondition_GetTypes,
} from "../types/gkebackup_RestorePlanIamBindingCondition";

export interface RestorePlanIamBindingArgs {
  //
  members?: Array<string>;

  // The full name of the BackupPlan Resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  //
  role?: string;

  //
  condition?: gkebackup_RestorePlanIamBindingCondition;

  // The region of the Restore Plan.
  location?: string;
}
export class RestorePlanIamBinding extends Resource {
  //
  public condition?: gkebackup_RestorePlanIamBindingCondition;

  //
  public etag?: string;

  // The region of the Restore Plan.
  public location?: string;

  //
  public members?: Array<string>;

  // The full name of the BackupPlan Resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The full name of the BackupPlan Resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        gkebackup_RestorePlanIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The region of the Restore Plan.",
        [],
        false,
        true,
      ),
    ];
  }
}
