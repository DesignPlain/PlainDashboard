import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_NamespaceState,
  Gkehub_NamespaceState_GetTypes,
} from "../types/Gkehub_NamespaceState";

export interface NamespaceArgs {
  /*
Labels for this Namespace.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Namespace-level cluster namespace labels. These labels are applied
to the related namespace of the member clusters bound to the parent
Scope. Scope-level labels (`namespace_labels` in the Fleet Scope
resource) take precedence over Namespace-level labels if they share
a key. Keys and values must be Kubernetes-conformant.
*/
  NamespaceLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of the Scope instance.
  Scope?: string;

  /*
Id of the scope


- - -
*/
  ScopeId?: string;

  // The client-provided identifier of the namespace.
  ScopeNamespaceId?: string;
}
export class Namespace extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Google-generated UUID for this resource.
  public Uid?: string;

  /*
Labels for this Namespace.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The resource name for the namespace
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The client-provided identifier of the namespace.
  public ScopeNamespaceId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Time the Namespace was deleted in UTC.
  public DeleteTime?: string;

  // The name of the Scope instance.
  public Scope?: string;

  /*
Id of the scope


- - -
*/
  public ScopeId?: string;

  /*
State of the namespace resource.
Structure is documented below.
*/
  public States?: Array<Gkehub_NamespaceState>;

  // Time the Namespace was created in UTC.
  public CreateTime?: string;

  // Time the Namespace was updated in UTC.
  public UpdateTime?: string;

  /*
Namespace-level cluster namespace labels. These labels are applied
to the related namespace of the member clusters bound to the parent
Scope. Scope-level labels (`namespace_labels` in the Fleet Scope
resource) take precedence over Namespace-level labels if they share
a key. Keys and values must be Kubernetes-conformant.
*/
  public NamespaceLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ScopeNamespaceId",
        "The client-provided identifier of the namespace.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels for this Namespace.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "NamespaceLabels",
        "Namespace-level cluster namespace labels. These labels are applied\nto the related namespace of the member clusters bound to the parent\nScope. Scope-level labels (`namespace_labels` in the Fleet Scope\nresource) take precedence over Namespace-level labels if they share\na key. Keys and values must be Kubernetes-conformant.",
        InputType_Map_GetTypes(),
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
        "Scope",
        "The name of the Scope instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ScopeId",
        "Id of the scope\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
