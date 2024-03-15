import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DeliveryPipelineIamPolicyArgs {
  //
  Project?: string;

  //
  Location?: string;

  //
  Name?: string;

  //
  PolicyData?: string;
}
export class DeliveryPipelineIamPolicy extends Resource {
  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Name?: string;

  //
  public PolicyData?: string;

  //
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.String, "Name", ""),
      new DynamicUIProps(InputType.String, "PolicyData", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
    ];
  }
}
