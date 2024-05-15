import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom,
  Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom";
import {
  Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo,
  Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo";

export interface Accesscontextmanager_ServicePerimeterStatusIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo;
}

export function Accesscontextmanager_ServicePerimeterStatusIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IngressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IngressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
