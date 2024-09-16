import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IdentityPoolProviderPrincipalTagArgs {
  // use default (username and clientID) attribute mappings.
  useDefaults?: boolean;

  // An identity pool ID.
  identityPoolId?: string;

  // The name of the identity provider.
  identityProviderName?: string;

  // String to string map of variables.
  principalTags?: Map<string, string>;
}
export class IdentityPoolProviderPrincipalTag extends DS_Resource {
  // use default (username and clientID) attribute mappings.
  public useDefaults?: boolean;

  // An identity pool ID.
  public identityPoolId?: string;

  // The name of the identity provider.
  public identityProviderName?: string;

  // String to string map of variables.
  public principalTags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        'useDefaults',
        'use default (username and clientID) attribute mappings.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'identityPoolId',
        'An identity pool ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'identityProviderName',
        'The name of the identity provider.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'principalTags',
        'String to string map of variables.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
