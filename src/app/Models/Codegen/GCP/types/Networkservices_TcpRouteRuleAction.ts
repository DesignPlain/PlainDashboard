import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_TcpRouteRuleActionDestination,
  Networkservices_TcpRouteRuleActionDestination_GetTypes,
} from "./Networkservices_TcpRouteRuleActionDestination";

export interface Networkservices_TcpRouteRuleAction {
  /*
The destination services to which traffic should be forwarded. At least one destination service is required.
Structure is documented below.
*/
  Destinations?: Array<Networkservices_TcpRouteRuleActionDestination>;

  // If true, Router will use the destination IP and port of the original connection as the destination of the request.
  OriginalDestination?: boolean;
}

export function Networkservices_TcpRouteRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Destinations",
      "The destination services to which traffic should be forwarded. At least one destination service is required.\nStructure is documented below.",
      Networkservices_TcpRouteRuleActionDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "OriginalDestination",
      "If true, Router will use the destination IP and port of the original connection as the destination of the request.",
      [],
      false,
      false,
    ),
  ];
}
