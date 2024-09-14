import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudbuild_WorkerPoolNetworkConfig,
  cloudbuild_WorkerPoolNetworkConfig_GetTypes,
} from "../types/cloudbuild_WorkerPoolNetworkConfig";
import {
  cloudbuild_WorkerPoolWorkerConfig,
  cloudbuild_WorkerPoolWorkerConfig_GetTypes,
} from "../types/cloudbuild_WorkerPoolWorkerConfig";

export interface WorkerPoolArgs {
  /*
User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size
limitations. --Note--: This field is non-authoritative, and will only manage the annotations present in your
configuration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
  displayName?: string;

  // The location for the resource
  location?: string;

  /*
User-defined name of the `WorkerPool`.


- - -
*/
  name?: string;

  // Network configuration for the `WorkerPool`. Structure is documented below.
  networkConfig?: cloudbuild_WorkerPoolNetworkConfig;

  // The project for the resource
  project?: string;

  // Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.
  workerConfig?: cloudbuild_WorkerPoolWorkerConfig;
}
export class WorkerPool extends DS_Resource {
  /*
User-defined name of the `WorkerPool`.


- - -
*/
  public name?: string;

  // Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.
  public workerConfig?: cloudbuild_WorkerPoolWorkerConfig;

  /*
User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size
limitations. --Note--: This field is non-authoritative, and will only manage the annotations present in your
configuration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.
  public displayName?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // The location for the resource
  public location?: string;

  // Output only. WorkerPool state. Possible values: STATE_UNSPECIFIED, PENDING, APPROVED, REJECTED, CANCELLED
  public state?: string;

  // Output only. A unique identifier for the `WorkerPool`.
  public uid?: string;

  // Output only. Time at which the request to update the `WorkerPool` was received.
  public updateTime?: string;

  // Output only. Time at which the request to create the `WorkerPool` was received.
  public createTime?: string;

  // Output only. Time at which the request to delete the `WorkerPool` was received.
  public deleteTime?: string;

  // Network configuration for the `WorkerPool`. Structure is documented below.
  public networkConfig?: cloudbuild_WorkerPoolNetworkConfig;

  // The project for the resource
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "User-defined name of the `WorkerPool`.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfig",
        "Network configuration for the `WorkerPool`. Structure is documented below.",
        () => cloudbuild_WorkerPoolNetworkConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "workerConfig",
        "Configuration to be used for a creating workers in the `WorkerPool`. Structure is documented below.",
        () => cloudbuild_WorkerPoolWorkerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "User specified annotations. See https://google.aip.dev/128#annotations for more details such as format and size\nlimitations. **Note**: This field is non-authoritative, and will only manage the annotations present in your\nconfiguration. Please refer to the field `effective_annotations` for all of the annotations present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "A user-specified, human-readable name for the `WorkerPool`. If provided, this value must be 1-63 characters.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        () => [],
        true,
        true,
      ),
    ];
  }
}
