import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalClusterUpgradePolicy {
  /*
Specifies which upgrade policy to use.
Possible values are: `SERIAL`, `CONCURRENT`.
*/
  policy?: string;
}

export function gkeonprem_BareMetalClusterUpgradePolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'policy',
      'Specifies which upgrade policy to use.\nPossible values are: `SERIAL`, `CONCURRENT`.',
      () => [],
      false,
      false,
    ),
  ];
}
