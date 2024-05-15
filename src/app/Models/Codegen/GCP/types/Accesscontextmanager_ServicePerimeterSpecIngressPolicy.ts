import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo,
  Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo";
import {
  Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom,
  Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom";

export interface Accesscontextmanager_ServicePerimeterSpecIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  IngressFrom?: Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  IngressTo?: Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo;
}

export function Accesscontextmanager_ServicePerimeterSpecIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "IngressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IngressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterSpecIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
  ];
}
