import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { WorkerPoolNetworkConfig } from "../types/WorkerPoolNetworkConfig";
import { WorkerPoolWorkerConfig } from "../types/WorkerPoolWorkerConfig";

export interface WorkerPoolArgs {
  // The location for the resource
  Location?: string;

  /*
User-defined name of the `WorkerPool`.


- - -
*/
  Name?: string;

  // Network configuration for the `WorkerPool`. Structure is documented below.
  NetworkConfig?: WorkerPoolNetworkConfig;

  // The project for the resource
  Project?: string;

  // Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.
  WorkerConfig?: WorkerPoolWorkerConfig;

  /*
User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size
limitations. --Note--: This field is non-authoritative, and will only manage the annotations present in your
configuration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
  DisplayName?: string;
}
export class WorkerPool extends Resource {
  /*
User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size
limitations. --Note--: This field is non-authoritative, and will only manage the annotations present in your
configuration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // Output only. WorkerPool state. Possible values: STATE_UNSPECIFIED, PENDING, APPROVED, REJECTED, CANCELLED
  public State?: string;

  // Output only. A unique identifier for the `WorkerPool`.
  public Uid?: string;

  // Output only. Time at which the request to update the `WorkerPool` was received.
  public UpdateTime?: string;

  // Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.
  public WorkerConfig?: WorkerPoolWorkerConfig;

  // Output only. Time at which the request to create the `WorkerPool` was received.
  public CreateTime?: string;

  // Output only. Time at which the request to delete the `WorkerPool` was received.
  public DeleteTime?: string;

  // The location for the resource
  public Location?: string;

  /*
User-defined name of the `WorkerPool`.


- - -
*/
  public Name?: string;

  // Network configuration for the `WorkerPool`. Structure is documented below.
  public NetworkConfig?: WorkerPoolNetworkConfig;

  // The project for the resource
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User-defined name of the `WorkerPool`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "NetworkConfig",
        "Network configuration for the `WorkerPool`. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkerConfig",
        "Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size\nlimitations. **Note**: This field is non-authoritative, and will only manage the annotations present in your\nconfiguration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.",
      ),
    ];
  }
}
