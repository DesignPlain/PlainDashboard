import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudbuild_BitbucketServerConfigSecrets,
  cloudbuild_BitbucketServerConfigSecrets_GetTypes,
} from "../types/cloudbuild_BitbucketServerConfigSecrets";
import {
  cloudbuild_BitbucketServerConfigConnectedRepository,
  cloudbuild_BitbucketServerConfigConnectedRepository_GetTypes,
} from "../types/cloudbuild_BitbucketServerConfigConnectedRepository";

export interface BitbucketServerConfigArgs {
  // The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  configId?: string;

  /*
Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.
*/
  hostUri?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Secret Manager secrets needed by the config.
Structure is documented below.
*/
  secrets?: cloudbuild_BitbucketServerConfigSecrets;

  // Username of the account Cloud Build will use on Bitbucket Server.
  username?: string;

  /*
Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.
*/
  apiKey?: string;

  /*
Connected Bitbucket Server repositories for this config.
Structure is documented below.
*/
  connectedRepositories?: Array<cloudbuild_BitbucketServerConfigConnectedRepository>;

  // The location of this bitbucket server config.
  location?: string;

  /*
The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.
*/
  peeredNetwork?: string;

  // SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  sslCa?: string;
}
export class BitbucketServerConfig extends Resource {
  // SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.
  public sslCa?: string;

  // Username of the account Cloud Build will use on Bitbucket Server.
  public username?: string;

  /*
Connected Bitbucket Server repositories for this config.
Structure is documented below.
*/
  public connectedRepositories?: Array<cloudbuild_BitbucketServerConfigConnectedRepository>;

  /*
Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.
If you need to change it, please create another BitbucketServerConfig.
*/
  public hostUri?: string;

  // The location of this bitbucket server config.
  public location?: string;

  // The resource name for the config.
  public name?: string;

  /*
The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.
This should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,
no network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format
projects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.
*/
  public peeredNetwork?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.
Changing this field will result in deleting/ recreating the resource.
*/
  public apiKey?: string;

  // The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.
  public configId?: string;

  /*
Secret Manager secrets needed by the config.
Structure is documented below.
*/
  public secrets?: cloudbuild_BitbucketServerConfigSecrets;

  // Output only. UUID included in webhook requests. The UUID is used to look up the corresponding config.
  public webhookKey?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "hostUri",
        "Immutable. The URI of the Bitbucket Server host. Once this field has been set, it cannot be changed.\nIf you need to change it, please create another BitbucketServerConfig.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "sslCa",
        "SSL certificate to use for requests to Bitbucket Server. The format should be PEM format but the extension can be one of .pem, .cer, or .crt.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of this bitbucket server config.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "peeredNetwork",
        "The network to be used when reaching out to the Bitbucket Server instance. The VPC network must be enabled for private service connection.\nThis should be set if the Bitbucket Server instance is hosted on-premises and not reachable by public internet. If this field is left empty,\nno network peering will occur and calls to the Bitbucket Server instance will be made over the public internet. Must be in the format\nprojects/{project}/global/networks/{network}, where {project} is a project number or id and {network} is the name of a VPC network in the project.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configId",
        "The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "secrets",
        "Secret Manager secrets needed by the config.\nStructure is documented below.",
        cloudbuild_BitbucketServerConfigSecrets_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "username",
        "Username of the account Cloud Build will use on Bitbucket Server.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiKey",
        "Immutable. API Key that will be attached to webhook. Once this field has been set, it cannot be changed.\nChanging this field will result in deleting/ recreating the resource.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "connectedRepositories",
        "Connected Bitbucket Server repositories for this config.\nStructure is documented below.",
        cloudbuild_BitbucketServerConfigConnectedRepository_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
