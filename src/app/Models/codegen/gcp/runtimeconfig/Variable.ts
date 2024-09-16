import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface VariableArgs {
  /*
The name of the RuntimeConfig resource containing this
variable.
*/
  parent?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
or `value` - (Required) The content to associate with the variable.
Exactly one of `text` or `variable` must be specified. If `text` is specified,
it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
is specified, it must be base64 encoded and less than 4096 bytes in length.

- - -
*/
  text?: string;

  //
  value?: string;

  /*
The name of the variable to manage. Note that variable
names can be hierarchical using slashes (e.g. "prod-variables/hostname").
*/
  name?: string;
}
export class Variable extends DS_Resource {
  /*
or `value` - (Required) The content to associate with the variable.
Exactly one of `text` or `variable` must be specified. If `text` is specified,
it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
is specified, it must be base64 encoded and less than 4096 bytes in length.

- - -
*/
  public text?: string;

  /*
(Computed) The timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds, representing when the variable was last updated.
Example: "2016-10-09T12:33:37.578138407Z".
*/
  public updateTime?: string;

  //
  public value?: string;

  /*
The name of the variable to manage. Note that variable
names can be hierarchical using slashes (e.g. "prod-variables/hostname").
*/
  public name?: string;

  /*
The name of the RuntimeConfig resource containing this
variable.
*/
  public parent?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'parent',
        'The name of the RuntimeConfig resource containing this\nvariable.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'text',
        'or `value` - (Required) The content to associate with the variable.\nExactly one of `text` or `variable` must be specified. If `text` is specified,\nit must be a valid UTF-8 string and less than 4096 bytes in length. If `value`\nis specified, it must be base64 encoded and less than 4096 bytes in length.\n\n- - -',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(InputType.String, 'value', '', () => [], false, false),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the variable to manage. Note that variable\nnames can be hierarchical using slashes (e.g. "prod-variables/hostname").',
        () => [],
        false,
        true,
      ),
    ];
  }
}
