import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AdmChannelArgs {
  // Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
  clientId?: string;

  // Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
  clientSecret?: string;

  // Specifies whether to enable the channel. Defaults to `true`.
  enabled?: boolean;

  // The application ID.
  applicationId?: string;
}
export class AdmChannel extends Resource {
  // Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.
  public clientSecret?: string;

  // Specifies whether to enable the channel. Defaults to `true`.
  public enabled?: boolean;

  // The application ID.
  public applicationId?: string;

  // Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.
  public clientId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Specifies whether to enable the channel. Defaults to `true`.",
        [],
        false,
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
        InputType.String,
        "clientId",
        "Client ID (part of OAuth Credentials) obtained via Amazon Developer Account.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientSecret",
        "Client Secret (part of OAuth Credentials) obtained via Amazon Developer Account.",
        [],
        true,
        false,
      ),
    ];
  }
}
