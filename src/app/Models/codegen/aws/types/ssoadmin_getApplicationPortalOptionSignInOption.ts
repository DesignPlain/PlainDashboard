import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ssoadmin_getApplicationPortalOptionSignInOption {
  //
  applicationUrl?: string;

  //
  origin?: string;
}

export function ssoadmin_getApplicationPortalOptionSignInOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'applicationUrl',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, 'origin', '', () => [], true, false),
  ];
}
