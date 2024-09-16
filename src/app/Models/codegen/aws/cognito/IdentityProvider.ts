import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IdentityProviderArgs {
  // The provider name
  providerName?: string;

  // The provider type.  [See AWS API for valid values](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#CognitoUserPools-CreateIdentityProvider-request-ProviderType)
  providerType?: string;

  // The user pool id
  userPoolId?: string;

  // The map of attribute mapping of user pool attributes. [AttributeMapping in AWS API documentation](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#CognitoUserPools-CreateIdentityProvider-request-AttributeMapping)
  attributeMapping?: Map<string, string>;

  // The list of identity providers.
  idpIdentifiers?: Array<string>;

  // The map of identity details, such as access token
  providerDetails?: Map<string, string>;
}
export class IdentityProvider extends DS_Resource {
  // The map of attribute mapping of user pool attributes. [AttributeMapping in AWS API documentation](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#CognitoUserPools-CreateIdentityProvider-request-AttributeMapping)
  public attributeMapping?: Map<string, string>;

  // The list of identity providers.
  public idpIdentifiers?: Array<string>;

  // The map of identity details, such as access token
  public providerDetails?: Map<string, string>;

  // The provider name
  public providerName?: string;

  // The provider type.  [See AWS API for valid values](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#CognitoUserPools-CreateIdentityProvider-request-ProviderType)
  public providerType?: string;

  // The user pool id
  public userPoolId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'providerName',
        'The provider name',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'providerType',
        'The provider type.  [See AWS API for valid values](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#CognitoUserPools-CreateIdentityProvider-request-ProviderType)',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userPoolId',
        'The user pool id',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'attributeMapping',
        'The map of attribute mapping of user pool attributes. [AttributeMapping in AWS API documentation](https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_CreateIdentityProvider.html#CognitoUserPools-CreateIdentityProvider-request-AttributeMapping)',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'idpIdentifiers',
        'The list of identity providers.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'providerDetails',
        'The map of identity details, such as access token',
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
