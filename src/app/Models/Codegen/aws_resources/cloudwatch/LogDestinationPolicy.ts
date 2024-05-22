import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface LogDestinationPolicyArgs {
  // A name for the subscription filter
  destinationName?: string;

  // Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual AWS accounts.
  forceUpdate?: boolean;

  // The policy document. This is a JSON formatted string.
  accessPolicy?: string;
}
export class LogDestinationPolicy extends Resource {
  // The policy document. This is a JSON formatted string.
  public accessPolicy?: string;

  // A name for the subscription filter
  public destinationName?: string;

  // Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual AWS accounts.
  public forceUpdate?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "forceUpdate",
        "Specify true if you are updating an existing destination policy to grant permission to an organization ID instead of granting permission to individual AWS accounts.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessPolicy",
        "The policy document. This is a JSON formatted string.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationName",
        "A name for the subscription filter",
        [],
        true,
        true,
      ),
    ];
  }
}
