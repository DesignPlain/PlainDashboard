import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sesv2_EmailIdentityDkimSigningAttributes,
  sesv2_EmailIdentityDkimSigningAttributes_GetTypes,
} from '../types/sesv2_EmailIdentityDkimSigningAttributes';

export interface EmailIdentityArgs {
  // The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.
  configurationSetName?: string;

  // The configuration of the DKIM authentication settings for an email domain identity.
  dkimSigningAttributes?: sesv2_EmailIdentityDkimSigningAttributes;

  /*
The email address or domain to verify.

The following arguments are optional:
*/
  emailIdentity?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class EmailIdentity extends DS_Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies whether or not the identity is verified.
  public verifiedForSendingStatus?: boolean;

  // ARN of the Email Identity.
  public arn?: string;

  // The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.
  public configurationSetName?: string;

  // The configuration of the DKIM authentication settings for an email domain identity.
  public dkimSigningAttributes?: sesv2_EmailIdentityDkimSigningAttributes;

  /*
The email address or domain to verify.

The following arguments are optional:
*/
  public emailIdentity?: string;

  // The email identity type. Valid values: `EMAIL_ADDRESS`, `DOMAIN`.
  public identityType?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'configurationSetName',
        'The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'dkimSigningAttributes',
        'The configuration of the DKIM authentication settings for an email domain identity.',
        () => sesv2_EmailIdentityDkimSigningAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'emailIdentity',
        'The email address or domain to verify.\n\nThe following arguments are optional:',
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
    ];
  }
}
