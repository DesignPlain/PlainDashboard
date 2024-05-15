import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer,
  Dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer_GetTypes,
} from "./Dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer";

export interface Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<Dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer>;
}

export function Dns_RecordSetRoutingPolicyWrrHealthCheckedTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InternalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
