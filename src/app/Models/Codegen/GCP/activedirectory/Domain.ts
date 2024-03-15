import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DomainArgs {
  /*
The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks
*/
  ReservedIpRange?: string;

  /*
The name of delegated administrator account used to perform Active Directory operations.
If not specified, setupadmin will be used.
*/
  Admin?: string;

  /*
The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.
*/
  AuthorizedNetworks?: Array<string>;

  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  DomainName?: string;

  /*
Resource labels that can contain user-provided metadata
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
*/
  Locations?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Domain extends Resource {
  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  public DomainName?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels that can contain user-provided metadata
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
*/
  public Locations?: Array<string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The name of delegated administrator account used to perform Active Directory operations.
If not specified, setupadmin will be used.
*/
  public Admin?: string;

  /*
The fully-qualified domain name of the exposed domain used by clients to connect to the service.
Similar to what would be chosen for an Active Directory set up on an internal network.
*/
  public Fqdn?: string;

  // The unique name of the domain using the format: `projects/{project}/locations/global/domains/{domainName}`.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks
*/
  public ReservedIpRange?: string;

  /*
The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.
*/
  public AuthorizedNetworks?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Admin",
        "The name of delegated administrator account used to perform Active Directory operations.\nIf not specified, setupadmin will be used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AuthorizedNetworks",
        "The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.\nIf CIDR subnets overlap between networks, domain creation will fail.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DomainName",
        "The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,\nhttps://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels that can contain user-provided metadata\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Locations",
        "Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/]\ne.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ReservedIpRange",
        "The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger.\nRanges must be unique and non-overlapping with existing subnets in authorizedNetworks",
      ),
    ];
  }
}
