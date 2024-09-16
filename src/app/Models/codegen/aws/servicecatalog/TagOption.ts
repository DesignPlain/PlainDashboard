import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TagOptionArgs {
  // Whether tag option is active. Default is `true`.
  active?: boolean;

  // Tag option key.
  key?: string;

  /*
Tag option value.

The following arguments are optional:
*/
  value?: string;
}
export class TagOption extends DS_Resource {
  /*
Tag option value.

The following arguments are optional:
*/
  public value?: string;

  // Whether tag option is active. Default is `true`.
  public active?: boolean;

  // Tag option key.
  public key?: string;

  //
  public owner?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'key',
        'Tag option key.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'value',
        'Tag option value.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'active',
        'Whether tag option is active. Default is `true`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
