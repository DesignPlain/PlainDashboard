import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DomainArgs {
  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  domainName?: string;

  /*
Resource labels that can contain user-provided metadata
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
*/
  locations?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks
*/
  reservedIpRange?: string;

  /*
The name of delegated administrator account used to perform Active Directory operations.
If not specified, setupadmin will be used.
*/
  admin?: string;

  /*
The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.
*/
  authorizedNetworks?: Array<string>;
}
export class Domain extends Resource {
  /*
The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger.
Ranges must be unique and non-overlapping with existing subnets in authorizedNetworks
*/
  public reservedIpRange?: string;

  /*
The name of delegated administrator account used to perform Active Directory operations.
If not specified, setupadmin will be used.
*/
  public admin?: string;

  /*
The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.
If CIDR subnets overlap between networks, domain creation will fail.
*/
  public authorizedNetworks?: Array<string>;

  /*
The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,
https://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.


- - -
*/
  public domainName?: string;

  /*
The fully-qualified domain name of the exposed domain used by clients to connect to the service.
Similar to what would be chosen for an Active Directory set up on an internal network.
*/
  public fqdn?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Resource labels that can contain user-provided metadata
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/]
e.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.
*/
  public locations?: Array<string>;

  // The unique name of the domain using the format: `projects/{project}/locations/global/domains/{domainName}`.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "reservedIpRange",
        "The CIDR range of internal addresses that are reserved for this domain. Reserved networks must be /24 or larger.\nRanges must be unique and non-overlapping with existing subnets in authorizedNetworks",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "admin",
        "The name of delegated administrator account used to perform Active Directory operations.\nIf not specified, setupadmin will be used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authorizedNetworks",
        "The full names of the Google Compute Engine networks the domain instance is connected to. The domain is only available on networks listed in authorizedNetworks.\nIf CIDR subnets overlap between networks, domain creation will fail.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The fully qualified domain name. e.g. mydomain.myorganization.com, with the restrictions,\nhttps://cloud.google.com/managed-microsoft-ad/reference/rest/v1/projects.locations.global.domains.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Resource labels that can contain user-provided metadata\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "locations",
        "Locations where domain needs to be provisioned. [regions][compute/docs/regions-zones/]\ne.g. us-west1 or us-east4 Service supports up to 4 locations at once. Each location will use a /26 block.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
