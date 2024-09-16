import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chime_VoiceConnectorTerminationCredentialsCredential {
  // RFC2617 compliant password associated with the SIP credentials.
  password?: string;

  // RFC2617 compliant username associated with the SIP credentials.
  username?: string;
}

export function chime_VoiceConnectorTerminationCredentialsCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'password',
      'RFC2617 compliant password associated with the SIP credentials.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'RFC2617 compliant username associated with the SIP credentials.',
      () => [],
      true,
      false,
    ),
  ];
}
