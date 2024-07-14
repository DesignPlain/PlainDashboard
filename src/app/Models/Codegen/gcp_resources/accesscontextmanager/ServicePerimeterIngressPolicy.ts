import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom,
  accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom_GetTypes,
} from "../types/accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom";
import {
  accesscontextmanager_ServicePerimeterIngressPolicyIngressTo,
  accesscontextmanager_ServicePerimeterIngressPolicyIngressTo_GetTypes,
} from "../types/accesscontextmanager_ServicePerimeterIngressPolicyIngressTo";

export interface ServicePerimeterIngressPolicyArgs {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  ingressFrom?: accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  ingressTo?: accesscontextmanager_ServicePerimeterIngressPolicyIngressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  perimeter?: string;
}
export class ServicePerimeterIngressPolicy extends Resource {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  public ingressFrom?: accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  public ingressTo?: accesscontextmanager_ServicePerimeterIngressPolicyIngressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public perimeter?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ingressFrom",
        "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
        accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ingressTo",
        "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
        accesscontextmanager_ServicePerimeterIngressPolicyIngressTo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "perimeter",
        "The name of the Service Perimeter to add this resource to.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
