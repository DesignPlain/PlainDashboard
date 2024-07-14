import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface IngressPolicyArgs {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  ingressPolicyName?: string;

  // A GCP resource that is inside of the service perimeter.
  resource?: string;
}
export class IngressPolicy extends Resource {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public ingressPolicyName?: string;

  // A GCP resource that is inside of the service perimeter.
  public resource?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ingressPolicyName",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resource",
        "A GCP resource that is inside of the service perimeter.",
        [],
        true,
        true,
      ),
    ];
  }
}
