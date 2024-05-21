import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer,
  dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes,
} from "./dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer";

export interface dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  internalLoadBalancers?: Array<dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer>;
}

export function dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "internalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
