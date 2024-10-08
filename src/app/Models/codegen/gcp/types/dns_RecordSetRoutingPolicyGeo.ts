import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dns_RecordSetRoutingPolicyGeoHealthCheckedTargets,
  dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes,
} from './dns_RecordSetRoutingPolicyGeoHealthCheckedTargets';

export interface dns_RecordSetRoutingPolicyGeo {
  /*
For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.
Structure is document below.
*/
  healthCheckedTargets?: dns_RecordSetRoutingPolicyGeoHealthCheckedTargets;

  // The location name defined in Google Cloud.
  location?: string;

  // Same as `rrdatas` above.
  rrdatas?: Array<string>;
}

export function dns_RecordSetRoutingPolicyGeo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'healthCheckedTargets',
      'For A and AAAA types only. The list of targets to be health checked. These can be specified along with `rrdatas` within this item.\nStructure is document below.',
      () => dns_RecordSetRoutingPolicyGeoHealthCheckedTargets_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'location',
      'The location name defined in Google Cloud.',
      () => [],
      true,
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
  ];
}
