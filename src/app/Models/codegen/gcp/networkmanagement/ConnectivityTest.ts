import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkmanagement_ConnectivityTestSource,
  networkmanagement_ConnectivityTestSource_GetTypes,
} from '../types/networkmanagement_ConnectivityTestSource';
import {
  networkmanagement_ConnectivityTestDestination,
  networkmanagement_ConnectivityTestDestination_GetTypes,
} from '../types/networkmanagement_ConnectivityTestDestination';

export interface ConnectivityTestArgs {
  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // Unique name for the connectivity test.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // IP Protocol of the test. When not provided, "TCP" is assumed.
  protocol?: string;

  /*
Other projects that may be relevant for reachability analysis.
This is applicable to scenarios where a test can cross project
boundaries.
*/
  relatedProjects?: Array<string>;

  /*
Required. Source specification of the Connectivity Test.
You can use a combination of source IP address, virtual machine
(VM) instance, or Compute Engine network to uniquely identify the
source location.
Examples: If the source IP address is an internal IP address within
a Google Cloud Virtual Private Cloud (VPC) network, then you must
also specify the VPC network. Otherwise, specify the VM instance,
which already contains its internal IP address and VPC network
information.
If the source of the test is within an on-premises network, then
you must provide the destination VPC network.
If the source endpoint is a Compute Engine VM instance with multiple
network interfaces, the instance itself is not sufficient to
identify the endpoint. So, you must also specify the source IP
address or VPC network.
A reachability analysis proceeds even if the source location is
ambiguous. However, the test result may include endpoints that
you don't intend to test.
Structure is documented below.
*/
  source?: networkmanagement_ConnectivityTestSource;

  /*
The user-supplied description of the Connectivity Test.
Maximum of 512 characters.
*/
  description?: string;

  /*
Required. Destination specification of the Connectivity Test.
You can use a combination of destination IP address, Compute
Engine VM instance, or VPC network to uniquely identify the
destination location.
Even if the destination IP address is not unique, the source IP
location is unique. Usually, the analysis can infer the destination
endpoint from route information.
If the destination you specify is a VM instance and the instance has
multiple network interfaces, then you must also specify either a
destination IP address or VPC network to identify the destination
interface.
A reachability analysis proceeds even if the destination location
is ambiguous. However, the result can include endpoints that you
don't intend to test.
Structure is documented below.
*/
  destination?: networkmanagement_ConnectivityTestDestination;
}
export class ConnectivityTest extends DS_Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Unique name for the connectivity test.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // IP Protocol of the test. When not provided, "TCP" is assumed.
  public protocol?: string;

  /*
Other projects that may be relevant for reachability analysis.
This is applicable to scenarios where a test can cross project
boundaries.
*/
  public relatedProjects?: Array<string>;

  /*
Required. Source specification of the Connectivity Test.
You can use a combination of source IP address, virtual machine
(VM) instance, or Compute Engine network to uniquely identify the
source location.
Examples: If the source IP address is an internal IP address within
a Google Cloud Virtual Private Cloud (VPC) network, then you must
also specify the VPC network. Otherwise, specify the VM instance,
which already contains its internal IP address and VPC network
information.
If the source of the test is within an on-premises network, then
you must provide the destination VPC network.
If the source endpoint is a Compute Engine VM instance with multiple
network interfaces, the instance itself is not sufficient to
identify the endpoint. So, you must also specify the source IP
address or VPC network.
A reachability analysis proceeds even if the source location is
ambiguous. However, the test result may include endpoints that
you don't intend to test.
Structure is documented below.
*/
  public source?: networkmanagement_ConnectivityTestSource;

  /*
The user-supplied description of the Connectivity Test.
Maximum of 512 characters.
*/
  public description?: string;

  /*
Required. Destination specification of the Connectivity Test.
You can use a combination of destination IP address, Compute
Engine VM instance, or VPC network to uniquely identify the
destination location.
Even if the destination IP address is not unique, the source IP
location is unique. Usually, the analysis can infer the destination
endpoint from route information.
If the destination you specify is a VM instance and the instance has
multiple network interfaces, then you must also specify either a
destination IP address or VPC network to identify the destination
interface.
A reachability analysis proceeds even if the destination location
is ambiguous. However, the result can include endpoints that you
don't intend to test.
Structure is documented below.
*/
  public destination?: networkmanagement_ConnectivityTestDestination;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'destination',
        "Required. Destination specification of the Connectivity Test.\nYou can use a combination of destination IP address, Compute\nEngine VM instance, or VPC network to uniquely identify the\ndestination location.\nEven if the destination IP address is not unique, the source IP\nlocation is unique. Usually, the analysis can infer the destination\nendpoint from route information.\nIf the destination you specify is a VM instance and the instance has\nmultiple network interfaces, then you must also specify either a\ndestination IP address or VPC network to identify the destination\ninterface.\nA reachability analysis proceeds even if the destination location\nis ambiguous. However, the result can include endpoints that you\ndon't intend to test.\nStructure is documented below.",
        () => networkmanagement_ConnectivityTestDestination_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        'Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Unique name for the connectivity test.',
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
        'protocol',
        'IP Protocol of the test. When not provided, "TCP" is assumed.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'relatedProjects',
        'Other projects that may be relevant for reachability analysis.\nThis is applicable to scenarios where a test can cross project\nboundaries.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'source',
        "Required. Source specification of the Connectivity Test.\nYou can use a combination of source IP address, virtual machine\n(VM) instance, or Compute Engine network to uniquely identify the\nsource location.\nExamples: If the source IP address is an internal IP address within\na Google Cloud Virtual Private Cloud (VPC) network, then you must\nalso specify the VPC network. Otherwise, specify the VM instance,\nwhich already contains its internal IP address and VPC network\ninformation.\nIf the source of the test is within an on-premises network, then\nyou must provide the destination VPC network.\nIf the source endpoint is a Compute Engine VM instance with multiple\nnetwork interfaces, the instance itself is not sufficient to\nidentify the endpoint. So, you must also specify the source IP\naddress or VPC network.\nA reachability analysis proceeds even if the source location is\nambiguous. However, the test result may include endpoints that\nyou don't intend to test.\nStructure is documented below.",
        () => networkmanagement_ConnectivityTestSource_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The user-supplied description of the Connectivity Test.\nMaximum of 512 characters.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
