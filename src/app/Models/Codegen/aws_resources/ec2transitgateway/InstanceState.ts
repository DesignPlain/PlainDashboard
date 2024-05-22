import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceStateArgs {
  // Whether to request a forced stop when `state` is `stopped`. Otherwise (_i.e._, `state` is `running`), ignored. When an instance is forced to stop, it does not flush file system caches or file system metadata, and you must subsequently perform file system check and repair. Not recommended for Windows instances. Defaults to `false`.
  force?: boolean;

  // ID of the instance.
  instanceId?: string;

  /*
State of the instance. Valid values are `stopped`, `running`.

The following arguments are optional:
*/
  state?: string;
}
export class InstanceState extends Resource {
  // Whether to request a forced stop when `state` is `stopped`. Otherwise (_i.e._, `state` is `running`), ignored. When an instance is forced to stop, it does not flush file system caches or file system metadata, and you must subsequently perform file system check and repair. Not recommended for Windows instances. Defaults to `false`.
  public force?: boolean;

  // ID of the instance.
  public instanceId?: string;

  /*
State of the instance. Valid values are `stopped`, `running`.

The following arguments are optional:
*/
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "force",
        "Whether to request a forced stop when `state` is `stopped`. Otherwise (_i.e._, `state` is `running`), ignored. When an instance is forced to stop, it does not flush file system caches or file system metadata, and you must subsequently perform file system check and repair. Not recommended for Windows instances. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceId",
        "ID of the instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "State of the instance. Valid values are `stopped`, `running`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
    ];
  }
}
