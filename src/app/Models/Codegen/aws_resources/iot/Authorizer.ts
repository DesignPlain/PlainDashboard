import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AuthorizerArgs {
  // Specifies whether the HTTP caching is enabled or not. Default: `false`.
  enableCachingForHttp?: boolean;

  // The name of the authorizer.
  name?: string;

  // Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`.
  signingDisabled?: boolean;

  // The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`.
  status?: string;

  // The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer.
  tokenKeyName?: string;

  // The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer.
  tokenSigningPublicKeys?: Map<string, string>;

  // The ARN of the authorizer's Lambda function.
  authorizerFunctionArn?: string;
}
export class Authorizer extends Resource {
  // The ARN of the authorizer.
  public arn?: string;

  // The ARN of the authorizer's Lambda function.
  public authorizerFunctionArn?: string;

  // Specifies whether the HTTP caching is enabled or not. Default: `false`.
  public enableCachingForHttp?: boolean;

  // The name of the authorizer.
  public name?: string;

  // Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`.
  public signingDisabled?: boolean;

  // The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`.
  public status?: string;

  // The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer.
  public tokenKeyName?: string;

  // The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer.
  public tokenSigningPublicKeys?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "authorizerFunctionArn",
        "The ARN of the authorizer's Lambda function.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableCachingForHttp",
        "Specifies whether the HTTP caching is enabled or not. Default: `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the authorizer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "signingDisabled",
        "Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tokenKeyName",
        "The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tokenSigningPublicKeys",
        "The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
