import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AiEndpointIamPolicyArgs {
  //
  Endpoint?: string;

  //
  Location?: string;

  //
  PolicyData?: string;

  //
  Project?: string;
}
export class AiEndpointIamPolicy extends Resource {
  //
  public Endpoint?: string;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public PolicyData?: string;

  //
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Endpoint", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.String, "PolicyData", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
    ];
  }
}
