import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalClusterValidationCheckStatusResult,
  gkeonprem_BareMetalClusterValidationCheckStatusResult_GetTypes,
} from './gkeonprem_BareMetalClusterValidationCheckStatusResult';

export interface gkeonprem_BareMetalClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  results?: Array<gkeonprem_BareMetalClusterValidationCheckStatusResult>;
}

export function gkeonprem_BareMetalClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'results',
      '(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.',
      () => gkeonprem_BareMetalClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
