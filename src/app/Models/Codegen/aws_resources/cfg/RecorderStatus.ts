import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RecorderStatusArgs {
  // Whether the configuration recorder should be enabled or disabled.
  isEnabled?: boolean;

  // The name of the recorder
  name?: string;
}
export class RecorderStatus extends Resource {
  // Whether the configuration recorder should be enabled or disabled.
  public isEnabled?: boolean;

  // The name of the recorder
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "isEnabled",
        "Whether the configuration recorder should be enabled or disabled.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the recorder",
        [],
        false,
        false,
      ),
    ];
  }
}
