import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface VariableArgs {
  //
  Value?: string;

  /*
The name of the variable to manage. Note that variable
names can be hierarchical using slashes (e.g. "prod-variables/hostname").
*/
  Name?: string;

  /*
The name of the RuntimeConfig resource containing this
variable.
*/
  Parent?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
or `value` - (Required) The content to associate with the variable.
Exactly one of `text` or `variable` must be specified. If `text` is specified,
it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
is specified, it must be base64 encoded and less than 4096 bytes in length.

- - -
*/
  Text?: string;
}
export class Variable extends Resource {
  //
  public Value?: string;

  /*
The name of the variable to manage. Note that variable
names can be hierarchical using slashes (e.g. "prod-variables/hostname").
*/
  public Name?: string;

  /*
The name of the RuntimeConfig resource containing this
variable.
*/
  public Parent?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
or `value` - (Required) The content to associate with the variable.
Exactly one of `text` or `variable` must be specified. If `text` is specified,
it must be a valid UTF-8 string and less than 4096 bytes in length. If `value`
is specified, it must be base64 encoded and less than 4096 bytes in length.

- - -
*/
  public Text?: string;

  /*
(Computed) The timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds, representing when the variable was last updated.
Example: "2016-10-09T12:33:37.578138407Z".
*/
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Value", ""),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'The name of the variable to manage. Note that variable\nnames can be hierarchical using slashes (e.g. "prod-variables/hostname").',
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The name of the RuntimeConfig resource containing this\nvariable.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Text",
        "or `value` - (Required) The content to associate with the variable.\nExactly one of `text` or `variable` must be specified. If `text` is specified,\nit must be a valid UTF-8 string and less than 4096 bytes in length. If `value`\nis specified, it must be base64 encoded and less than 4096 bytes in length.\n\n- - -",
      ),
    ];
  }
}
