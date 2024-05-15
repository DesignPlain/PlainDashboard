import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_PacketMirroringCollectorIlb,
  Compute_PacketMirroringCollectorIlb_GetTypes,
} from "../types/Compute_PacketMirroringCollectorIlb";
import {
  Compute_PacketMirroringMirroredResources,
  Compute_PacketMirroringMirroredResources_GetTypes,
} from "../types/Compute_PacketMirroringMirroredResources";
import {
  Compute_PacketMirroringNetwork,
  Compute_PacketMirroringNetwork_GetTypes,
} from "../types/Compute_PacketMirroringNetwork";
import {
  Compute_PacketMirroringFilter,
  Compute_PacketMirroringFilter_GetTypes,
} from "../types/Compute_PacketMirroringFilter";

export interface PacketMirroringArgs {
  /*
The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)
that will be used as collector for mirrored traffic. The
specified forwarding rule must have is_mirroring_collector
set to true.
Structure is documented below.
*/
  CollectorIlb?: Compute_PacketMirroringCollectorIlb;

  // A human-readable description of the rule.
  Description?: string;

  /*
A means of specifying which resources to mirror.
Structure is documented below.
*/
  MirroredResources?: Compute_PacketMirroringMirroredResources;

  /*
Specifies the mirrored VPC network. Only packets in this network
will be mirrored. All mirrored VMs should have a NIC in the given
network. All mirrored subnetworks should belong to the given network.
Structure is documented below.
*/
  Network?: Compute_PacketMirroringNetwork;

  /*
A filter for mirrored traffic.  If unset, all traffic is mirrored.
Structure is documented below.
*/
  Filter?: Compute_PacketMirroringFilter;

  // The name of the packet mirroring rule
  Name?: string;

  /*
Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
*/
  Priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  Region?: string;
}
export class PacketMirroring extends Resource {
  /*
The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)
that will be used as collector for mirrored traffic. The
specified forwarding rule must have is_mirroring_collector
set to true.
Structure is documented below.
*/
  public CollectorIlb?: Compute_PacketMirroringCollectorIlb;

  // A human-readable description of the rule.
  public Description?: string;

  /*
A filter for mirrored traffic.  If unset, all traffic is mirrored.
Structure is documented below.
*/
  public Filter?: Compute_PacketMirroringFilter;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
A means of specifying which resources to mirror.
Structure is documented below.
*/
  public MirroredResources?: Compute_PacketMirroringMirroredResources;

  // The name of the packet mirroring rule
  public Name?: string;

  /*
Specifies the mirrored VPC network. Only packets in this network
will be mirrored. All mirrored VMs should have a NIC in the given
network. All mirrored subnetworks should belong to the given network.
Structure is documented below.
*/
  public Network?: Compute_PacketMirroringNetwork;

  /*
Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
*/
  public Priority?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Network",
        "Specifies the mirrored VPC network. Only packets in this network\nwill be mirrored. All mirrored VMs should have a NIC in the given\nnetwork. All mirrored subnetworks should belong to the given network.\nStructure is documented below.",
        Compute_PacketMirroringNetwork_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Filter",
        "A filter for mirrored traffic.  If unset, all traffic is mirrored.\nStructure is documented below.",
        Compute_PacketMirroringFilter_GetTypes(),
        false,
        false,
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
        "Region",
        "The Region in which the created address should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "CollectorIlb",
        "The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)\nthat will be used as collector for mirrored traffic. The\nspecified forwarding rule must have is_mirroring_collector\nset to true.\nStructure is documented below.",
        Compute_PacketMirroringCollectorIlb_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MirroredResources",
        "A means of specifying which resources to mirror.\nStructure is documented below.",
        Compute_PacketMirroringMirroredResources_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the packet mirroring rule",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "Since only one rule can be active at a time, priority is\nused to break ties in the case of two rules that apply to\nthe same instances.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A human-readable description of the rule.",
        [],
        false,
        true,
      ),
    ];
  }
}
