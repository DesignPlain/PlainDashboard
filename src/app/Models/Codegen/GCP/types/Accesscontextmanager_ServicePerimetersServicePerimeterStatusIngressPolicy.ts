import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo,
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo";
import {
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom,
  Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom";

export interface Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicy {
  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo;

  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom;
}

export function Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IngressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IngressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
