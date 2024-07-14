import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom,
  accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo,
  accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo";

export interface accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressFrom?: accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressTo?: accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "egressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "egressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterStatusEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
