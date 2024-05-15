import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudbuild_WorkerPoolNetworkConfig,
  Cloudbuild_WorkerPoolNetworkConfig_GetTypes,
} from "../types/Cloudbuild_WorkerPoolNetworkConfig";
import {
  Cloudbuild_WorkerPoolWorkerConfig,
  Cloudbuild_WorkerPoolWorkerConfig_GetTypes,
} from "../types/Cloudbuild_WorkerPoolWorkerConfig";

export interface WorkerPoolArgs {
  // A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
  DisplayName?: string;

  // The location for the resource
  Location?: string;

  /*
User-defined name of the `WorkerPool`.


- - -
*/
  Name?: string;

  // Network configuration for the `WorkerPool`. Structure is documented below.
  NetworkConfig?: Cloudbuild_WorkerPoolNetworkConfig;

  // The project for the resource
  Project?: string;

  // Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.
  WorkerConfig?: Cloudbuild_WorkerPoolWorkerConfig;

  /*
User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size
limitations. --Note--: This field is non-authoritative, and will only manage the annotations present in your
configuration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;
}
export class WorkerPool extends Resource {
  // The location for the resource
  public Location?: string;

  /*
User-defined name of the `WorkerPool`.


- - -
*/
  public Name?: string;

  // Network configuration for the `WorkerPool`. Structure is documented below.
  public NetworkConfig?: Cloudbuild_WorkerPoolNetworkConfig;

  // The project for the resource
  public Project?: string;

  // Output only. WorkerPool state. Possible values: STATE_UNSPECIFIED, PENDING, APPROVED, REJECTED, CANCELLED
  public State?: string;

  // Output only. Time at which the request to update the `WorkerPool` was received.
  public UpdateTime?: string;

  // Output only. Time at which the request to create the `WorkerPool` was received.
  public CreateTime?: string;

  // A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
  public DisplayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, InputType.String>;

  // Output only. A unique identifier for the `WorkerPool`.
  public Uid?: string;

  // Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.
  public WorkerConfig?: Cloudbuild_WorkerPoolWorkerConfig;

  /*
User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size
limitations. --Note--: This field is non-authoritative, and will only manage the annotations present in your
configuration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. Time at which the request to delete the `WorkerPool` was received.
  public DeleteTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User-defined name of the `WorkerPool`.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "NetworkConfig",
        "Network configuration for the `WorkerPool`. Structure is documented below.",
        Cloudbuild_WorkerPoolNetworkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "WorkerConfig",
        "Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.",
        Cloudbuild_WorkerPoolWorkerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Annotations",
        "User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size\nlimitations. **Note**: This field is non-authoritative, and will only manage the annotations present in your\nconfiguration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.",
        [],
        false,
        false,
      ),
    ];
  }
}
