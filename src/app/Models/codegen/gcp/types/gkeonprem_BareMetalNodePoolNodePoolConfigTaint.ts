import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalNodePoolNodePoolConfigTaint {
  /*
Specifies the nodes operating system (default: LINUX).
Possible values are: `EFFECT_UNSPECIFIED`, `PREFER_NO_SCHEDULE`, `NO_EXECUTE`.

- - -
*/
  effect?: string;

  // Key associated with the effect.
  key?: string;

  // Value associated with the effect.
  value?: string;
}

export function gkeonprem_BareMetalNodePoolNodePoolConfigTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'effect',
      'Specifies the nodes operating system (default: LINUX).\nPossible values are: `EFFECT_UNSPECIFIED`, `PREFER_NO_SCHEDULE`, `NO_EXECUTE`.\n\n- - -',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'key',
      'Key associated with the effect.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'Value associated with the effect.',
      () => [],
      false,
      false,
    ),
  ];
}
