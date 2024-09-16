import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  chime_VoiceConnectorTerminationCredentialsCredential,
  chime_VoiceConnectorTerminationCredentialsCredential_GetTypes,
} from '../types/chime_VoiceConnectorTerminationCredentialsCredential';

export interface VoiceConnectorTerminationCredentialsArgs {
  // List of termination SIP credentials.
  credentials?: Array<chime_VoiceConnectorTerminationCredentialsCredential>;

  // Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;
}
export class VoiceConnectorTerminationCredentials extends DS_Resource {
  // List of termination SIP credentials.
  public credentials?: Array<chime_VoiceConnectorTerminationCredentialsCredential>;

  // Amazon Chime Voice Connector ID.
  public voiceConnectorId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'voiceConnectorId',
        'Amazon Chime Voice Connector ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'credentials',
        'List of termination SIP credentials.',
        () => chime_VoiceConnectorTerminationCredentialsCredential_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
