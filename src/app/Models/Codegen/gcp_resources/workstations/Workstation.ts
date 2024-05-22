import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WorkstationArgs {
  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  /*
The location where the workstation parent resources reside.


- - -
*/
  location?: string;

  // The ID of the parent workstation cluster.
  workstationClusterId?: string;

  // Human-readable name for this resource.
  displayName?: string;

  // 'Client-specified environment variables passed to the workstation container's entrypoint.'
  env?: Map<string, string>;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The ID of the parent workstation cluster config.
  workstationConfigId?: string;

  // ID to use for the workstation.
  workstationId?: string;
}
export class Workstation extends Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The ID of the parent workstation cluster config.
  public workstationConfigId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
Host to which clients can send HTTPS traffic that will be received by the workstation.
Authorized traffic will be received to the workstation as HTTP on port 80.
To send traffic to a different port, clients may prefix the host with the destination port in the format "{port}-{host}".
*/
  public host?: string;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // ID to use for the workstation.
  public workstationId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Full name of this resource.
  public name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Current state of the workstation.
  public state?: string;

  // Time when this resource was created.
  public createTime?: string;

  // Human-readable name for this resource.
  public displayName?: string;

  // 'Client-specified environment variables passed to the workstation container's entrypoint.'
  public env?: Map<string, string>;

  /*
The location where the workstation parent resources reside.


- - -
*/
  public location?: string;

  // A system-assigned unique identified for this resource.
  public uid?: string;

  // The ID of the parent workstation cluster.
  public workstationClusterId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "workstationId",
        "ID to use for the workstation.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workstationClusterId",
        "The ID of the parent workstation cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "env",
        "'Client-specified environment variables passed to the workstation container's entrypoint.'",
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
        "workstationConfigId",
        "The ID of the parent workstation cluster config.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location where the workstation parent resources reside.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "Human-readable name for this resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
