import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedpermissions_PolicyStoreValidationSettings {
  /*
The mode for the validation settings. Valid values: `OFF`, `STRICT`.

The following arguments are optional:
*/
  mode?: string;
}

export function verifiedpermissions_PolicyStoreValidationSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'mode',
      'The mode for the validation settings. Valid values: `OFF`, `STRICT`.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
  ];
}
