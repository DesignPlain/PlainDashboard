import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appfabric_AppAuthorizationCredentialApiKeyCredential {
  // Contains API key credential information.
  apiKey?: string;
}

export function appfabric_AppAuthorizationCredentialApiKeyCredential_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'apiKey',
      'Contains API key credential information.',
      () => [],
      true,
      false,
    ),
  ];
}
