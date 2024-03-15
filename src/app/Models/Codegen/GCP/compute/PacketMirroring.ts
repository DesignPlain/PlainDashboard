import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PacketMirroringNetwork } from "../types/PacketMirroringNetwork";
import { PacketMirroringFilter } from "../types/PacketMirroringFilter";
import { PacketMirroringMirroredResources } from "../types/PacketMirroringMirroredResources";
import { PacketMirroringCollectorIlb } from "../types/PacketMirroringCollectorIlb";

export interface PacketMirroringArgs {
  // A human-readable description of the rule.
  Description?: string;

  /*
A filter for mirrored traffic.  If unset, all traffic is mirrored.
Structure is documented below.
*/
  Filter?: PacketMirroringFilter;

  /*
A means of specifying which resources to mirror.
Structure is documented below.
*/
  MirroredResources?: PacketMirroringMirroredResources;

  // The name of the packet mirroring rule
  Name?: string;

  /*
Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
*/
  Priority?: number;

  /*
The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)
that will be used as collector for mirrored traffic. The
specified forwarding rule must have is_mirroring_collector
set to true.
Structure is documented below.
*/
  CollectorIlb?: PacketMirroringCollectorIlb;

  /*
Specifies the mirrored VPC network. Only packets in this network
will be mirrored. All mirrored VMs should have a NIC in the given
network. All mirrored subnetworks should belong to the given network.
Structure is documented below.
*/
  Network?: PacketMirroringNetwork;

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
  public CollectorIlb?: PacketMirroringCollectorIlb;

  // A human-readable description of the rule.
  public Description?: string;

  /*
Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
*/
  public Priority?: number;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
A filter for mirrored traffic.  If unset, all traffic is mirrored.
Structure is documented below.
*/
  public Filter?: PacketMirroringFilter;

  /*
A means of specifying which resources to mirror.
Structure is documented below.
*/
  public MirroredResources?: PacketMirroringMirroredResources;

  // The name of the packet mirroring rule
  public Name?: string;

  /*
Specifies the mirrored VPC network. Only packets in this network
will be mirrored. All mirrored VMs should have a NIC in the given
network. All mirrored subnetworks should belong to the given network.
Structure is documented below.
*/
  public Network?: PacketMirroringNetwork;

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
        "A human-readable description of the rule.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MirroredResources",
        "A means of specifying which resources to mirror.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the packet mirroring rule",
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "Since only one rule can be active at a time, priority is\nused to break ties in the case of two rules that apply to\nthe same instances.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Filter",
        "A filter for mirrored traffic.  If unset, all traffic is mirrored.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CollectorIlb",
        "The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)\nthat will be used as collector for mirrored traffic. The\nspecified forwarding rule must have is_mirroring_collector\nset to true.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "Specifies the mirrored VPC network. Only packets in this network\nwill be mirrored. All mirrored VMs should have a NIC in the given\nnetwork. All mirrored subnetworks should belong to the given network.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The Region in which the created address should reside.\nIf it is not provided, the provider region is used.",
      ),
    ];
  }
}
