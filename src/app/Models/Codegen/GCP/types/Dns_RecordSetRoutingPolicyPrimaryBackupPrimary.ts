import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer,
  Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer_GetTypes,
} from "./Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer";

export interface Dns_RecordSetRoutingPolicyPrimaryBackupPrimary {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  InternalLoadBalancers?: Array<Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer>;
}

export function Dns_RecordSetRoutingPolicyPrimaryBackupPrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InternalLoadBalancers",
      "The list of internal load balancers to health check.\nStructure is document below.",
      Dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
