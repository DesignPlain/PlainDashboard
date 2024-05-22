import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_NamespaceState,
  gkehub_NamespaceState_GetTypes,
} from "../types/gkehub_NamespaceState";

export interface NamespaceArgs {
  /*
Labels for this Namespace.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Namespace-level cluster namespace labels. These labels are applied
to the related namespace of the member clusters bound to the parent
Scope. Scope-level labels (`namespace_labels` in the Fleet Scope
resource) take precedence over Namespace-level labels if they share
a key. Keys and values must be Kubernetes-conformant.
*/
  namespaceLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The name of the Scope instance.
  scope?: string;

  /*
Id of the scope


- - -
*/
  scopeId?: string;

  // The client-provided identifier of the namespace.
  scopeNamespaceId?: string;
}
export class Namespace extends Resource {
  /*
Labels for this Namespace.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The resource name for the namespace
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Id of the scope


- - -
*/
  public scopeId?: string;

  // The client-provided identifier of the namespace.
  public scopeNamespaceId?: string;

  /*
State of the namespace resource.
Structure is documented below.
*/
  public states?: Array<gkehub_NamespaceState>;

  // Time the Namespace was created in UTC.
  public createTime?: string;

  // Time the Namespace was deleted in UTC.
  public deleteTime?: string;

  // The name of the Scope instance.
  public scope?: string;

  // Time the Namespace was updated in UTC.
  public updateTime?: string;

  /*
Namespace-level cluster namespace labels. These labels are applied
to the related namespace of the member clusters bound to the parent
Scope. Scope-level labels (`namespace_labels` in the Fleet Scope
resource) take precedence over Namespace-level labels if they share
a key. Keys and values must be Kubernetes-conformant.
*/
  public namespaceLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Google-generated UUID for this resource.
  public uid?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels for this Namespace.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "namespaceLabels",
        "Namespace-level cluster namespace labels. These labels are applied\nto the related namespace of the member clusters bound to the parent\nScope. Scope-level labels (`namespace_labels` in the Fleet Scope\nresource) take precedence over Namespace-level labels if they share\na key. Keys and values must be Kubernetes-conformant.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
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
        "scope",
        "The name of the Scope instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scopeId",
        "Id of the scope\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scopeNamespaceId",
        "The client-provided identifier of the namespace.",
        [],
        true,
        true,
      ),
    ];
  }
}
