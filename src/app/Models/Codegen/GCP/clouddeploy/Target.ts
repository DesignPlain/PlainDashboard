import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_TargetRun,
  Clouddeploy_TargetRun_GetTypes,
} from "../types/Clouddeploy_TargetRun";
import {
  Clouddeploy_TargetAnthosCluster,
  Clouddeploy_TargetAnthosCluster_GetTypes,
} from "../types/Clouddeploy_TargetAnthosCluster";
import {
  Clouddeploy_TargetMultiTarget,
  Clouddeploy_TargetMultiTarget_GetTypes,
} from "../types/Clouddeploy_TargetMultiTarget";
import {
  Clouddeploy_TargetExecutionConfig,
  Clouddeploy_TargetExecutionConfig_GetTypes,
} from "../types/Clouddeploy_TargetExecutionConfig";
import {
  Clouddeploy_TargetGke,
  Clouddeploy_TargetGke_GetTypes,
} from "../types/Clouddeploy_TargetGke";

export interface TargetArgs {
  // Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
  ExecutionConfigs?: Array<Clouddeploy_TargetExecutionConfig>;

  // Information specifying a GKE Cluster.
  Gke?: Clouddeploy_TargetGke;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Information specifying a Cloud Run deployment target.
  Run?: Clouddeploy_TargetRun;

  // The project for the resource
  Project?: string;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // Information specifying an Anthos Cluster.
  AnthosCluster?: Clouddeploy_TargetAnthosCluster;

  // Optional. The deploy parameters to use for this target.
  DeployParameters?: Map<string, string>;

  // Optional. Description of the `Target`. Max length is 255 characters.
  Description?: string;

  // The location for the resource
  Location?: string;

  // Information specifying a multiTarget.
  MultiTarget?: Clouddeploy_TargetMultiTarget;

  /*
Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.



- - -
*/
  Name?: string;

  // Optional. Whether or not the `Target` requires approval.
  RequireApproval?: boolean;
}
export class Target extends Resource {
  // Optional. Whether or not the `Target` requires approval.
  public RequireApproval?: boolean;

  // Output only. Most recent time at which the `Target` was updated.
  public UpdateTime?: string;

  // Output only. Time at which the `Target` was created.
  public CreateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, InputType.String>;

  // Information specifying a multiTarget.
  public MultiTarget?: Clouddeploy_TargetMultiTarget;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, InputType.String>;

  // The location for the resource
  public Location?: string;

  // The project for the resource
  public Project?: string;

  // Information specifying a Cloud Run deployment target.
  public Run?: Clouddeploy_TargetRun;

  // Output only. Resource id of the `Target`.
  public TargetId?: string;

  // Information specifying an Anthos Cluster.
  public AnthosCluster?: Clouddeploy_TargetAnthosCluster;

  // Optional. The deploy parameters to use for this target.
  public DeployParameters?: Map<string, string>;

  // Optional. Description of the `Target`. Max length is 255 characters.
  public Description?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, InputType.String>;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  // Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
  public ExecutionConfigs?: Array<Clouddeploy_TargetExecutionConfig>;

  /*
Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.



- - -
*/
  public Name?: string;

  // Information specifying a GKE Cluster.
  public Gke?: Clouddeploy_TargetGke;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Output only. Unique identifier of the `Target`.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "DeployParameters",
        "Optional. The deploy parameters to use for this target.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the `Target`. Max length is 255 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the `Target`. Format is [a-z][a-z0-9\\-]{0,62}.\n\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Gke",
        "Information specifying a GKE Cluster.",
        Clouddeploy_TargetGke_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
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
        InputType.Map,
        "Annotations",
        "Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AnthosCluster",
        "Information specifying an Anthos Cluster.",
        Clouddeploy_TargetAnthosCluster_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "ExecutionConfigs",
        "Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.",
        Clouddeploy_TargetExecutionConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Run",
        "Information specifying a Cloud Run deployment target.",
        Clouddeploy_TargetRun_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MultiTarget",
        "Information specifying a multiTarget.",
        Clouddeploy_TargetMultiTarget_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "RequireApproval",
        "Optional. Whether or not the `Target` requires approval.",
        [],
        false,
        false,
      ),
    ];
  }
}
