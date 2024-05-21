import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom,
  accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom_GetTypes,
} from "../types/accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom";
import {
  accesscontextmanager_ServicePerimeterEgressPolicyEgressTo,
  accesscontextmanager_ServicePerimeterEgressPolicyEgressTo_GetTypes,
} from "../types/accesscontextmanager_ServicePerimeterEgressPolicyEgressTo";

export interface ServicePerimeterEgressPolicyArgs {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  perimeter?: string;

  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressFrom?: accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressTo?: accesscontextmanager_ServicePerimeterEgressPolicyEgressTo;
}
export class ServicePerimeterEgressPolicy extends Resource {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  public egressFrom?: accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  public egressTo?: accesscontextmanager_ServicePerimeterEgressPolicyEgressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public perimeter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "perimeter",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "egressFrom",
        "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
        accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "egressTo",
        "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
        accesscontextmanager_ServicePerimeterEgressPolicyEgressTo_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
