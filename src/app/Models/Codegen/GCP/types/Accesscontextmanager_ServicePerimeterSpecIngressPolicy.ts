import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom,
  accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom";
import {
  accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo,
  accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo";

export interface accesscontextmanager_ServicePerimeterSpecIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  ingressFrom?: accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  ingressTo?: accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo;
}

export function accesscontextmanager_ServicePerimeterSpecIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ingressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ingressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
