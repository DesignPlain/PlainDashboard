import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer,
  Dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes,
} from "./Dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer";

export interface Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<Dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer>;
}

export function Dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InternalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
