import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_BareMetalAdminClusterValidationCheckStatusResult,
  gkeonprem_BareMetalAdminClusterValidationCheckStatusResult_GetTypes,
} from './gkeonprem_BareMetalAdminClusterValidationCheckStatusResult';

export interface gkeonprem_BareMetalAdminClusterValidationCheckStatus {
  /*
(Output)
Individual checks which failed as part of the Preflight check execution.
Structure is documented below.
*/
  results?: Array<gkeonprem_BareMetalAdminClusterValidationCheckStatusResult>;
}

export function gkeonprem_BareMetalAdminClusterValidationCheckStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'results',
      '(Output)\nIndividual checks which failed as part of the Preflight check execution.\nStructure is documented below.',
      () =>
        gkeonprem_BareMetalAdminClusterValidationCheckStatusResult_GetTypes(),
      false,
      false,
    ),
  ];
}
