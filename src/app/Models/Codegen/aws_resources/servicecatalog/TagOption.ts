import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface TagOptionArgs {
  /*
Tag option value.

The following arguments are optional:
*/
  value?: string;

  // Whether tag option is active. Default is `true`.
  active?: boolean;

  // Tag option key.
  key?: string;
}
export class TagOption extends Resource {
  // Whether tag option is active. Default is `true`.
  public active?: boolean;

  // Tag option key.
  public key?: string;

  //
  public owner?: string;

  /*
Tag option value.

The following arguments are optional:
*/
  public value?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "value",
        "Tag option value.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "active",
        "Whether tag option is active. Default is `true`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "key",
        "Tag option key.",
        [],
        true,
        true,
      ),
    ];
  }
}
