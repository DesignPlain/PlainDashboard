import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResourceAssociationArgs {
  // Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share.
  resourceArn?: string;

  // Amazon Resource Name (ARN) of the RAM Resource Share.
  resourceShareArn?: string;
}
export class ResourceAssociation extends DS_Resource {
  // Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share.
  public resourceArn?: string;

  // Amazon Resource Name (ARN) of the RAM Resource Share.
  public resourceShareArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceShareArn',
        'Amazon Resource Name (ARN) of the RAM Resource Share.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
