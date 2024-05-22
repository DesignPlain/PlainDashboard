import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface GcmChannelArgs {
  // The application ID.
  applicationId?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  enabled?: boolean;

  // Platform credential API key from Google.
  apiKey?: string;
}
export class GcmChannel extends Resource {
  // Platform credential API key from Google.
  public apiKey?: string;

  // The application ID.
  public applicationId?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  public enabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "apiKey",
        "Platform credential API key from Google.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "The application ID.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the channel is enabled or disabled. Defaults to `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
