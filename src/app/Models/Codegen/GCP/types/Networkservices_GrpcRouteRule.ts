import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_GrpcRouteRuleMatch,
  Networkservices_GrpcRouteRuleMatch_GetTypes,
} from "./Networkservices_GrpcRouteRuleMatch";
import {
  Networkservices_GrpcRouteRuleAction,
  Networkservices_GrpcRouteRuleAction_GetTypes,
} from "./Networkservices_GrpcRouteRuleAction";

export interface Networkservices_GrpcRouteRule {
  /*
Required. A detailed rule defining how to route traffic.
Structure is documented below.
*/
  Action?: Networkservices_GrpcRouteRuleAction;

  /*
Matches define conditions used for matching the rule against incoming gRPC requests.
Structure is documented below.
*/
  Matches?: Array<Networkservices_GrpcRouteRuleMatch>;
}

export function Networkservices_GrpcRouteRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Action",
      "Required. A detailed rule defining how to route traffic.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleAction_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Matches",
      "Matches define conditions used for matching the rule against incoming gRPC requests.\nStructure is documented below.",
      Networkservices_GrpcRouteRuleMatch_GetTypes(),
      false,
      false,
    ),
  ];
}
