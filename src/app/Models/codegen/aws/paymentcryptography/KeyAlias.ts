import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface KeyAliasArgs {
  /*
Name of the Key Alias.

The following arguments are optional:
*/
  aliasName?: string;

  // ARN of the key.
  keyArn?: string;
}
export class KeyAlias extends DS_Resource {
  /*
Name of the Key Alias.

The following arguments are optional:
*/
  public aliasName?: string;

  // ARN of the key.
  public keyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'aliasName',
        'Name of the Key Alias.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'keyArn',
        'ARN of the key.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
