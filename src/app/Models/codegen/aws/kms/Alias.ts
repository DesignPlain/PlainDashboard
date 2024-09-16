import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AliasArgs {
  // The display name of the alias. The name must start with the word "alias" followed by a forward slash (alias/)
  name?: string;

  /*
Creates an unique alias beginning with the specified prefix.
The name must start with the word "alias" followed by a forward slash (alias/).  Conflicts with `name`.
*/
  namePrefix?: string;

  // Identifier for the key for which the alias is for, can be either an ARN or key_id.
  targetKeyId?: string;
}
export class Alias extends DS_Resource {
  // Identifier for the key for which the alias is for, can be either an ARN or key_id.
  public targetKeyId?: string;

  // The Amazon Resource Name (ARN) of the key alias.
  public arn?: string;

  // The display name of the alias. The name must start with the word "alias" followed by a forward slash (alias/)
  public name?: string;

  /*
Creates an unique alias beginning with the specified prefix.
The name must start with the word "alias" followed by a forward slash (alias/).  Conflicts with `name`.
*/
  public namePrefix?: string;

  // The Amazon Resource Name (ARN) of the target key identifier.
  public targetKeyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates an unique alias beginning with the specified prefix.\nThe name must start with the word "alias" followed by a forward slash (alias/).  Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetKeyId',
        'Identifier for the key for which the alias is for, can be either an ARN or key_id.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The display name of the alias. The name must start with the word "alias" followed by a forward slash (alias/)',
        () => [],
        false,
        true,
      ),
    ];
  }
}
