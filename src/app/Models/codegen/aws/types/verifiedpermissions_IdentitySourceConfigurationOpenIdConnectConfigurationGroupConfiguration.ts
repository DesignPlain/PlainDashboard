import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration {
  // The token claim that you want Verified Permissions to interpret as group membership. For example, `groups`.
  groupClaim?: string;

  // The name of the schema entity type that's mapped to the user pool group. Defaults to `AWS::CognitoGroup`.
  groupEntityType?: string;
}

export function verifiedpermissions_IdentitySourceConfigurationOpenIdConnectConfigurationGroupConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'groupClaim',
      'The token claim that you want Verified Permissions to interpret as group membership. For example, `groups`.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'groupEntityType',
      "The name of the schema entity type that's mapped to the user pool group. Defaults to `AWS::CognitoGroup`.",
      () => [],
      true,
      false,
    ),
  ];
}
