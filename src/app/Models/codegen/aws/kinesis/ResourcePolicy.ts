import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ResourcePolicyArgs {
  // The policy document.
  policy?: string;

  // The Amazon Resource Name (ARN) of the data stream or consumer.
  resourceArn?: string;
}
export class ResourcePolicy extends DS_Resource {
  // The policy document.
  public policy?: string;

  // The Amazon Resource Name (ARN) of the data stream or consumer.
  public resourceArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The policy document.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceArn',
        'The Amazon Resource Name (ARN) of the data stream or consumer.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
