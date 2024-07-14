import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom,
  accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom_GetTypes,
} from "./accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom";
import {
  accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo,
  accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo_GetTypes,
} from "./accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo";

export interface accesscontextmanager_ServicePerimeterStatusEgressPolicy {
  /*
Defines conditions on the source of a request causing this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressFrom?: accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom;

  /*
Defines the conditions on the `ApiOperation` and destination resources that
cause this `EgressPolicy` to apply.
Structure is documented below.
*/
  egressTo?: accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo;
}

export function accesscontextmanager_ServicePerimeterStatusEgressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "egressFrom",
      "Defines conditions on the source of a request causing this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "egressTo",
      "Defines the conditions on the `ApiOperation` and destination resources that\ncause this `EgressPolicy` to apply.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
