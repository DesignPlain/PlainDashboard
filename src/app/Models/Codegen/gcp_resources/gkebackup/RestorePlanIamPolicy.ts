import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RestorePlanIamPolicyArgs {
  // The region of the Restore Plan.
  location?: string;

  // The full name of the BackupPlan Resource.
  name?: string;

  //
  policyData?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class RestorePlanIamPolicy extends Resource {
  // The full name of the BackupPlan Resource.
  public name?: string;

  //
  public policyData?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  //
  public etag?: string;

  // The region of the Restore Plan.
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "The region of the Restore Plan.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The full name of the BackupPlan Resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "policyData", "", [], true, false),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
