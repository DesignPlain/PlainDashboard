import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_ScopeState,
  gkehub_ScopeState_GetTypes,
} from "../types/gkehub_ScopeState";

export interface ScopeArgs {
  /*
The client-provided identifier of the scope.


- - -
*/
  scopeId?: string;

  /*
Labels for this Scope.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Scope-level cluster namespace labels. For the member clusters bound
to the Scope, these labels are applied to each namespace under the
Scope. Scope-level labels take precedence over Namespace-level
labels (`namespace_labels` in the Fleet Namespace resource) if they
share a key. Keys and values must be Kubernetes-conformant.
*/
  namespaceLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Scope extends Resource {
  // Time the Scope was created in UTC.
  public createTime?: string;

  // Time the Scope was deleted in UTC.
  public deleteTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
State of the scope resource.
Structure is documented below.
*/
  public states?: Array<gkehub_ScopeState>;

  // Google-generated UUID for this resource.
  public uid?: string;

  // Time the Scope was updated in UTC.
  public updateTime?: string;

  /*
Labels for this Scope.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The unique identifier of the scope
  public name?: string;

  /*
Scope-level cluster namespace labels. For the member clusters bound
to the Scope, these labels are applied to each namespace under the
Scope. Scope-level labels take precedence over Namespace-level
labels (`namespace_labels` in the Fleet Namespace resource) if they
share a key. Keys and values must be Kubernetes-conformant.
*/
  public namespaceLabels?: Map<string, string>;

  /*
The client-provided identifier of the scope.


- - -
*/
  public scopeId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "scopeId",
        "The client-provided identifier of the scope.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels for this Scope.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "namespaceLabels",
        "Scope-level cluster namespace labels. For the member clusters bound\nto the Scope, these labels are applied to each namespace under the\nScope. Scope-level labels take precedence over Namespace-level\nlabels (`namespace_labels` in the Fleet Namespace resource) if they\nshare a key. Keys and values must be Kubernetes-conformant.",
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
    ];
  }
}
