import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkservices_TcpRouteRuleActionDestination,
  networkservices_TcpRouteRuleActionDestination_GetTypes,
} from "./networkservices_TcpRouteRuleActionDestination";

export interface networkservices_TcpRouteRuleAction {
  /*
The destination services to which traffic should be forwarded. At least one destination service is required.
Structure is documented below.
*/
  destinations?: Array<networkservices_TcpRouteRuleActionDestination>;

  // If true, Router will use the destination IP and port of the original connection as the destination of the request.
  originalDestination?: boolean;
}

export function networkservices_TcpRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "destinations",
      "The destination services to which traffic should be forwarded. At least one destination service is required.\nStructure is documented below.",
      () => networkservices_TcpRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "originalDestination",
      "If true, Router will use the destination IP and port of the original connection as the destination of the request.",
      () => [],
      false,
      false,
    ),
  ];
}
