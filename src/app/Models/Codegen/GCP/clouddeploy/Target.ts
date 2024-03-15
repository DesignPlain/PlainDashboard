import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TargetAnthosCluster } from "../types/TargetAnthosCluster";
import { TargetExecutionConfig } from "../types/TargetExecutionConfig";
import { TargetGke } from "../types/TargetGke";
import { TargetMultiTarget } from "../types/TargetMultiTarget";
import { TargetRun } from "../types/TargetRun";

export interface TargetArgs {
  // Information specifying an Anthos Cluster.
  AnthosCluster?: TargetAnthosCluster;

  // Optional. The deploy parameters to use for this target.
  DeployParameters?: Map<string, string>;

  // Optional. Description of the `Target`. Max length is 255 characters.
  Description?: string;

  // Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
  ExecutionConfigs?: Array<TargetExecutionConfig>;

  // Information specifying a GKE Cluster.
  Gke?: TargetGke;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // Information specifying a multiTarget.
  MultiTarget?: TargetMultiTarget;

  /*
Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.



- - -
*/
  Name?: string;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  // The location for the resource
  Location?: string;

  // The project for the resource
  Project?: string;

  // Optional. Whether or not the `Target` requires approval.
  RequireApproval?: boolean;

  // Information specifying a Cloud Run deployment target.
  Run?: TargetRun;
}
export class Target extends Resource {
  // Information specifying a multiTarget.
  public MultiTarget?: TargetMultiTarget;

  // Output only. Unique identifier of the `Target`.
  public Uid?: string;

  // Information specifying an Anthos Cluster.
  public AnthosCluster?: TargetAnthosCluster;

  // Optional. The deploy parameters to use for this target.
  public DeployParameters?: Map<string, string>;

  // Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
  public Etag?: string;

  /*
Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: - Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. - All characters must use UTF-8 encoding, and international characters are allowed. - Keys must start with a lowercase letter or international character. - Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Optional. Whether or not the `Target` requires approval.
  public RequireApproval?: boolean;

  // Output only. Resource id of the `Target`.
  public TargetId?: string;

  // Optional. Description of the `Target`. Max length is 255 characters.
  public Description?: string;

  // Information specifying a GKE Cluster.
  public Gke?: TargetGke;

  /*
Name of the `Target`. Format is [a-z][a-z0-9\-]{0,62}.



- - -
*/
  public Name?: string;

  // The project for the resource
  public Project?: string;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Output only. Most recent time at which the `Target` was updated.
  public UpdateTime?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // Information specifying a Cloud Run deployment target.
  public Run?: TargetRun;

  /*
Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.

--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Output only. Time at which the `Target` was created.
  public CreateTime?: string;

  // Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.
  public ExecutionConfigs?: Array<TargetExecutionConfig>;

  // The location for the resource
  public Location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "MultiTarget",
        "Information specifying a multiTarget.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the `Target`. Format is [a-z][a-z0-9\\-]{0,62}.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Optional. User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.\n\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project for the resource",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "RequireApproval",
        "Optional. Whether or not the `Target` requires approval.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Run",
        "Information specifying a Cloud Run deployment target.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Optional. Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeployParameters",
        "Optional. The deploy parameters to use for this target.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Optional. Description of the `Target`. Max length is 255 characters.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "ExecutionConfigs",
        "Configurations for all execution that relates to this `Target`. Each `ExecutionEnvironmentUsage` value may only be used in a single configuration; using the same value multiple times is an error. When one or more configurations are specified, they must include the `RENDER` and `DEPLOY` `ExecutionEnvironmentUsage` values. When no configurations are specified, execution will use the default specified in `DefaultPool`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Gke",
        "Information specifying a GKE Cluster.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource",
      ),
      new DynamicUIProps(
        InputType.String,
        "AnthosCluster",
        "Information specifying an Anthos Cluster.",
      ),
    ];
  }
}
