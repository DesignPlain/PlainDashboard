import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  chime_VoiceConnectorOrganizationRoute,
  chime_VoiceConnectorOrganizationRoute_GetTypes,
} from '../types/chime_VoiceConnectorOrganizationRoute';

export interface VoiceConnectorOrganizationArgs {
  // When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector.
  disabled?: boolean;

  // Set of call distribution properties defined for your SIP hosts. See route below for more details. Minimum of 1. Maximum of 20.
  routes?: Array<chime_VoiceConnectorOrganizationRoute>;

  // The Amazon Chime Voice Connector ID.
  voiceConnectorId?: string;
}
export class VoiceConnectorOrganization extends DS_Resource {
  // When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector.
  public disabled?: boolean;

  // Set of call distribution properties defined for your SIP hosts. See route below for more details. Minimum of 1. Maximum of 20.
  public routes?: Array<chime_VoiceConnectorOrganizationRoute>;

  // The Amazon Chime Voice Connector ID.
  public voiceConnectorId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'disabled',
        'When origination settings are disabled, inbound calls are not enabled for your Amazon Chime Voice Connector.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'routes',
        'Set of call distribution properties defined for your SIP hosts. See route below for more details. Minimum of 1. Maximum of 20.',
        () => chime_VoiceConnectorOrganizationRoute_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'voiceConnectorId',
        'The Amazon Chime Voice Connector ID.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
