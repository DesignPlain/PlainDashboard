import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  appfabric_AppAuthorizationCredentialApiKeyCredential,
  appfabric_AppAuthorizationCredentialApiKeyCredential_GetTypes,
} from './appfabric_AppAuthorizationCredentialApiKeyCredential';
import {
  appfabric_AppAuthorizationCredentialOauth2Credential,
  appfabric_AppAuthorizationCredentialOauth2Credential_GetTypes,
} from './appfabric_AppAuthorizationCredentialOauth2Credential';

export interface appfabric_AppAuthorizationCredential {
  // Contains API key credential information.
  apiKeyCredentials?: Array<appfabric_AppAuthorizationCredentialApiKeyCredential>;

  // Contains OAuth2 client credential information.
  oauth2Credential?: appfabric_AppAuthorizationCredentialOauth2Credential;
}

export function appfabric_AppAuthorizationCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'apiKeyCredentials',
      'Contains API key credential information.',
      () => appfabric_AppAuthorizationCredentialApiKeyCredential_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'oauth2Credential',
      'Contains OAuth2 client credential information.',
      () => appfabric_AppAuthorizationCredentialOauth2Credential_GetTypes(),
      false,
      false,
    ),
  ];
}
