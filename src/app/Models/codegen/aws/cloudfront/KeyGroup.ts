import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface KeyGroupArgs {
  // A name to identify the key group.
  name?: string;

  // A comment to describe the key group..
  comment?: string;

  // A list of the identifiers of the public keys in the key group.
  items?: Array<string>;
}
export class KeyGroup extends DS_Resource {
  // A comment to describe the key group..
  public comment?: string;

  // The identifier for this version of the key group.
  public etag?: string;

  // A list of the identifiers of the public keys in the key group.
  public items?: Array<string>;

  // A name to identify the key group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name to identify the key group.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'comment',
        'A comment to describe the key group..',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'items',
        'A list of the identifiers of the public keys in the key group.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
