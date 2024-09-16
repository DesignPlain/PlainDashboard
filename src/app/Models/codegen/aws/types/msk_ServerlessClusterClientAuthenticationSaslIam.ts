import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface msk_ServerlessClusterClientAuthenticationSaslIam {
  // Whether SASL/IAM authentication is enabled or not.
  enabled?: boolean;
}

export function msk_ServerlessClusterClientAuthenticationSaslIam_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether SASL/IAM authentication is enabled or not.',
      () => [],
      true,
      true,
    ),
  ];
}
