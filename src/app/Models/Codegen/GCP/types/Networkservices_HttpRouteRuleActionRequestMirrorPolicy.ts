import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination,
  networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination_GetTypes,
} from "./networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination";

export interface networkservices_HttpRouteRuleActionRequestMirrorPolicy {
  /*
The destination the requests will be mirrored to.
Structure is documented below.
*/
  destination?: networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination;
}

export function networkservices_HttpRouteRuleActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "destination",
      "The destination the requests will be mirrored to.\nStructure is documented below.",
      networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
