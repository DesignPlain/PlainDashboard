import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NamespaceState } from "../types/NamespaceState";

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
  // Time the Namespace was created in UTC.
  public CreateTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The name of the Scope instance.
  public Scope?: string;

  // Google-generated UUID for this resource.
  public Uid?: string;

  // Time the Namespace was deleted in UTC.
  public DeleteTime?: string;

  // The resource name for the namespace
  public Name?: string;

  /*
Namespace-level cluster namespace labels. These labels are applied
to the related namespace of the member clusters bound to the parent
Scope. Scope-level labels (`namespace_labels` in the Fleet Scope
resource) take precedence over Namespace-level labels if they share
a key. Keys and values must be Kubernetes-conformant.
*/
  public NamespaceLabels?: Map<string, string>;

  // Time the Namespace was updated in UTC.
  public UpdateTime?: string;

  /*
Labels for this Namespace.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Id of the scope


- - -
*/
  public ScopeId?: string;

  /*
State of the namespace resource.
Structure is documented below.
*/
  public States?: Array<NamespaceState>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The client-provided identifier of the namespace.
  public ScopeNamespaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels for this Namespace.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NamespaceLabels",
        "Namespace-level cluster namespace labels. These labels are applied\nto the related namespace of the member clusters bound to the parent\nScope. Scope-level labels (`namespace_labels` in the Fleet Scope\nresource) take precedence over Namespace-level labels if they share\na key. Keys and values must be Kubernetes-conformant.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scope",
        "The name of the Scope instance.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ScopeId",
        "Id of the scope\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "ScopeNamespaceId",
        "The client-provided identifier of the namespace.",
      ),
    ];
  }
}
