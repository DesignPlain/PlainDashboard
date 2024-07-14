import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface OpenIdConnectProviderArgs {
  // A list of client IDs (also known as audiences). When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. (This is the value that's sent as the client_id parameter on OAuth requests.)
  clientIdLists?: Array<string>;

  // Map of resource tags for the IAM OIDC provider. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s).
  thumbprintLists?: Array<string>;

  // The URL of the identity provider. Corresponds to the _iss_ claim.
  url?: string;
}
export class OpenIdConnectProvider extends Resource {
  // Map of resource tags for the IAM OIDC provider. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s).
  public thumbprintLists?: Array<string>;

  // The URL of the identity provider. Corresponds to the _iss_ claim.
  public url?: string;

  // The ARN assigned by AWS for this provider.
  public arn?: string;

  // A list of client IDs (also known as audiences). When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. (This is the value that's sent as the client_id parameter on OAuth requests.)
  public clientIdLists?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "clientIdLists",
        "A list of client IDs (also known as audiences). When a mobile or web app registers with an OpenID Connect provider, they establish a value that identifies the application. (This is the value that's sent as the client_id parameter on OAuth requests.)",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags for the IAM OIDC provider. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "thumbprintLists",
        "A list of server certificate thumbprints for the OpenID Connect (OIDC) identity provider's server certificate(s).",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "url",
        "The URL of the identity provider. Corresponds to the _iss_ claim.",
        [],
        true,
        true,
      ),
    ];
  }
}
