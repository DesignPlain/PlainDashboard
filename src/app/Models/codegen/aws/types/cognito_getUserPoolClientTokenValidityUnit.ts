import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cognito_getUserPoolClientTokenValidityUnit {
  // (Optional) Time unit in for the value in `access_token_validity`, defaults to `hours`.
  accessToken?: string;

  // (Optional) Time unit in for the value in `id_token_validity`, defaults to `hours`.
  idToken?: string;

  // (Optional) Time unit in for the value in `refresh_token_validity`, defaults to `days`.
  refreshToken?: string;
}

export function cognito_getUserPoolClientTokenValidityUnit_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'idToken',
      '(Optional) Time unit in for the value in `id_token_validity`, defaults to `hours`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'refreshToken',
      '(Optional) Time unit in for the value in `refresh_token_validity`, defaults to `days`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'accessToken',
      '(Optional) Time unit in for the value in `access_token_validity`, defaults to `hours`.',
      () => [],
      true,
      false,
    ),
  ];
}
