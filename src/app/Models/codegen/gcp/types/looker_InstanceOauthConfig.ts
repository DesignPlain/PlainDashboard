import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface looker_InstanceOauthConfig {
  // The client ID for the Oauth config.
  clientId?: string;

  // The client secret for the Oauth config.
  clientSecret?: string;
}

export function looker_InstanceOauthConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clientId',
      'The client ID for the Oauth config.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientSecret',
      'The client secret for the Oauth config.',
      () => [],
      true,
      false,
    ),
  ];
}
