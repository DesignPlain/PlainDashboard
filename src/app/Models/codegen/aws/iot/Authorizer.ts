import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AuthorizerArgs {
  // The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`.
  status?: string;

  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer.
  tokenKeyName?: string;

  // The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer.
  tokenSigningPublicKeys?: Map<string, string>;

  // The ARN of the authorizer's Lambda function.
  authorizerFunctionArn?: string;

  // Specifies whether the HTTP caching is enabled or not. Default: `false`.
  enableCachingForHttp?: boolean;

  // The name of the authorizer.
  name?: string;

  // Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`.
  signingDisabled?: boolean;
}
export class Authorizer extends DS_Resource {
  // Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies whether the HTTP caching is enabled or not. Default: `false`.
  public enableCachingForHttp?: boolean;

  // The name of the authorizer.
  public name?: string;

  // The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`.
  public status?: string;

  // The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer.
  public tokenKeyName?: string;

  // The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer.
  public tokenSigningPublicKeys?: Map<string, string>;

  // The ARN of the authorizer.
  public arn?: string;

  // The ARN of the authorizer's Lambda function.
  public authorizerFunctionArn?: string;

  // Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`.
  public signingDisabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to this resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tokenKeyName",
        "The name of the token key used to extract the token from the HTTP headers. This value is required if signing is enabled in your authorizer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tokenSigningPublicKeys",
        "The public keys used to verify the digital signature returned by your custom authentication service. This value is required if signing is enabled in your authorizer.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "authorizerFunctionArn",
        "The ARN of the authorizer's Lambda function.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableCachingForHttp",
        "Specifies whether the HTTP caching is enabled or not. Default: `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the authorizer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "signingDisabled",
        "Specifies whether AWS IoT validates the token signature in an authorization request. Default: `false`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "The status of Authorizer request at creation. Valid values: `ACTIVE`, `INACTIVE`. Default: `ACTIVE`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
