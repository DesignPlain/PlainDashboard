import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectivityTestDestination } from "../types/ConnectivityTestDestination";
import { ConnectivityTestSource } from "../types/ConnectivityTestSource";

export interface ConnectivityTestArgs {
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
  Destination?: ConnectivityTestDestination;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Unique name for the connectivity test.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // IP Protocol of the test. When not provided, "TCP" is assumed.
  Protocol?: string;

  /*
Other projects that may be relevant for reachability analysis.
This is applicable to scenarios where a test can cross project
boundaries.
*/
  RelatedProjects?: Array<string>;

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
  Source?: ConnectivityTestSource;

  /*
The user-supplied description of the Connectivity Test.
Maximum of 512 characters.
*/
  Description?: string;
}
export class ConnectivityTest extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Resource labels to represent user-provided metadata.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Other projects that may be relevant for reachability analysis.
This is applicable to scenarios where a test can cross project
boundaries.
*/
  public RelatedProjects?: Array<string>;

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
  public Destination?: ConnectivityTestDestination;

  // Unique name for the connectivity test.
  public Name?: string;

  // IP Protocol of the test. When not provided, "TCP" is assumed.
  public Protocol?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

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
  public Source?: ConnectivityTestSource;

  /*
The user-supplied description of the Connectivity Test.
Maximum of 512 characters.
*/
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "The user-supplied description of the Connectivity Test.\nMaximum of 512 characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Destination",
        "Required. Destination specification of the Connectivity Test.\nYou can use a combination of destination IP address, Compute\nEngine VM instance, or VPC network to uniquely identify the\ndestination location.\nEven if the destination IP address is not unique, the source IP\nlocation is unique. Usually, the analysis can infer the destination\nendpoint from route information.\nIf the destination you specify is a VM instance and the instance has\nmultiple network interfaces, then you must also specify either a\ndestination IP address or VPC network to identify the destination\ninterface.\nA reachability analysis proceeds even if the destination location\nis ambiguous. However, the result can include endpoints that you\ndon't intend to test.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Resource labels to represent user-provided metadata.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Unique name for the connectivity test.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Protocol",
        'IP Protocol of the test. When not provided, "TCP" is assumed.',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "RelatedProjects",
        "Other projects that may be relevant for reachability analysis.\nThis is applicable to scenarios where a test can cross project\nboundaries.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Source",
        "Required. Source specification of the Connectivity Test.\nYou can use a combination of source IP address, virtual machine\n(VM) instance, or Compute Engine network to uniquely identify the\nsource location.\nExamples: If the source IP address is an internal IP address within\na Google Cloud Virtual Private Cloud (VPC) network, then you must\nalso specify the VPC network. Otherwise, specify the VM instance,\nwhich already contains its internal IP address and VPC network\ninformation.\nIf the source of the test is within an on-premises network, then\nyou must provide the destination VPC network.\nIf the source endpoint is a Compute Engine VM instance with multiple\nnetwork interfaces, the instance itself is not sufficient to\nidentify the endpoint. So, you must also specify the source IP\naddress or VPC network.\nA reachability analysis proceeds even if the source location is\nambiguous. However, the test result may include endpoints that\nyou don't intend to test.\nStructure is documented below.",
      ),
    ];
  }
}
