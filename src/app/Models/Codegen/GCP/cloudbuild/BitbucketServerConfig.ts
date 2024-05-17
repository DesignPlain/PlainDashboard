import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_BitbucketServerConfigConnectedRepository,
  Cloudbuild_BitbucketServerConfigConnectedRepository_GetTypes,
} from "../types/Cloudbuild_BitbucketServerConfigConnectedRepository";
import {
  Cloudbuild_BitbucketServerConfigSecrets,
  Cloudbuild_BitbucketServerConfigSecrets_GetTypes,
} from "../types/Cloudbuild_BitbucketServerConfigSecrets";

export interface BitbucketServerConfigArgs {
  // SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  SslCa?: string;

  // Username of the account Cloud Build will use on Bitbucket Server.
  Username?: string;

  /*
Connected Bitbucket Server repositories for this config.
Structure is documented below.
*/
  ConnectedRepositories?: Array<Cloudbuild_BitbucketServerConfigConnectedRepository>;

  /*
Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.
*/
  HostUri?: string;

  // The location of this bitbucket server config.
  Location?: string;

  /*
The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.
*/
  PeeredNetwork?: string;

  /*
Secret Manager secrets needed by the config.
Structure is documented below.
*/
  Secrets?: Cloudbuild_BitbucketServerConfigSecrets;

  /*
Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.
*/
  ApiKey?: string;

  // The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  ConfigId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class BitbucketServerConfig extends Resource {
  /*
Connected Bitbucket Server repositories for this config.
Structure is documented below.
*/
  public ConnectedRepositories?: Array<Cloudbuild_BitbucketServerConfigConnectedRepository>;

  // The resource name for the config.
  public Name?: string;

  /*
Secret Manager secrets needed by the config.
Structure is documented below.
*/
  public Secrets?: Cloudbuild_BitbucketServerConfigSecrets;

  // Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config.
  public WebhookKey?: string;

  // Username of the account Cloud Build will use on Bitbucket Server.
  public Username?: string;

  /*
Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.
*/
  public ApiKey?: string;

  // The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  public ConfigId?: string;

  /*
Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.
*/
  public HostUri?: string;

  // The location of this bitbucket server config.
  public Location?: string;

  /*
The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.
*/
  public PeeredNetwork?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  public SslCa?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PeeredNetwork",
        "The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.\nThis should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,\nno network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format\nprojects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Secrets",
        "Secret Manager secrets needed by the config.\nStructure is documented below.",
        Cloudbuild_BitbucketServerConfigSecrets_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ConfigId",
        "The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SslCa",
        "SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Username",
        "Username of the account Cloud Build will use on Bitbucket Server.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ConnectedRepositories",
        "Connected Bitbucket Server repositories for this config.\nStructure is documented below.",
        Cloudbuild_BitbucketServerConfigConnectedRepository_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "HostUri",
        "Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.\nIf you need to change it, please create another BitbucketServerConfig.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of this bitbucket server config.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiKey",
        "Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.\nChanging this field will result in deleting/ recreating the resource.",
        [],
        true,
        true,
      ),
    ];
  }
}
