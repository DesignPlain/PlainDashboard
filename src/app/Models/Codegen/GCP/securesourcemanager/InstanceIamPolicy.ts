import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceIAMPolicyArgs {
  //
  Project?: string;

  //
  InstanceId?: string;

  //
  Location?: string;

  //
  PolicyData?: string;
}
export class InstanceIAMPolicy extends Resource {
  //
  public Etag?: string;

  //
  public InstanceId?: string;

  //
  public Location?: string;

  //
  public PolicyData?: string;

  //
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "InstanceId", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.String, "PolicyData", ""),
    ];
  }
}
