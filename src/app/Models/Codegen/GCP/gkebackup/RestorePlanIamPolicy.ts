import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RestorePlanIamPolicyArgs {
  //
  PolicyData?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the Restore Plan.
  Location?: string;

  // The full name of the BackupPlan Resource.
  Name?: string;
}
export class RestorePlanIamPolicy extends Resource {
  // The full name of the BackupPlan Resource.
  public Name?: string;

  //
  public PolicyData?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  //
  public Etag?: string;

  // The region of the Restore Plan.
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "PolicyData", ""),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The region of the Restore Plan.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full name of the BackupPlan Resource.",
      ),
    ];
  }
}