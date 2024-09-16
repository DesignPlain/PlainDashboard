import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  globalaccelerator_CrossAccountAttachmentResource,
  globalaccelerator_CrossAccountAttachmentResource_GetTypes,
} from '../types/globalaccelerator_CrossAccountAttachmentResource';

export interface CrossAccountAttachmentArgs {
  // List of AWS account IDs that are allowed to associate resources with the accelerator.
  principals?: Array<string>;

  // List of resources to be associated with the accelerator.
  resources?: Array<globalaccelerator_CrossAccountAttachmentResource>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Name of the Cross Account Attachment.

The following arguments are optional:
*/
  name?: string;
}
export class CrossAccountAttachment extends DS_Resource {
  // ARN of the Cross Account Attachment.
  public arn?: string;

  // Creation Time when the Cross Account Attachment.
  public createdTime?: string;

  // Last modified time of the Cross Account Attachment.
  public lastModifiedTime?: string;

  /*
Name of the Cross Account Attachment.

The following arguments are optional:
*/
  public name?: string;

  // List of AWS account IDs that are allowed to associate resources with the accelerator.
  public principals?: Array<string>;

  // List of resources to be associated with the accelerator.
  public resources?: Array<globalaccelerator_CrossAccountAttachmentResource>;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Name of the Cross Account Attachment.\n\nThe following arguments are optional:',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'principals',
        'List of AWS account IDs that are allowed to associate resources with the accelerator.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resources',
        'List of resources to be associated with the accelerator.',
        () => globalaccelerator_CrossAccountAttachmentResource_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
