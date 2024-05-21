import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_PacketMirroringMirroredResources,
  compute_PacketMirroringMirroredResources_GetTypes,
} from "../types/compute_PacketMirroringMirroredResources";
import {
  compute_PacketMirroringCollectorIlb,
  compute_PacketMirroringCollectorIlb_GetTypes,
} from "../types/compute_PacketMirroringCollectorIlb";
import {
  compute_PacketMirroringNetwork,
  compute_PacketMirroringNetwork_GetTypes,
} from "../types/compute_PacketMirroringNetwork";
import {
  compute_PacketMirroringFilter,
  compute_PacketMirroringFilter_GetTypes,
} from "../types/compute_PacketMirroringFilter";

export interface PacketMirroringArgs {
  /*
The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)
that will be used as collector for mirrored traffic. The
specified forwarding rule must have is_mirroring_collector
set to true.
Structure is documented below.
*/
  collectorIlb?: compute_PacketMirroringCollectorIlb;

  // A human-readable description of the rule.
  description?: string;

  /*
Specifies the mirrored VPC network. Only packets in this network
will be mirrored. All mirrored VMs should have a NIC in the given
network. All mirrored subnetworks should belong to the given network.
Structure is documented below.
*/
  network?: compute_PacketMirroringNetwork;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  region?: string;

  /*
A filter for mirrored traffic.  If unset, all traffic is mirrored.
Structure is documented below.
*/
  filter?: compute_PacketMirroringFilter;

  /*
A means of specifying which resources to mirror.
Structure is documented below.
*/
  mirroredResources?: compute_PacketMirroringMirroredResources;

  // The name of the packet mirroring rule
  name?: string;

  /*
Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
*/
  priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class PacketMirroring extends Resource {
  /*
Specifies the mirrored VPC network. Only packets in this network
will be mirrored. All mirrored VMs should have a NIC in the given
network. All mirrored subnetworks should belong to the given network.
Structure is documented below.
*/
  public network?: compute_PacketMirroringNetwork;

  /*
Since only one rule can be active at a time, priority is
used to break ties in the case of two rules that apply to
the same instances.
*/
  public priority?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The Region in which the created address should reside.
If it is not provided, the provider region is used.
*/
  public region?: string;

  // A human-readable description of the rule.
  public description?: string;

  /*
A filter for mirrored traffic.  If unset, all traffic is mirrored.
Structure is documented below.
*/
  public filter?: compute_PacketMirroringFilter;

  // The name of the packet mirroring rule
  public name?: string;

  /*
The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)
that will be used as collector for mirrored traffic. The
specified forwarding rule must have is_mirroring_collector
set to true.
Structure is documented below.
*/
  public collectorIlb?: compute_PacketMirroringCollectorIlb;

  /*
A means of specifying which resources to mirror.
Structure is documented below.
*/
  public mirroredResources?: compute_PacketMirroringMirroredResources;

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
        "A human-readable description of the rule.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The Region in which the created address should reside.\nIf it is not provided, the provider region is used.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "mirroredResources",
        "A means of specifying which resources to mirror.\nStructure is documented below.",
        compute_PacketMirroringMirroredResources_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the packet mirroring rule",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "collectorIlb",
        "The Forwarding Rule resource (of type load_balancing_scheme=INTERNAL)\nthat will be used as collector for mirrored traffic. The\nspecified forwarding rule must have is_mirroring_collector\nset to true.\nStructure is documented below.",
        compute_PacketMirroringCollectorIlb_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "network",
        "Specifies the mirrored VPC network. Only packets in this network\nwill be mirrored. All mirrored VMs should have a NIC in the given\nnetwork. All mirrored subnetworks should belong to the given network.\nStructure is documented below.",
        compute_PacketMirroringNetwork_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "filter",
        "A filter for mirrored traffic.  If unset, all traffic is mirrored.\nStructure is documented below.",
        compute_PacketMirroringFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "Since only one rule can be active at a time, priority is\nused to break ties in the case of two rules that apply to\nthe same instances.",
        [],
        false,
        false,
      ),
    ];
  }
}
