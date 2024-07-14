import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface SerialConsoleAccessArgs {
  // Whether or not serial console access is enabled. Valid values are `true` or `false`. Defaults to `true`.
  enabled?: boolean;
}
export class SerialConsoleAccess extends Resource {
  // Whether or not serial console access is enabled. Valid values are `true` or `false`. Defaults to `true`.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether or not serial console access is enabled. Valid values are `true` or `false`. Defaults to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
