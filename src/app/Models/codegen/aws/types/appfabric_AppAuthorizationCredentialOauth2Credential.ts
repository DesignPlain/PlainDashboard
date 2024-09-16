import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appfabric_AppAuthorizationCredentialOauth2Credential {
  // The client ID of the client application.
  clientId?: string;

  // The client secret of the client application.
  clientSecret?: string;
}

export function appfabric_AppAuthorizationCredentialOauth2Credential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clientId',
      'The client ID of the client application.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'clientSecret',
      'The client secret of the client application.',
      () => [],
      true,
      false,
    ),
  ];
}
