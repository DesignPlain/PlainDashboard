import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chime_VoiceConnectorOrganizationRoute {
  // The FQDN or IP address to contact for origination traffic.
  host?: string;

  // The designated origination route port. Defaults to `5060`.
  port?: number;

  // The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first.
  priority?: number;

  // The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.
  protocol?: string;

  // The weight associated with the host. If hosts are equal in priority, calls are redistributed among them based on their relative weight.
  weight?: number;
}

export function chime_VoiceConnectorOrganizationRoute_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'weight',
      'The weight associated with the host. If hosts are equal in priority, calls are redistributed among them based on their relative weight.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'host',
      'The FQDN or IP address to contact for origination traffic.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The designated origination route port. Defaults to `5060`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'priority',
      'The priority associated with the host, with 1 being the highest priority. Higher priority hosts are attempted first.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'protocol',
      'The protocol to use for the origination route. Encryption-enabled Amazon Chime Voice Connectors use TCP protocol by default.',
      () => [],
      true,
      false,
    ),
  ];
}
