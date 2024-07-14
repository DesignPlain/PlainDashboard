import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface KeyGroupArgs {
  // A comment to describe the key group..
  comment?: string;

  // A list of the identifiers of the public keys in the key group.
  items?: Array<string>;

  // A name to identify the key group.
  name?: string;
}
export class KeyGroup extends Resource {
  // A list of the identifiers of the public keys in the key group.
  public items?: Array<string>;

  // A name to identify the key group.
  public name?: string;

  // A comment to describe the key group..
  public comment?: string;

  // The identifier for this version of the key group.
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "comment",
        "A comment to describe the key group..",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "items",
        "A list of the identifiers of the public keys in the key group.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A name to identify the key group.",
        [],
        false,
        false,
      ),
    ];
  }
}
