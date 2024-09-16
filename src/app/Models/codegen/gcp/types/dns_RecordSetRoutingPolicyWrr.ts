import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dns_RecordSetRoutingPolicyWrrHealthCheckedTargets,
  dns_RecordSetRoutingPolicyWrrHealthCheckedTargets_GetTypes,
} from './dns_RecordSetRoutingPolicyWrrHealthCheckedTargets';

export interface dns_RecordSetRoutingPolicyWrr {
  /*
The list of targets to be health checked. Note that if DNSSEC is enabled for this zone, only one of `rrdatas` or `health_checked_targets` can be set.
Structure is document below.
*/
  healthCheckedTargets?: dns_RecordSetRoutingPolicyWrrHealthCheckedTargets;

  // Same as `rrdatas` above.
  rrdatas?: Array<string>;

  // The ratio of traffic routed to the target.
  weight?: number;
}

export function dns_RecordSetRoutingPolicyWrr_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'healthCheckedTargets',
      'The list of targets to be health checked. Note that if DNSSEC is enabled for this zone, only one of `rrdatas` or `health_checked_targets` can be set.\nStructure is document below.',
      () => dns_RecordSetRoutingPolicyWrrHealthCheckedTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'rrdatas',
      'Same as `rrdatas` above.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'weight',
      'The ratio of traffic routed to the target.',
      () => [],
      true,
      false,
    ),
  ];
}
