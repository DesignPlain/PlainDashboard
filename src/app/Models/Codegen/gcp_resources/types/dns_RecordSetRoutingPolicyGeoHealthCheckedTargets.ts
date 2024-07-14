import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer,
  dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes,
} from "./dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer";

export interface dns_RecordSetRoutingPolicyGeoHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  internalLoadBalancers?: Array<dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer>;
}

export function dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "internalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      dns_RecordSetRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
