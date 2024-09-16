import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface beyondcorp_getAppConnectorPrincipalInfoServiceAccount {
  // Email address of the service account.
  email?: string;
}

export function beyondcorp_getAppConnectorPrincipalInfoServiceAccount_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'email',
      'Email address of the service account.',
      () => [],
      true,
      false,
    ),
  ];
}
