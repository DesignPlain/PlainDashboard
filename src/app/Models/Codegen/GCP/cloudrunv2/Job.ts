import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { JobTemplate } from "../types/JobTemplate";
import { JobCondition } from "../types/JobCondition";
import { JobLatestCreatedExecution } from "../types/JobLatestCreatedExecution";
import { JobTerminalCondition } from "../types/JobTerminalCondition";
import { JobBinaryAuthorization } from "../types/JobBinaryAuthorization";

export interface JobArgs {
  // Arbitrary identifier for the API client.
  Client?: string;

  // Arbitrary version identifier for the API client.
  ClientVersion?: string;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The location of the cloud run job
  Location?: string;

  // Name of the Job.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  Annotations?: Map<string, string>;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  BinaryAuthorization?: JobBinaryAuthorization;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  LaunchStage?: string;

  /*
The template used to create executions for this Job.
Structure is documented below.
*/
  Template?: JobTemplate;
}
export class Job extends Resource {
  /*
Returns true if the Job is currently being acted upon by the system to bring it into the desired state.
When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, observedGeneration and latest_succeeded_execution, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in terminalCondition.state.
If reconciliation succeeded, the following fields will match: observedGeneration and generation, latest_succeeded_execution and latestCreatedExecution.
If reconciliation failed, observedGeneration and latest_succeeded_execution will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in terminalCondition and conditions
*/
  public Reconciling?: boolean;

  /*
The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in reconciling for additional information on `reconciliation` process in Cloud Run.
Structure is documented below.
*/
  public Conditions?: Array<JobCondition>;

  // The deletion time.
  public DeleteTime?: string;

  // A number that monotonically increases every time the user modifies the desired state.
  public Generation?: string;

  // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
  public Etag?: string;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public Annotations?: Map<string, string>;

  // Arbitrary identifier for the API client.
  public Client?: string;

  // Arbitrary version identifier for the API client.
  public ClientVersion?: string;

  /*
Name of the last created execution.
Structure is documented below.
*/
  public LatestCreatedExecutions?: Array<JobLatestCreatedExecution>;

  /*
The template used to create executions for this Job.
Structure is documented below.
*/
  public Template?: JobTemplate;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // For a deleted resource, the time after which it will be permamently deleted.
  public ExpireTime?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Email address of the authenticated creator.
  public Creator?: string;

  // Number of executions created for this job.
  public ExecutionCount?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The generation of this Job. See comments in reconciling for additional information on reconciliation process in Cloud Run.
  public ObservedGeneration?: string;

  /*
The Condition of this Job, containing its readiness status, and detailed error information in case it did not reach the desired state
Structure is documented below.
*/
  public TerminalConditions?: Array<JobTerminalCondition>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public EffectiveAnnotations?: Map<string, string>;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The location of the cloud run job
  public Location?: string;

  // Name of the Job.
  public Name?: string;

  // Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public Uid?: string;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  public LaunchStage?: string;

  /*
(Output)
Creation timestamp of the execution.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  public BinaryAuthorization?: JobBinaryAuthorization;

  // Email address of the last authenticated modifier.
  public LastModifier?: string;

  // The last-modified time.
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ClientVersion",
        "Arbitrary version identifier for the API client.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,\nenvironment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\nCloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 Job.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(InputType.String, "Name", "Name of the Job."),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LaunchStage",
        "The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.\nIf no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.\nFor example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.\nPossible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Template",
        "The template used to create executions for this Job.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Client",
        "Arbitrary identifier for the API client.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location of the cloud run job",
      ),
      new DynamicUIProps(
        InputType.String,
        "Annotations",
        "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\nCloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources.\nAll system annotations in v1 now have a corresponding field in v2 Job.\nThis field follows Kubernetes annotations' namespacing, limits, and rules.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "BinaryAuthorization",
        "Settings for the Binary Authorization feature.\nStructure is documented below.",
      ),
    ];
  }
}
