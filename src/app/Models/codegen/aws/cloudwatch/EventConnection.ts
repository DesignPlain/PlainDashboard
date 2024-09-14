import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudwatch_EventConnectionAuthParameters,
  cloudwatch_EventConnectionAuthParameters_GetTypes,
} from "../types/cloudwatch_EventConnectionAuthParameters";

export interface EventConnectionArgs {
  // The name of the new connection. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_.
  name?: string;

  // Parameters used for authorization. A maximum of 1 are allowed. Documented below.
  authParameters?: cloudwatch_EventConnectionAuthParameters;

  // Choose the type of authorization to use for the connection. One of `API_KEY`,`BASIC`,`OAUTH_CLIENT_CREDENTIALS`.
  authorizationType?: string;

  // Enter a description for the connection. Maximum of 512 characters.
  description?: string;
}
export class EventConnection extends DS_Resource {
  // The Amazon Resource Name (ARN) of the connection.
  public arn?: string;

  // Parameters used for authorization. A maximum of 1 are allowed. Documented below.
  public authParameters?: cloudwatch_EventConnectionAuthParameters;

  // Choose the type of authorization to use for the connection. One of `API_KEY`,`BASIC`,`OAUTH_CLIENT_CREDENTIALS`.
  public authorizationType?: string;

  // Enter a description for the connection. Maximum of 512 characters.
  public description?: string;

  // The name of the new connection. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_.
  public name?: string;

  // The Amazon Resource Name (ARN) of the secret created from the authorization parameters specified for the connection.
  public secretArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the new connection. Maximum of 64 characters consisting of numbers, lower/upper case letters, .,-,_.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "authParameters",
        "Parameters used for authorization. A maximum of 1 are allowed. Documented below.",
        () => cloudwatch_EventConnectionAuthParameters_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizationType",
        "Choose the type of authorization to use for the connection. One of `API_KEY`,`BASIC`,`OAUTH_CLIENT_CREDENTIALS`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Enter a description for the connection. Maximum of 512 characters.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
