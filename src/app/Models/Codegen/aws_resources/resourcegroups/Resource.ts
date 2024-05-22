import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from 'src/app/enum/InputType';
import { Resource as BaseResource } from 'src/app/Models/CloudResource';
import { DynamicUIProps } from 'src/app/components/resource-config/resource-config.component';

export interface ResourceArgs {
  /*
The name or the ARN of the resource group to add resources to.

The following arguments are optional:
*/
  groupArn?: string;

  // The ARN of the resource to be added to the group.
  resourceArn?: string;
}
export class Resource extends BaseResource {
  /*
The name or the ARN of the resource group to add resources to.

The following arguments are optional:
*/
  public groupArn?: string;

  // The ARN of the resource to be added to the group.
  public resourceArn?: string;

  // The resource type of a resource, such as `AWS::EC2::Instance`.
  public resourceType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'groupArn',
        'The name or the ARN of the resource group to add resources to.\n\nThe following arguments are optional:',
        [],
        true,
        true
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'The ARN of the resource to be added to the group.',
        [],
        true,
        true
      ),
    ];
  }
}
