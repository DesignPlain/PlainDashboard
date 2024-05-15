import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vmwareengine_NetworkPolicyExternalIp,
  Vmwareengine_NetworkPolicyExternalIp_GetTypes,
} from "../types/Vmwareengine_NetworkPolicyExternalIp";
import {
  Vmwareengine_NetworkPolicyInternetAccess,
  Vmwareengine_NetworkPolicyInternetAccess_GetTypes,
} from "../types/Vmwareengine_NetworkPolicyInternetAccess";

export interface NetworkPolicyArgs {
  // User-provided description for this network policy.
  Description?: string;

  /*
IP address range in CIDR notation used to create internet access and external IP access.
An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.
*/
  EdgeServicesCidr?: string;

  /*
Network service that allows External IP addresses to be assigned to VMware workloads.
This service can only be enabled when internetAccess is also enabled.
Structure is documented below.
*/
  ExternalIp?: Vmwareengine_NetworkPolicyExternalIp;

  /*
Network service that allows VMware workloads to access the internet.
Structure is documented below.
*/
  InternetAccess?: Vmwareengine_NetworkPolicyInternetAccess;

  /*
The resource name of the location (region) to create the new network policy in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1
*/
  Location?: string;

  /*
The ID of the Network Policy.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  VmwareEngineNetwork?: string;
}
export class NetworkPolicy extends Resource {
  /*
Network service that allows External IP addresses to be assigned to VMware workloads.
This service can only be enabled when internetAccess is also enabled.
Structure is documented below.
*/
  public ExternalIp?: Vmwareengine_NetworkPolicyExternalIp;

  /*
Network service that allows VMware workloads to access the internet.
Structure is documented below.
*/
  public InternetAccess?: Vmwareengine_NetworkPolicyInternetAccess;

  /*
The ID of the Network Policy.


- - -
*/
  public Name?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  public VmwareEngineNetwork?: string;

  /*
The canonical name of the VMware Engine network in the form:
projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
*/
  public VmwareEngineNetworkCanonical?: string;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // User-provided description for this network policy.
  public Description?: string;

  /*
IP address range in CIDR notation used to create internet access and external IP access.
An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.
*/
  public EdgeServicesCidr?: string;

  /*
The resource name of the location (region) to create the new network policy in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1
*/
  public Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for this network policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "EdgeServicesCidr",
        'IP address range in CIDR notation used to create internet access and external IP access.\nAn RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any\nprefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ExternalIp",
        "Network service that allows External IP addresses to be assigned to VMware workloads.\nThis service can only be enabled when internetAccess is also enabled.\nStructure is documented below.",
        Vmwareengine_NetworkPolicyExternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InternetAccess",
        "Network service that allows VMware workloads to access the internet.\nStructure is documented below.",
        Vmwareengine_NetworkPolicyInternetAccess_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The resource name of the location (region) to create the new network policy in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-central1",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the Network Policy.\n\n\n- - -",
        [],
        false,
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
        "VmwareEngineNetwork",
        "The relative resource name of the VMware Engine network. Specify the name in the following form:\nprojects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}\ncan either be a project number or a project ID.",
        [],
        true,
        true,
      ),
    ];
  }
}
