import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NodeTemplateServerBinding } from "../types/NodeTemplateServerBinding";
import { NodeTemplateNodeTypeFlexibility } from "../types/NodeTemplateNodeTypeFlexibility";

export interface NodeTemplateArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The server binding policy for nodes using this template. Determines
where the nodes should restart following a maintenance event.
Structure is documented below.
*/
  ServerBinding?: NodeTemplateServerBinding;

  /*
Flexible properties for the desired node type. Node groups that
use this node template will create nodes of a type that matches
these properties. Only one of nodeTypeFlexibility and nodeType can
be specified.
Structure is documented below.
*/
  NodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility;

  // An optional textual description of the resource.
  Description?: string;

  // Name of the resource.
  Name?: string;

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
Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
*/
  Region?: string;

  /*
CPU overcommit.
Default value is `NONE`.
Possible values are: `ENABLED`, `NONE`.
*/
  CpuOvercommitType?: string;
}
export class NodeTemplate extends Resource {
  // Creation timestamp in RFC3339 text format.
  public CreationTimestamp?: string;

  // Name of the resource.
  public Name?: string;

  /*
Node type to use for nodes group that are created from this template.
Only one of nodeTypeFlexibility and nodeType can be specified.
*/
  public NodeType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The server binding policy for nodes using this template. Determines
where the nodes should restart following a maintenance event.
Structure is documented below.
*/
  public ServerBinding?: NodeTemplateServerBinding;

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
Labels to use for node affinity, which will be used in
instance scheduling.
*/
  public NodeAffinityLabels?: Map<string, string>;

  /*
Flexible properties for the desired node type. Node groups that
use this node template will create nodes of a type that matches
these properties. Only one of nodeTypeFlexibility and nodeType can
be specified.
Structure is documented below.
*/
  public NodeTypeFlexibility?: NodeTemplateNodeTypeFlexibility;

  /*
Region where nodes using the node template will be created.
If it is not provided, the provider region is used.
*/
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServerBinding",
        "The server binding policy for nodes using this template. Determines\nwhere the nodes should restart following a maintenance event.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeTypeFlexibility",
        "Flexible properties for the desired node type. Node groups that\nuse this node template will create nodes of a type that matches\nthese properties. Only one of nodeTypeFlexibility and nodeType can\nbe specified.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional textual description of the resource.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the resource."),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where nodes using the node template will be created.\nIf it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "CpuOvercommitType",
        "CPU overcommit.\nDefault value is `NONE`.\nPossible values are: `ENABLED`, `NONE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeAffinityLabels",
        "Labels to use for node affinity, which will be used in\ninstance scheduling.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NodeType",
        "Node type to use for nodes group that are created from this template.\nOnly one of nodeTypeFlexibility and nodeType can be specified.",
      ),
    ];
  }
}
