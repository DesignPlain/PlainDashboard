import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo,
  accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom,
  accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom";

export interface accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  ingressFrom?: accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  ingressTo?: accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ingressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ingressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
