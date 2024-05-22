import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimetersServicePerimeter,
  accesscontextmanager_ServicePerimetersServicePerimeter_GetTypes,
} from "../types/accesscontextmanager_ServicePerimetersServicePerimeter";

export interface ServicePerimetersArgs {
  /*
The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.
Structure is documented below.
*/
  servicePerimeters?: Array<accesscontextmanager_ServicePerimetersServicePerimeter>;

  /*
The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  parent?: string;
}
export class ServicePerimeters extends Resource {
  /*
The AccessPolicy this ServicePerimeter lives in.
Format: accessPolicies/{policy_id}


- - -
*/
  public parent?: string;

  /*
The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.
Structure is documented below.
*/
  public servicePerimeters?: Array<accesscontextmanager_ServicePerimetersServicePerimeter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "servicePerimeters",
        "The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy.\nStructure is documented below.",
        accesscontextmanager_ServicePerimetersServicePerimeter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The AccessPolicy this ServicePerimeter lives in.\nFormat: accessPolicies/{policy_id}\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
