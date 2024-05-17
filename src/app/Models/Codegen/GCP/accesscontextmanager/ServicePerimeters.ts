import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeter,
  Accesscontextmanager_ServicePerimetersServicePerimeter_GetTypes,
} from "../types/Accesscontextmanager_ServicePerimetersServicePerimeter";

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
  ServicePerimeters?: Array<Accesscontextmanager_ServicePerimetersServicePerimeter>;
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
  public ServicePerimeters?: Array<Accesscontextmanager_ServicePerimetersServicePerimeter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "ServicePerimeters",
        "The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.\nStructure is documented below.",
        Accesscontextmanager_ServicePerimetersServicePerimeter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The AccessPolicy this ServicePerimeter lives in.\nFormat: accessPolicies/{policy_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
