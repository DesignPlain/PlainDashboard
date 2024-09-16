import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  verifiedaccess_GroupSseConfiguration,
  verifiedaccess_GroupSseConfiguration_GetTypes,
} from '../types/verifiedaccess_GroupSseConfiguration';

export interface GroupArgs {
  /*
The id of the verified access instance this group is associated with.

The following arguments are optional:
*/
  verifiedaccessInstanceId?: string;

  // Description of the verified access group.
  description?: string;

  // The policy document that is associated with this resource.
  policyDocument?: string;

  // Configuration block to use KMS keys for server-side encryption.
  sseConfiguration?: verifiedaccess_GroupSseConfiguration;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Group extends DS_Resource {
  // Description of the verified access group.
  public description?: string;

  // The policy document that is associated with this resource.
  public policyDocument?: string;

  // Configuration block to use KMS keys for server-side encryption.
  public sseConfiguration?: verifiedaccess_GroupSseConfiguration;

  //
  public tagsAll?: Map<string, string>;

  // ARN of this verified acess group.
  public verifiedaccessGroupArn?: string;

  // Timestamp when the access group was created.
  public creationTime?: string;

  // Timestamp when the access group was deleted.
  public deletionTime?: string;

  // Timestamp when the access group was last updated.
  public lastUpdatedTime?: string;

  // AWS account number owning this resource.
  public owner?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // ID of this verified access group.
  public verifiedaccessGroupId?: string;

  /*
The id of the verified access instance this group is associated with.

The following arguments are optional:
*/
  public verifiedaccessInstanceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'verifiedaccessInstanceId',
        'The id of the verified access instance this group is associated with.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the verified access group.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyDocument',
        'The policy document that is associated with this resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sseConfiguration',
        'Configuration block to use KMS keys for server-side encryption.',
        () => verifiedaccess_GroupSseConfiguration_GetTypes(),
        false,
        false,
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
