import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ServicePerimetersServicePerimeter } from "../types/ServicePerimetersServicePerimeter";

export interface ServicePerimetersArgs {
  /*
The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  Parent?: string;

  /*
The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.
Structure is documented below.
*/
  ServicePerimeters?: Array<ServicePerimetersServicePerimeter>;
}
export class ServicePerimeters extends Resource {
  /*
The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  public Parent?: string;

  /*
The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.
Structure is documented below.
*/
  public ServicePerimeters?: Array<ServicePerimetersServicePerimeter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "ServicePerimeters",
        "The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The AccessPolicy this ServicePerimeter lives in.\nFormat: accessPolicies/{policy_id}\n\n\n- - -",
      ),
    ];
  }
}
