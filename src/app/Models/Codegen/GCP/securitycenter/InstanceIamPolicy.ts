import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceIAMPolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The region of the Data Fusion instance.
  Region?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  Name?: string;

  //
  PolicyData?: string;
}
export class InstanceIAMPolicy extends Resource {
  //
  public Etag?: string;

  // The ID of the instance or a fully qualified identifier for the instance.
  public Name?: string;

  //
  public PolicyData?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The region of the Data Fusion instance.
  public Region?: string;

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
        "Region",
        "The region of the Data Fusion instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the instance or a fully qualified identifier for the instance.",
      ),
    ];
  }
}
