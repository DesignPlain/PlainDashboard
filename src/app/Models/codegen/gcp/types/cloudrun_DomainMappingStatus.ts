import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  cloudrun_DomainMappingStatusCondition,
  cloudrun_DomainMappingStatusCondition_GetTypes,
} from './cloudrun_DomainMappingStatusCondition';
import {
  cloudrun_DomainMappingStatusResourceRecord,
  cloudrun_DomainMappingStatusResourceRecord_GetTypes,
} from './cloudrun_DomainMappingStatusResourceRecord';

export interface cloudrun_DomainMappingStatus {
  /*
(Output)
Array of observed DomainMappingConditions, indicating the current state
of the DomainMapping.
Structure is documented below.
*/
  conditions?: Array<cloudrun_DomainMappingStatusCondition>;

  /*
(Output)
The name of the route that the mapping currently points to.
*/
  mappedRouteName?: string;

  /*
(Output)
ObservedGeneration is the 'Generation' of the DomainMapping that
was last processed by the controller.
*/
  observedGeneration?: number;

  /*
The resource records required to configure this domain mapping. These
records must be added to the domain's DNS configuration in order to
serve the application via this domain mapping.
Structure is documented below.
*/
  resourceRecords?: Array<cloudrun_DomainMappingStatusResourceRecord>;
}

export function cloudrun_DomainMappingStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'conditions',
      '(Output)\nArray of observed DomainMappingConditions, indicating the current state\nof the DomainMapping.\nStructure is documented below.',
      () => cloudrun_DomainMappingStatusCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mappedRouteName',
      '(Output)\nThe name of the route that the mapping currently points to.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'observedGeneration',
      "(Output)\nObservedGeneration is the 'Generation' of the DomainMapping that\nwas last processed by the controller.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'resourceRecords',
      "The resource records required to configure this domain mapping. These\nrecords must be added to the domain's DNS configuration in order to\nserve the application via this domain mapping.\nStructure is documented below.",
      () => cloudrun_DomainMappingStatusResourceRecord_GetTypes(),
      false,
      false,
    ),
  ];
}
