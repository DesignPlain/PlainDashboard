import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResourcePolicyArgs {
  // The content of the resource policy being updated.
  policy?: string;

  // The Amazon Resource Name (ARN) of the account to create or update a resource policy for.
  resourceArn?: string;
}
export class ResourcePolicy extends DS_Resource {
  // The content of the resource policy being updated.
  public policy?: string;

  // The Amazon Resource Name (ARN) of the account to create or update a resource policy for.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The content of the resource policy being updated.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'The Amazon Resource Name (ARN) of the account to create or update a resource policy for.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
