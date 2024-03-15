import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ScopeState } from "../types/ScopeState";

export interface ScopeArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The client-provided identifier of the scope.


- - -
*/
  ScopeId?: string;

  /*
Labels for this Scope.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Scope-level cluster namespace labels. For the member clusters bound
to the Scope, these labels are applied to each namespace under the
Scope. Scope-level labels take precedence over Namespace-level
labels (`namespace_labels` in the Fleet Namespace resource) if they
share a key. Keys and values must be Kubernetes-conformant.
*/
  NamespaceLabels?: Map<string, string>;
}
export class Scope extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Time the Scope was updated in UTC.
  public UpdateTime?: string;

  // Time the Scope was created in UTC.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels for this Scope.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Scope-level cluster namespace labels. For the member clusters bound
to the Scope, these labels are applied to each namespace under the
Scope. Scope-level labels take precedence over Namespace-level
labels (`namespace_labels` in the Fleet Namespace resource) if they
share a key. Keys and values must be Kubernetes-conformant.
*/
  public NamespaceLabels?: Map<string, string>;

  /*
State of the scope resource.
Structure is documented below.
*/
  public States?: Array<ScopeState>;

  // Google-generated UUID for this resource.
  public Uid?: string;

  // Time the Scope was deleted in UTC.
  public DeleteTime?: string;

  // The unique identifier of the scope
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The client-provided identifier of the scope.


- - -
*/
  public ScopeId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ScopeId",
        "The client-provided identifier of the scope.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels for this Scope.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NamespaceLabels",
        "Scope-level cluster namespace labels. For the member clusters bound\nto the Scope, these labels are applied to each namespace under the\nScope. Scope-level labels take precedence over Namespace-level\nlabels (`namespace_labels` in the Fleet Namespace resource) if they\nshare a key. Keys and values must be Kubernetes-conformant.",
      ),
    ];
  }
}
