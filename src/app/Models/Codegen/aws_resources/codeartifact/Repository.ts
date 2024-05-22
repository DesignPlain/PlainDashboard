import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  codeartifact_RepositoryUpstream,
  codeartifact_RepositoryUpstream_GetTypes,
} from "../types/codeartifact_RepositoryUpstream";
import {
  codeartifact_RepositoryExternalConnections,
  codeartifact_RepositoryExternalConnections_GetTypes,
} from "../types/codeartifact_RepositoryExternalConnections";

export interface RepositoryArgs {
  // The description of the repository.
  description?: string;

  // The domain that contains the created repository.
  domain?: string;

  // The account number of the AWS account that owns the domain.
  domainOwner?: string;

  // An array of external connections associated with the repository. Only one external connection can be set per repository. see External Connections.
  externalConnections?: codeartifact_RepositoryExternalConnections;

  // The name of the repository to create.
  repository?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. see Upstream
  upstreams?: Array<codeartifact_RepositoryUpstream>;
}
export class Repository extends Resource {
  // The description of the repository.
  public description?: string;

  // The domain that contains the created repository.
  public domain?: string;

  // The account number of the AWS account that owns the domain.
  public domainOwner?: string;

  // An array of external connections associated with the repository. Only one external connection can be set per repository. see External Connections.
  public externalConnections?: codeartifact_RepositoryExternalConnections;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The account number of the AWS account that manages the repository.
  public administratorAccount?: string;

  // The name of the repository to create.
  public repository?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. see Upstream
  public upstreams?: Array<codeartifact_RepositoryUpstream>;

  // The ARN of the repository.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "The description of the repository.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domain",
        "The domain that contains the created repository.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainOwner",
        "The account number of the AWS account that owns the domain.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "externalConnections",
        "An array of external connections associated with the repository. Only one external connection can be set per repository. see External Connections.",
        codeartifact_RepositoryExternalConnections_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "repository",
        "The name of the repository to create.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "upstreams",
        "A list of upstream repositories to associate with the repository. The order of the upstream repositories in the list determines their priority order when AWS CodeArtifact looks for a requested package version. see Upstream",
        codeartifact_RepositoryUpstream_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
