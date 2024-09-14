import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration,
  verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration_GetTypes,
} from "./verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration";

export interface verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration {
  // The unique application client IDs that are associated with the specified Amazon Cognito user pool.
  clientIds?: Array<string>;

  // The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source. See Group Configuration below.
  groupConfiguration?: verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration;

  // The Amazon Resource Name (ARN) of the Amazon Cognito user pool that contains the identities to be authorized.
  userPoolArn?: string;
}

export function verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "clientIds",
      "The unique application client IDs that are associated with the specified Amazon Cognito user pool.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "groupConfiguration",
      "The type of entity that a policy store maps to groups from an Amazon Cognito user pool identity source. See Group Configuration below.",
      () =>
        verifiedpermissions_IdentitySourceConfigurationCognitoUserPoolConfigurationGroupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "userPoolArn",
      "The Amazon Resource Name (ARN) of the Amazon Cognito user pool that contains the identities to be authorized.",
      () => [],
      true,
      false,
    ),
  ];
}
