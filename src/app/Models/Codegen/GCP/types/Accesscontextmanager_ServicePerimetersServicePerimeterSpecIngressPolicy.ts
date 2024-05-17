import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom,
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo,
  Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo";

export interface Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo;
}

export function Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IngressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IngressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
