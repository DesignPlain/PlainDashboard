import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WorkstationArgs {
  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The ID of the parent workstation cluster.
  WorkstationClusterId?: string;

  // 'Client-specified environment variables passed to the workstation container's entrypoint.'
  Env?: Map<string, string>;

  // Human-readable name for this resource.
  DisplayName?: string;

  /*
The location where the workstation parent resources reside.


- - -
*/
  Location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The ID of the parent workstation cluster config.
  WorkstationConfigId?: string;

  // ID to use for the workstation.
  WorkstationId?: string;

  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;
}
export class Workstation extends Resource {
  /*
Client-specified annotations. This is distinct from labels.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // 'Client-specified environment variables passed to the workstation container's entrypoint.'
  public Env?: Map<string, string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // A system-assigned unique identified for this resource.
  public Uid?: string;

  // The ID of the parent workstation cluster config.
  public WorkstationConfigId?: string;

  // Human-readable name for this resource.
  public DisplayName?: string;

  /*
Host to which clients can send HTTPS traffic that will be received by the workstation.
Authorized traffic will be received to the workstation as HTTP on port 80.
To send traffic to a different port, clients may prefix the host with the destination port in the format "{port}-{host}".
*/
  public Host?: string;

  /*
Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // ID to use for the workstation.
  public WorkstationId?: string;

  // Time when this resource was created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Full name of this resource.
  public Name?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
The location where the workstation parent resources reside.


- - -
*/
  public Location?: string;

  // Current state of the workstation.
  public State?: string;

  // The ID of the parent workstation cluster.
  public WorkstationClusterId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location where the workstation parent resources reside.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Client-specified annotations. This is distinct from labels.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Client-specified labels that are applied to the resource and that are also propagated to the underlying Compute Engine resources.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkstationClusterId",
        "The ID of the parent workstation cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Env",
        "'Client-specified environment variables passed to the workstation container's entrypoint.'",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "Human-readable name for this resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkstationConfigId",
        "The ID of the parent workstation cluster config.",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkstationId",
        "ID to use for the workstation.",
      ),
    ];
  }
}
