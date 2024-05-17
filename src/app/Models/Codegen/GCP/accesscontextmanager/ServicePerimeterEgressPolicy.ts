import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom,
  Accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom_GetTypes,
} from "../types/Accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom";
import {
  Accesscontextmanager_ServicePerimeterEgressPolicyEgressTo,
  Accesscontextmanager_ServicePerimeterEgressPolicyEgressTo_GetTypes,
} from "../types/Accesscontextmanager_ServicePerimeterEgressPolicyEgressTo";

export interface ServicePerimeterEgressPolicyArgs {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressFrom?: Accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  EgressTo?: Accesscontextmanager_ServicePerimeterEgressPolicyEgressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  Perimeter?: string;
}
export class ServicePerimeterEgressPolicy extends Resource {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  public EgressFrom?: Accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  public EgressTo?: Accesscontextmanager_ServicePerimeterEgressPolicyEgressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public Perimeter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "EgressFrom",
        "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
        Accesscontextmanager_ServicePerimeterEgressPolicyEgressFrom_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "EgressTo",
        "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
        Accesscontextmanager_ServicePerimeterEgressPolicyEgressTo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Perimeter",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
