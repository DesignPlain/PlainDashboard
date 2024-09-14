import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface GcmChannelArgs {
  //
  serviceJson?: string;

  // Platform credential API key from Google.
  apiKey?: string;

  // The application ID.
  applicationId?: string;

  //
  defaultAuthenticationMethod?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  enabled?: boolean;
}
export class GcmChannel extends DS_Resource {
  //
  public defaultAuthenticationMethod?: string;

  // Whether the channel is enabled or disabled. Defaults to `true`.
  public enabled?: boolean;

  //
  public serviceJson?: string;

  // Platform credential API key from Google.
  public apiKey?: string;

  // The application ID.
  public applicationId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serviceJson",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiKey",
        "Platform credential API key from Google.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "applicationId",
        "The application ID.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "defaultAuthenticationMethod",
        "",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether the channel is enabled or disabled. Defaults to `true`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
