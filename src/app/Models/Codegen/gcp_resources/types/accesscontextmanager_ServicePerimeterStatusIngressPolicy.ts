import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom,
  accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom";
import {
  accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo,
  accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo";

export interface accesscontextmanager_ServicePerimeterStatusIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  ingressFrom?: accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  ingressTo?: accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo;
}

export function accesscontextmanager_ServicePerimeterStatusIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ingressFrom",
      "Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ingressTo",
      "Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterStatusIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
