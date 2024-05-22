import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_GrpcRouteRuleAction,
  networkservices_GrpcRouteRuleAction_GetTypes,
} from "./networkservices_GrpcRouteRuleAction";
import {
  networkservices_GrpcRouteRuleMatch,
  networkservices_GrpcRouteRuleMatch_GetTypes,
} from "./networkservices_GrpcRouteRuleMatch";

export interface networkservices_GrpcRouteRule {
  /*
Required. A detailed rule defining how to route traffic.
Structure is documented below.
*/
  action?: networkservices_GrpcRouteRuleAction;

  /*
Matches define conditions used for matching the rule against incoming gRPC requests.
Structure is documented below.
*/
  matches?: Array<networkservices_GrpcRouteRuleMatch>;
}

export function networkservices_GrpcRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "action",
      "Required. A detailed rule defining how to route traffic.\nStructure is documented below.",
      networkservices_GrpcRouteRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "matches",
      "Matches define conditions used for matching the rule against incoming gRPC requests.\nStructure is documented below.",
      networkservices_GrpcRouteRuleMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
