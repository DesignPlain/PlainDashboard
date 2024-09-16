import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalClusterBinaryAuthorization {
  /*
Mode of operation for binauthz policy evaluation. If unspecified,
defaults to DISABLED.
Possible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  evaluationMode?: string;
}

export function gkeonprem_BareMetalClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'evaluationMode',
      'Mode of operation for binauthz policy evaluation. If unspecified,\ndefaults to DISABLED.\nPossible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.',
      () => [],
      false,
      false,
    ),
  ];
}
