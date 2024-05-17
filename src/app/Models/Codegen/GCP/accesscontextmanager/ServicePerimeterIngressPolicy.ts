import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom,
  Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom_GetTypes,
} from "../types/Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom";
import {
  Accesscontextmanager_ServicePerimeterIngressPolicyIngressTo,
  Accesscontextmanager_ServicePerimeterIngressPolicyIngressTo_GetTypes,
} from "../types/Accesscontextmanager_ServicePerimeterIngressPolicyIngressTo";

export interface ServicePerimeterIngressPolicyArgs {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: Accesscontextmanager_ServicePerimeterIngressPolicyIngressTo;

  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  Perimeter?: string;
}
export class ServicePerimeterIngressPolicy extends Resource {
  /*
The name of the Service Perimeter to add this resource to.


- - -
*/
  public Perimeter?: string;

  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  public IngressFrom?: Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  public IngressTo?: Accesscontextmanager_ServicePerimeterIngressPolicyIngressTo;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "IngressTo",
        "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
        Accesscontextmanager_ServicePerimeterIngressPolicyIngressTo_GetTypes(),
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
      new DynamicUIProps(
        InputType.Object,
        "IngressFrom",
        "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
        Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
