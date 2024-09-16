import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ActionTargetArgs {
  // The description for the custom action target.
  name?: string;

  // The name of the custom action target.
  description?: string;

  // The ID for the custom action target.
  identifier?: string;
}
export class ActionTarget extends DS_Resource {
  // The ID for the custom action target.
  public identifier?: string;

  // The description for the custom action target.
  public name?: string;

  // Amazon Resource Name (ARN) of the Security Hub custom action target.
  public arn?: string;

  // The name of the custom action target.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The description for the custom action target.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The name of the custom action target.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'identifier',
        'The ID for the custom action target.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
