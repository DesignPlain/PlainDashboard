import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_ServiceDnsEntry,
  vpclattice_ServiceDnsEntry_GetTypes,
} from '../types/vpclattice_ServiceDnsEntry';

export interface ServiceArgs {
  // Type of IAM policy. Either `NONE` or `AWS_IAM`.
  authType?: string;

  // Amazon Resource Name (ARN) of the certificate.
  certificateArn?: string;

  // Custom domain name of the service.
  customDomainName?: string;

  /*
Name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.Must be between 3 and 40 characters in length.

The following arguments are optional:
*/
  name?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Service extends DS_Resource {
  // Type of IAM policy. Either `NONE` or `AWS_IAM`.
  public authType?: string;

  // Amazon Resource Name (ARN) of the certificate.
  public certificateArn?: string;

  // DNS name of the service.
  public dnsEntries?: Array<vpclattice_ServiceDnsEntry>;

  /*
Name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.Must be between 3 and 40 characters in length.

The following arguments are optional:
*/
  public name?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the service.
  public arn?: string;

  // Custom domain name of the service.
  public customDomainName?: string;

  // Status of the service.
  public status?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'authType',
        'Type of IAM policy. Either `NONE` or `AWS_IAM`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'certificateArn',
        'Amazon Resource Name (ARN) of the certificate.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'customDomainName',
        'Custom domain name of the service.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        "Name of the service. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen.Must be between 3 and 40 characters in length.\n\nThe following arguments are optional:",
        () => [],
        false,
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
