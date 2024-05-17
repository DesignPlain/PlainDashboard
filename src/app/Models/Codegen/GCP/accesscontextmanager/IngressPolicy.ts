import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IngressPolicyArgs {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  IngressPolicyName?: string;

  // A GCP resource that is inside of the service perimeter.
  Resource?: string;
}
export class IngressPolicy extends Resource {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public IngressPolicyName?: string;

  // A GCP resource that is inside of the service perimeter.
  public Resource?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "IngressPolicyName",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Resource",
        "A GCP resource that is inside of the service perimeter.",
        [],
        true,
        true,
      ),
    ];
  }
}
