import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface InvocationArgs {
  // Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`.
  qualifier?: string;

  //
  terraformKey?: string;

  // Map of arbitrary keys and values that, when changed, will trigger a re-invocation.
  triggers?: Map<string, string>;

  // Name of the lambda function.
  functionName?: string;

  /*
JSON payload to the lambda function.

The following arguments are optional:
*/
  input?: string;

  // Lifecycle scope of the resource to manage. Valid values are `CREATE_ONLY` and `CRUD`. Defaults to `CREATE_ONLY`. `CREATE_ONLY` will invoke the function only on creation or replacement. `CRUD` will invoke the function on each lifecycle event, and augment the input JSON payload with additional lifecycle information.
  lifecycleScope?: string;
}
export class Invocation extends Resource {
  // Name of the lambda function.
  public functionName?: string;

  /*
JSON payload to the lambda function.

The following arguments are optional:
*/
  public input?: string;

  // Lifecycle scope of the resource to manage. Valid values are `CREATE_ONLY` and `CRUD`. Defaults to `CREATE_ONLY`. `CREATE_ONLY` will invoke the function only on creation or replacement. `CRUD` will invoke the function on each lifecycle event, and augment the input JSON payload with additional lifecycle information.
  public lifecycleScope?: string;

  // Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`.
  public qualifier?: string;

  // String result of the lambda function invocation.
  public result?: string;

  //
  public terraformKey?: string;

  // Map of arbitrary keys and values that, when changed, will trigger a re-invocation.
  public triggers?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "qualifier",
        "Qualifier (i.e., version) of the lambda function. Defaults to `$LATEST`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "terraformKey",
        "",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "triggers",
        "Map of arbitrary keys and values that, when changed, will trigger a re-invocation.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "functionName",
        "Name of the lambda function.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "input",
        "JSON payload to the lambda function.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lifecycleScope",
        "Lifecycle scope of the resource to manage. Valid values are `CREATE_ONLY` and `CRUD`. Defaults to `CREATE_ONLY`. `CREATE_ONLY` will invoke the function only on creation or replacement. `CRUD` will invoke the function on each lifecycle event, and augment the input JSON payload with additional lifecycle information.",
        [],
        false,
        false,
      ),
    ];
  }
}
