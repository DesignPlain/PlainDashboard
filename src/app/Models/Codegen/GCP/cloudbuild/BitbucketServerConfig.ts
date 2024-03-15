import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { BitbucketServerConfigConnectedRepository } from "../types/BitbucketServerConfigConnectedRepository";
import { BitbucketServerConfigSecrets } from "../types/BitbucketServerConfigSecrets";

export interface BitbucketServerConfigArgs {
  /*
Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.
*/
  ApiKey?: string;

  /*
Connected Bitbucket Server repositories for this config.
Structure is documented below.
*/
  ConnectedRepositories?: Array<BitbucketServerConfigConnectedRepository>;

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
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  SslCa?: string;

  // The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  ConfigId?: string;

  /*
Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.
*/
  HostUri?: string;

  /*
Secret Manager secrets needed by the config.
Structure is documented below.
*/
  Secrets?: BitbucketServerConfigSecrets;

  // Username of the account Cloud Build will use on Bitbucket Server.
  Username?: string;
}
export class BitbucketServerConfig extends Resource {
  // SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  public SslCa?: string;

  // Username of the account Cloud Build will use on Bitbucket Server.
  public Username?: string;

  // The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  public ConfigId?: string;

  /*
Connected Bitbucket Server repositories for this config.
Structure is documented below.
*/
  public ConnectedRepositories?: Array<BitbucketServerConfigConnectedRepository>;

  /*
Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.
*/
  public HostUri?: string;

  // The resource name for the config.
  public Name?: string;

  /*
The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.
*/
  public PeeredNetwork?: string;

  /*
Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.
*/
  public ApiKey?: string;

  // The location of this bitbucket server config.
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Secret Manager secrets needed by the config.
Structure is documented below.
*/
  public Secrets?: BitbucketServerConfigSecrets;

  // Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config.
  public WebhookKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of this bitbucket server config.",
      ),
      new DynamicUIProps(
        InputType.String,
        "HostUri",
        "Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.\nIf you need to change it, please create another BitbucketServerConfig.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SslCa",
        "SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ConfigId",
        "The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Secrets",
        "Secret Manager secrets needed by the config.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Username",
        "Username of the account Cloud Build will use on Bitbucket Server.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiKey",
        "Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.\nChanging this field will result in deleting/ recreating the resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ConnectedRepositories",
        "Connected Bitbucket Server repositories for this config.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PeeredNetwork",
        "The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.\nThis should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,\nno network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format\nprojects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
