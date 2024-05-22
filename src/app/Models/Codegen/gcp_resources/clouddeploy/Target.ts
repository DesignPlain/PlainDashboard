import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_TargetExecutionConfig,
  clouddeploy_TargetExecutionConfig_GetTypes,
} from "../types/clouddeploy_TargetExecutionConfig";
import {
  clouddeploy_TargetGke,
  clouddeploy_TargetGke_GetTypes,
} from "../types/clouddeploy_TargetGke";
import {
  clouddeploy_TargetAnthosCluster,
  clouddeploy_TargetAnthosCluster_GetTypes,
} from "../types/clouddeploy_TargetAnthosCluster";
import {
  clouddeploy_TargetMultiTarget,
  clouddeploy_TargetMultiTarget_GetTypes,
} from "../types/clouddeploy_TargetMultiTarget";
import {
  clouddeploy_TargetRun,
  clouddeploy_TargetRun_GetTypes,
} from "../types/clouddeploy_TargetRun";

export interface TargetArgs {
  // Information specifying an Anthos Cluster.
  anthosCluster?: clouddeploy_TargetAnthosCluster;

  // Optional. The deploy parameters to use for this target.
  deployParameters?: Map<string, string>;

  // Optional. Description of the `Target`. Max length is 255 characters.
  description?: string;

  // Information specifying a multiTarget.
  multiTarget?: clouddeploy_TargetMultiTarget;

  /*
Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.



- - -
*/
  name?: string;

  // The project for the resource
  project?: string;

  // Information specifying a Cloud Run deployment target.
  run?: clouddeploy_TargetRun;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;

  // Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
  executionConfigs?: Array<clouddeploy_TargetExecutionConfig>;

  // Information specifying a GKE Cluster.
  gke?: clouddeploy_TargetGke;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location for the resource
  location?: string;

  // Optional. Whether or not the `Target` requires approval.
  requireApproval?: boolean;
}
export class Target extends Resource {
  // Output only. Time at which the `Target` was created.
  public createTime?: string;

  // Optional. The deploy parameters to use for this target.
  public deployParameters?: Map<string, string>;

  // Optional. Description of the `Target`. Max length is 255 characters.
  public description?: string;

  // Information specifying a GKE Cluster.
  public gke?: clouddeploy_TargetGke;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  // Optional. Whether or not the `Target` requires approval.
  public requireApproval?: boolean;

  // Information specifying a Cloud Run deployment target.
  public run?: clouddeploy_TargetRun;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public etag?: string;

  // Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
  public executionConfigs?: Array<clouddeploy_TargetExecutionConfig>;

  // The location for the resource
  public location?: string;

  // The project for the resource
  public project?: string;

  // Output only. Most recent time at which the `Target` was updated.
  public updateTime?: string;

  // Information specifying a multiTarget.
  public multiTarget?: clouddeploy_TargetMultiTarget;

  /*
Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.



- - -
*/
  public name?: string;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  // Information specifying an Anthos Cluster.
  public anthosCluster?: clouddeploy_TargetAnthosCluster;

  // Output only. Resource id of the `Target`.
  public targetId?: string;

  // Output only. Unique identifier of the `Target`.
  public uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "anthosCluster",
        "Information specifying an Anthos Cluster.",
        clouddeploy_TargetAnthosCluster_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "deployParameters",
        "Optional. The deploy parameters to use for this target.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Optional. Description of the `Target`. Max length is 255 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project for the resource",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "run",
        "Information specifying a Cloud Run deployment target.",
        clouddeploy_TargetRun_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "requireApproval",
        "Optional. Whether or not the `Target` requires approval.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "multiTarget",
        "Information specifying a multiTarget.",
        clouddeploy_TargetMultiTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the `Target`. Format is [a-z][a-z0-9\\-]{0,62}.\n\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "executionConfigs",
        "Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.",
        clouddeploy_TargetExecutionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "gke",
        "Information specifying a GKE Cluster.",
        clouddeploy_TargetGke_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
