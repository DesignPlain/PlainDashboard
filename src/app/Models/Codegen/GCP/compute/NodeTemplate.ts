import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_NodeTemplateServerBinding,
  Compute_NodeTemplateServerBinding_GetTypes,
} from "../types/Compute_NodeTemplateServerBinding";
import {
  Compute_NodeTemplateNodeTypeFlexibility,
  Compute_NodeTemplateNodeTypeFlexibility_GetTypes,
} from "../types/Compute_NodeTemplateNodeTypeFlexibility";

export interface NodeTemplateArgs {
  /*
The server binding policy for nodes using this template. Determines
where the nodes should restart following a maintenance event.
Structure is documented below.
*/
  ServerBinding?: Compute_NodeTemplateServerBinding;

  /*
CPU overcommit.
Default value is `NONE`.
Possible values are: `ENABLED`, `NONE`.
*/
  CpuOvercommitType?: string;

  // An optional textual description of the resource.
  Description?: string;

  // Name of the resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
*/
  Region?: string;

  /*
Labels to use for node affinity, which will be used in
instance scheduling.
*/
  NodeAffinityLabels?: Map<string, string>;

  /*
Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
*/
  NodeType?: string;

  /*
Flexible properties for the desired node type. Node groups that
use this node template will create nodes of a type that matches
these properties. Only one of nodeTypeFlexibility and nodeType can
be specified.
Structure is documented below.
*/
  NodeTypeFlexibility?: Compute_NodeTemplateNodeTypeFlexibility;
}
export class NodeTemplate extends Resource {
  /*
Flexible properties for the desired node type. Node groups that
use this node template will create nodes of a type that matches
these properties. Only one of nodeTypeFlexibility and nodeType can
be specified.
Structure is documented below.
*/
  public NodeTypeFlexibility?: Compute_NodeTemplateNodeTypeFlexibility;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The URI of the created resource.
  public SelfLink?: string;

  /*
CPU overcommit.
Default value is `NONE`.
Possible values are: `ENABLED`, `NONE`.
*/
  public CpuOvercommitType?: string;

  // An optional textual description of the resource.
  public Description?: string;

  /*
Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
*/
  public NodeType?: string;

  /*
Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  /*
The server binding policy for nodes using this template. Determines
where the nodes should restart following a maintenance event.
Structure is documented below.
*/
  public ServerBinding?: Compute_NodeTemplateServerBinding;

  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // Name of the resource.
  public Name?: string;

  /*
Labels to use for node affinity, which will be used in
instance scheduling.
*/
  public NodeAffinityLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "NodeAffinityLabels",
        "Labels to use for node affinity, which will be used in\ninstance scheduling.",
        InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeType",
        "Node type to use for nodes group that are created from this template.\nOnly one of nodeTypeFlexibility and nodeType can be specified.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NodeTypeFlexibility",
        "Flexible properties for the desired node type. Node groups that\nuse this node template will create nodes of a type that matches\nthese properties. Only one of nodeTypeFlexibility and nodeType can\nbe specified.\nStructure is documented below.",
        Compute_NodeTemplateNodeTypeFlexibility_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ServerBinding",
        "The server binding policy for nodes using this template. Determines\nwhere the nodes should restart following a maintenance event.\nStructure is documented below.",
        Compute_NodeTemplateServerBinding_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "CpuOvercommitType",
        "CPU overcommit.\nDefault value is `NONE`.\nPossible values are: `ENABLED`, `NONE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the resource.",
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
        "Region",
        "Region where nodes using the node template will be created.\nIf it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
