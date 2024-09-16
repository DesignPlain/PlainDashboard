import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface appfabric_AppAuthorizationConnectionAuthRequest {
  // The authorization code returned by the application after permission is granted in the application OAuth page (after clicking on the AuthURL)..
  code?: string;

  // The redirect URL that is specified in the AuthURL and the application client.
  redirectUri?: string;
}

export function appfabric_AppAuthorizationConnectionAuthRequest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'code',
      'The authorization code returned by the application after permission is granted in the application OAuth page (after clicking on the AuthURL)..',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'redirectUri',
      'The redirect URL that is specified in the AuthURL and the application client.',
      () => [],
      true,
      false,
    ),
  ];
}
