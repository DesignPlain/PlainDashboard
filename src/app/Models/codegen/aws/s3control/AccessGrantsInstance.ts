import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AccessGrantsInstanceArgs {
  //
  accountId?: string;

  // The ARN of the AWS IAM Identity Center instance associated with the S3 Access Grants instance.
  identityCenterArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class AccessGrantsInstance extends DS_Resource {
  // Unique ID of the S3 Access Grants instance.
  public accessGrantsInstanceId?: string;

  //
  public accountId?: string;

  // The ARN of the AWS IAM Identity Center instance application; a subresource of the original Identity Center instance.
  public identityCenterApplicationArn?: string;

  // The ARN of the AWS IAM Identity Center instance associated with the S3 Access Grants instance.
  public identityCenterArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Amazon Resource Name (ARN) of the S3 Access Grants instance.
  public accessGrantsInstanceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'accountId',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'identityCenterArn',
        'The ARN of the AWS IAM Identity Center instance associated with the S3 Access Grants instance.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
