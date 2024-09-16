import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vmwareengine_NetworkPolicyExternalIp,
  vmwareengine_NetworkPolicyExternalIp_GetTypes,
} from '../types/vmwareengine_NetworkPolicyExternalIp';
import {
  vmwareengine_NetworkPolicyInternetAccess,
  vmwareengine_NetworkPolicyInternetAccess_GetTypes,
} from '../types/vmwareengine_NetworkPolicyInternetAccess';

export interface NetworkPolicyArgs {
  /*
Network service that allows External IP addresses to be assigned to VMware workloads.
This service can only be enabled when internetAccess is also enabled.
Structure is documented below.
*/
  externalIp?: vmwareengine_NetworkPolicyExternalIp;

  /*
Network service that allows VMware workloads to access the internet.
Structure is documented below.
*/
  internetAccess?: vmwareengine_NetworkPolicyInternetAccess;

  /*
The resource name of the location (region) to create the new network policy in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1
*/
  location?: string;

  /*
The ID of the Network Policy.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  vmwareEngineNetwork?: string;

  // User-provided description for this network policy.
  description?: string;

  /*
IP address range in CIDR notation used to create internet access and external IP access.
An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.
*/
  edgeServicesCidr?: string;
}
export class NetworkPolicy extends DS_Resource {
  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
The resource name of the location (region) to create the new network policy in.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-central1
*/
  public location?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
The relative resource name of the VMware Engine network. Specify the name in the following form:
projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}
can either be a project number or a project ID.
*/
  public vmwareEngineNetwork?: string;

  /*
The canonical name of the VMware Engine network in the form:
projects/{project_number}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
*/
  public vmwareEngineNetworkCanonical?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // System-generated unique identifier for the resource.
  public uid?: string;

  // User-provided description for this network policy.
  public description?: string;

  /*
IP address range in CIDR notation used to create internet access and external IP access.
An RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any
prefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.
*/
  public edgeServicesCidr?: string;

  /*
Network service that allows External IP addresses to be assigned to VMware workloads.
This service can only be enabled when internetAccess is also enabled.
Structure is documented below.
*/
  public externalIp?: vmwareengine_NetworkPolicyExternalIp;

  /*
Network service that allows VMware workloads to access the internet.
Structure is documented below.
*/
  public internetAccess?: vmwareengine_NetworkPolicyInternetAccess;

  /*
The ID of the Network Policy.


- - -
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'externalIp',
        'Network service that allows External IP addresses to be assigned to VMware workloads.\nThis service can only be enabled when internetAccess is also enabled.\nStructure is documented below.',
        () => vmwareengine_NetworkPolicyExternalIp_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'internetAccess',
        'Network service that allows VMware workloads to access the internet.\nStructure is documented below.',
        () => vmwareengine_NetworkPolicyInternetAccess_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'location',
        'The resource name of the location (region) to create the new network policy in.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-central1',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The ID of the Network Policy.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vmwareEngineNetwork',
        'The relative resource name of the VMware Engine network. Specify the name in the following form:\nprojects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId} where {project}\ncan either be a project number or a project ID.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'User-provided description for this network policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'edgeServicesCidr',
        'IP address range in CIDR notation used to create internet access and external IP access.\nAn RFC 1918 CIDR block, with a "/26" prefix, is required. The range cannot overlap with any\nprefixes either in the consumer VPC network or in use by the private clouds attached to that VPC network.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
