import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { RestorePlanIAMMemberCondition } from "../types/RestorePlanIAMMemberCondition";

export interface RestorePlanIAMMemberArgs {
  //
  Condition?: RestorePlanIAMMemberCondition;

  // The region of the Restore Plan.
  Location?: string;

  //
  Member?: string;

  // The full name of the BackupPlan Resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  //
  Role?: string;
}
export class RestorePlanIAMMember extends Resource {
  //
  public Etag?: string;

  // The region of the Restore Plan.
  public Location?: string;

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
  public Condition?: RestorePlanIAMMemberCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The region of the Restore Plan.",
      ),
      new DynamicUIProps(InputType.String, "Member", ""),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full name of the BackupPlan Resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(InputType.String, "Role", ""),
    ];
  }
}
