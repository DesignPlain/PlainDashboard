import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer,
  Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes,
} from "./Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer";

export interface Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer>;
}

export function Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InternalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
