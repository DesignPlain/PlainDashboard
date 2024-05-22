import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface SourceCredentialArgs {
  // For `GitHub` or `GitHub Enterprise`, this is the personal access token. For `Bitbucket`, this is the app password.
  token?: string;

  // The Bitbucket username when the authType is `BASIC_AUTH`. This parameter is not valid for other types of source providers or connections.
  userName?: string;

  // The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API.
  authType?: string;

  // The source provider used for this project.
  serverType?: string;
}
export class SourceCredential extends Resource {
  // The ARN of Source Credential.
  public arn?: string;

  // The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API.
  public authType?: string;

  // The source provider used for this project.
  public serverType?: string;

  // For `GitHub` or `GitHub Enterprise`, this is the personal access token. For `Bitbucket`, this is the app password.
  public token?: string;

  // The Bitbucket username when the authType is `BASIC_AUTH`. This parameter is not valid for other types of source providers or connections.
  public userName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "serverType",
        "The source provider used for this project.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "token",
        "For `GitHub` or `GitHub Enterprise`, this is the personal access token. For `Bitbucket`, this is the app password.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userName",
        "The Bitbucket username when the authType is `BASIC_AUTH`. This parameter is not valid for other types of source providers or connections.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authType",
        "The type of authentication used to connect to a GitHub, GitHub Enterprise, or Bitbucket repository. An OAUTH connection is not supported by the API.",
        [],
        true,
        true,
      ),
    ];
  }
}
