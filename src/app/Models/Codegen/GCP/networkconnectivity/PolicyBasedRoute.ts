import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  networkconnectivity_PolicyBasedRouteWarning,
  networkconnectivity_PolicyBasedRouteWarning_GetTypes,
} from "../types/networkconnectivity_PolicyBasedRouteWarning";
import {
  networkconnectivity_PolicyBasedRouteFilter,
  networkconnectivity_PolicyBasedRouteFilter_GetTypes,
} from "../types/networkconnectivity_PolicyBasedRouteFilter";
import {
  networkconnectivity_PolicyBasedRouteInterconnectAttachment,
  networkconnectivity_PolicyBasedRouteInterconnectAttachment_GetTypes,
} from "../types/networkconnectivity_PolicyBasedRouteInterconnectAttachment";
import {
  networkconnectivity_PolicyBasedRouteVirtualMachine,
  networkconnectivity_PolicyBasedRouteVirtualMachine_GetTypes,
} from "../types/networkconnectivity_PolicyBasedRouteVirtualMachine";

export interface PolicyBasedRouteArgs {
  /*
The filter to match L4 traffic.
Structure is documented below.
*/
  filter?: networkconnectivity_PolicyBasedRouteFilter;

  // The name of the policy based route.
  name?: string;

  // Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.
  network?: string;

  /*
Other routes that will be referenced to determine the next hop of the packet.
Possible values are: `DEFAULT_ROUTING`.
*/
  nextHopOtherRoutes?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // An optional description of this resource.
  description?: string;

  /*
The interconnect attachments that this policy-based route applies to.
Structure is documented below.
*/
  interconnectAttachment?: networkconnectivity_PolicyBasedRouteInterconnectAttachment;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.
  nextHopIlbIp?: string;

  // The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.
  priority?: number;

  /*
VM instances to which this policy-based route applies to.
Structure is documented below.
*/
  virtualMachine?: networkconnectivity_PolicyBasedRouteVirtualMachine;
}
export class PolicyBasedRoute extends Resource {
  // Time when the policy-based route was created.
  public createTime?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.
  public nextHopIlbIp?: string;

  /*
VM instances to which this policy-based route applies to.
Structure is documented below.
*/
  public virtualMachine?: networkconnectivity_PolicyBasedRouteVirtualMachine;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
If potential misconfigurations are detected for this route, this field will be populated with warning messages.
Structure is documented below.
*/
  public warnings?: Array<networkconnectivity_PolicyBasedRouteWarning>;

  // An optional description of this resource.
  public description?: string;

  /*
The interconnect attachments that this policy-based route applies to.
Structure is documented below.
*/
  public interconnectAttachment?: networkconnectivity_PolicyBasedRouteInterconnectAttachment;

  /*
Other routes that will be referenced to determine the next hop of the packet.
Possible values are: `DEFAULT_ROUTING`.
*/
  public nextHopOtherRoutes?: string;

  // The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.
  public priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Type of this resource.
  public kind?: string;

  // The name of the policy based route.
  public name?: string;

  // Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.
  public network?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The filter to match L4 traffic.
Structure is documented below.
*/
  public filter?: networkconnectivity_PolicyBasedRouteFilter;

  // Time when the policy-based route was created.
  public updateTime?: string;

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
        "description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "interconnectAttachment",
        "The interconnect attachments that this policy-based route applies to.\nStructure is documented below.",
        networkconnectivity_PolicyBasedRouteInterconnectAttachment_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "nextHopIlbIp",
        "The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "virtualMachine",
        "VM instances to which this policy-based route applies to.\nStructure is documented below.",
        networkconnectivity_PolicyBasedRouteVirtualMachine_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "filter",
        "The filter to match L4 traffic.\nStructure is documented below.",
        networkconnectivity_PolicyBasedRouteFilter_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the policy based route.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User-defined labels.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        "Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "nextHopOtherRoutes",
        "Other routes that will be referenced to determine the next hop of the packet.\nPossible values are: `DEFAULT_ROUTING`.",
        [],
        false,
        true,
      ),
    ];
  }
}
