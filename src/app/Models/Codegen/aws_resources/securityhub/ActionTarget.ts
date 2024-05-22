import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ActionTargetArgs {
  // The name of the custom action target.
  description?: string;

  // The ID for the custom action target.
  identifier?: string;

  // The description for the custom action target.
  name?: string;
}
export class ActionTarget extends Resource {
  // Amazon Resource Name (ARN) of the Security Hub custom action target.
  public arn?: string;

  // The name of the custom action target.
  public description?: string;

  // The ID for the custom action target.
  public identifier?: string;

  // The description for the custom action target.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The name of the custom action target.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "identifier",
        "The ID for the custom action target.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The description for the custom action target.",
        [],
        false,
        false,
      ),
    ];
  }
}
