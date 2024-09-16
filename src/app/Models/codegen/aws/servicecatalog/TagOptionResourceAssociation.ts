import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TagOptionResourceAssociationArgs {
  // Resource identifier.
  resourceId?: string;

  // Tag Option identifier.
  tagOptionId?: string;
}
export class TagOptionResourceAssociation extends DS_Resource {
  // Tag Option identifier.
  public tagOptionId?: string;

  // ARN of the resource.
  public resourceArn?: string;

  // Creation time of the resource.
  public resourceCreatedTime?: string;

  // Description of the resource.
  public resourceDescription?: string;

  // Resource identifier.
  public resourceId?: string;

  // Description of the resource.
  public resourceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'tagOptionId',
        'Tag Option identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceId',
        'Resource identifier.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
