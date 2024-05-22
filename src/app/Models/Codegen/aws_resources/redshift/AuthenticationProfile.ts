import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AuthenticationProfileArgs {
  // The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
  authenticationProfileContent?: string;

  // The name of the authentication profile.
  authenticationProfileName?: string;
}
export class AuthenticationProfile extends Resource {
  // The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.
  public authenticationProfileContent?: string;

  // The name of the authentication profile.
  public authenticationProfileName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "authenticationProfileContent",
        "The content of the authentication profile in JSON format. The maximum length of the JSON string is determined by a quota for your account.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authenticationProfileName",
        "The name of the authentication profile.",
        [],
        true,
        true,
      ),
    ];
  }
}
