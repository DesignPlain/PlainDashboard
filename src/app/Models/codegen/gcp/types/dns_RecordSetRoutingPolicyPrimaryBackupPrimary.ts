import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer,
  dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer_GetTypes,
} from './dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer';

export interface dns_RecordSetRoutingPolicyPrimaryBackupPrimary {
  /*
The list of internal load balancers to health check.
Structure is document below.
*/
  internalLoadBalancers?: Array<dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer>;
}

export function dns_RecordSetRoutingPolicyPrimaryBackupPrimary_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'internalLoadBalancers',
      'The list of internal load balancers to health check.\nStructure is document below.',
      () =>
        dns_RecordSetRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancer_GetTypes(),
      true,
      false,
    ),
  ];
}
