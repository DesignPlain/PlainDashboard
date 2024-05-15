import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination,
  Networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination_GetTypes,
} from "./Networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination";

export interface Networkservices_HttpRouteRuleActionRequestMirrorPolicy {
  /*
The destination the requests will be mirrored to.
Structure is documented below.
*/
  Destination?: Networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination;
}

export function Networkservices_HttpRouteRuleActionRequestMirrorPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Destination",
      "The destination the requests will be mirrored to.\nStructure is documented below.",
      Networkservices_HttpRouteRuleActionRequestMirrorPolicyDestination_GetTypes(),
      false,
      false,
    ),
  ];
}
