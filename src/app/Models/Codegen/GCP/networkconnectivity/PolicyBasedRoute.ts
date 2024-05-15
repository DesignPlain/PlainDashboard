import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Networkconnectivity_PolicyBasedRouteVirtualMachine,
  Networkconnectivity_PolicyBasedRouteVirtualMachine_GetTypes,
} from "../types/Networkconnectivity_PolicyBasedRouteVirtualMachine";
import {
  Networkconnectivity_PolicyBasedRouteFilter,
  Networkconnectivity_PolicyBasedRouteFilter_GetTypes,
} from "../types/Networkconnectivity_PolicyBasedRouteFilter";
import {
  Networkconnectivity_PolicyBasedRouteInterconnectAttachment,
  Networkconnectivity_PolicyBasedRouteInterconnectAttachment_GetTypes,
} from "../types/Networkconnectivity_PolicyBasedRouteInterconnectAttachment";
import {
  Networkconnectivity_PolicyBasedRouteWarning,
  Networkconnectivity_PolicyBasedRouteWarning_GetTypes,
} from "../types/Networkconnectivity_PolicyBasedRouteWarning";

export interface PolicyBasedRouteArgs {
  /*
VM instances to which this policy-based route applies to.
Structure is documented below.
*/
  VirtualMachine?: Networkconnectivity_PolicyBasedRouteVirtualMachine;

  // An optional description of this resource.
  Description?: string;

  /*
The filter to match L4 traffic.
Structure is documented below.
*/
  Filter?: Networkconnectivity_PolicyBasedRouteFilter;

  /*
The interconnect attachments that this policy-based route applies to.
Structure is documented below.
*/
  InterconnectAttachment?: Networkconnectivity_PolicyBasedRouteInterconnectAttachment;

  // The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.
  NextHopIlbIp?: string;

  // The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.
  Priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name of the policy based route.
  Name?: string;

  // Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.
  Network?: string;

  /*
Other routes that will be referenced to determine the next hop of the packet.
Possible values are: `DEFAULT_ROUTING`.
*/
  NextHopOtherRoutes?: string;
}
export class PolicyBasedRoute extends Resource {
  // Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.
  public Network?: string;

  /*
Other routes that will be referenced to determine the next hop of the packet.
Possible values are: `DEFAULT_ROUTING`.
*/
  public NextHopOtherRoutes?: string;

  // The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.
  public Priority?: number;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The filter to match L4 traffic.
Structure is documented below.
*/
  public Filter?: Networkconnectivity_PolicyBasedRouteFilter;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Time when the policy-based route was created.
  public UpdateTime?: string;

  /*
If potential misconfigurations are detected for this route, this field will be populated with warning messages.
Structure is documented below.
*/
  public Warnings?: Array<Networkconnectivity_PolicyBasedRouteWarning>;

  // An optional description of this resource.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The interconnect attachments that this policy-based route applies to.
Structure is documented below.
*/
  public InterconnectAttachment?: Networkconnectivity_PolicyBasedRouteInterconnectAttachment;

  // Type of this resource.
  public Kind?: string;

  /*
User-defined labels.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
VM instances to which this policy-based route applies to.
Structure is documented below.
*/
  public VirtualMachine?: Networkconnectivity_PolicyBasedRouteVirtualMachine;

  // Time when the policy-based route was created.
  public CreateTime?: string;

  // The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.
  public NextHopIlbIp?: string;

  // The name of the policy based route.
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional description of this resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Filter",
        "The filter to match L4 traffic.\nStructure is documented below.",
        Networkconnectivity_PolicyBasedRouteFilter_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopIlbIp",
        "The IP address of a global-access-enabled L4 ILB that is the next hop for matching packets.",
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
        InputType.Map,
        "Labels",
        "User-defined labels.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the policy based route.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NextHopOtherRoutes",
        "Other routes that will be referenced to determine the next hop of the packet.\nPossible values are: `DEFAULT_ROUTING`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "VirtualMachine",
        "VM instances to which this policy-based route applies to.\nStructure is documented below.",
        Networkconnectivity_PolicyBasedRouteVirtualMachine_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "InterconnectAttachment",
        "The interconnect attachments that this policy-based route applies to.\nStructure is documented below.",
        Networkconnectivity_PolicyBasedRouteInterconnectAttachment_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "The priority of this policy-based route. Priority is used to break ties in cases where there are more than one matching policy-based routes found. In cases where multiple policy-based routes are matched, the one with the lowest-numbered priority value wins. The default value is 1000. The priority value must be from 1 to 65535, inclusive.",
        [],
        false,
        true,
      ),
    ];
  }
}
