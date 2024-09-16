import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  verifiedaccess_TrustProviderDeviceOptions,
  verifiedaccess_TrustProviderDeviceOptions_GetTypes,
} from '../types/verifiedaccess_TrustProviderDeviceOptions';
import {
  verifiedaccess_TrustProviderOidcOptions,
  verifiedaccess_TrustProviderOidcOptions_GetTypes,
} from '../types/verifiedaccess_TrustProviderOidcOptions';

export interface TrustProviderArgs {
  // A description for the AWS Verified Access trust provider.
  description?: string;

  // A block of options for device identity based trust providers.
  deviceOptions?: verifiedaccess_TrustProviderDeviceOptions;

  // The type of device-based trust provider.
  deviceTrustProviderType?: string;

  // The OpenID Connect details for an oidc-type, user-identity based trust provider.
  oidcOptions?: verifiedaccess_TrustProviderOidcOptions;

  // The identifier to be used when working with policy rules.
  policyReferenceName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The type of trust provider can be either user or device-based.

The following arguments are optional:
*/
  trustProviderType?: string;

  // The type of user-based trust provider.
  userTrustProviderType?: string;
}
export class TrustProvider extends DS_Resource {
  //
  public tagsAll?: Map<string, string>;

  // The type of device-based trust provider.
  public deviceTrustProviderType?: string;

  // A block of options for device identity based trust providers.
  public deviceOptions?: verifiedaccess_TrustProviderDeviceOptions;

  // The OpenID Connect details for an oidc-type, user-identity based trust provider.
  public oidcOptions?: verifiedaccess_TrustProviderOidcOptions;

  // The identifier to be used when working with policy rules.
  public policyReferenceName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
The type of trust provider can be either user or device-based.

The following arguments are optional:
*/
  public trustProviderType?: string;

  // The type of user-based trust provider.
  public userTrustProviderType?: string;

  // A description for the AWS Verified Access trust provider.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'oidcOptions',
        'The OpenID Connect details for an oidc-type, user-identity based trust provider.',
        () => verifiedaccess_TrustProviderOidcOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyReferenceName',
        'The identifier to be used when working with policy rules.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'trustProviderType',
        'The type of trust provider can be either user or device-based.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'userTrustProviderType',
        'The type of user-based trust provider.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description for the AWS Verified Access trust provider.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'deviceOptions',
        'A block of options for device identity based trust providers.',
        () => verifiedaccess_TrustProviderDeviceOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'deviceTrustProviderType',
        'The type of device-based trust provider.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
