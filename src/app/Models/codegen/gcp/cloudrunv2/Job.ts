import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudrunv2_JobTerminalCondition,
  cloudrunv2_JobTerminalCondition_GetTypes,
} from "../types/cloudrunv2_JobTerminalCondition";
import {
  cloudrunv2_JobCondition,
  cloudrunv2_JobCondition_GetTypes,
} from "../types/cloudrunv2_JobCondition";
import {
  cloudrunv2_JobLatestCreatedExecution,
  cloudrunv2_JobLatestCreatedExecution_GetTypes,
} from "../types/cloudrunv2_JobLatestCreatedExecution";
import {
  cloudrunv2_JobTemplate,
  cloudrunv2_JobTemplate_GetTypes,
} from "../types/cloudrunv2_JobTemplate";
import {
  cloudrunv2_JobBinaryAuthorization,
  cloudrunv2_JobBinaryAuthorization_GetTypes,
} from "../types/cloudrunv2_JobBinaryAuthorization";

export interface JobArgs {
  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  launchStage?: string;

  // Name of the Job.
  name?: string;

  /*
The template used to create executions for this Job.
Structure is documented below.
*/
  template?: cloudrunv2_JobTemplate;

  // Arbitrary version identifier for the API client.
  clientVersion?: string;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  binaryAuthorization?: cloudrunv2_JobBinaryAuthorization;

  // Arbitrary identifier for the API client.
  client?: string;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The location of the cloud run job
  location?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  annotations?: Map<string, string>;
}
export class Job extends DS_Resource {
  // A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
  public etag?: string;

  // Number of executions created for this job.
  public executionCount?: number;

  // The location of the cloud run job
  public location?: string;

  // The generation of this Job. See comments in reconciling for additional information on reconciliation process in Cloud Run.
  public observedGeneration?: string;

  // Arbitrary version identifier for the API client.
  public clientVersion?: string;

  // Email address of the authenticated creator.
  public creator?: string;

  // The last-modified time.
  public updateTime?: string;

  // For a deleted resource, the time after which it will be permamently deleted.
  public expireTime?: string;

  /*
The Condition of this Job, containing its readiness status, and detailed error information in case it did not reach the desired state
Structure is documented below.
*/
  public terminalConditions?: Array<cloudrunv2_JobTerminalCondition>;

  /*
(Output)
Creation timestamp of the execution.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  // Email address of the last authenticated modifier.
  public lastModifier?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
Cloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources.
All system annotations in v1 now have a corresponding field in v2 Job.
This field follows Kubernetes annotations' namespacing, limits, and rules.
--Note--: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field `effective_annotations` for all of the annotations present on the resource.
*/
  public annotations?: Map<string, string>;

  /*
The Conditions of all other associated sub-resources. They contain additional diagnostics information in case the Job does not reach its desired state. See comments in reconciling for additional information on `reconciliation` process in Cloud Run.
Structure is documented below.
*/
  public conditions?: Array<cloudrunv2_JobCondition>;

  // A number that monotonically increases every time the user modifies the desired state.
  public generation?: string;

  /*
Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
Cloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.
All system labels in v1 now have a corresponding field in v2 Job.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Name of the last created execution.
Structure is documented below.
*/
  public latestCreatedExecutions?: Array<cloudrunv2_JobLatestCreatedExecution>;

  // Arbitrary identifier for the API client.
  public client?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
All of annotations (key/value pairs) present on the resource in GCP, including the annotations configured through
Terraform, other clients and services.
*/
  public effectiveAnnotations?: Map<string, string>;

  /*
The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.
Possible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.
*/
  public launchStage?: string;

  /*
Returns true if the Job is currently being acted upon by the system to bring it into the desired state.
When a new Job is created, or an existing one is updated, Cloud Run will asynchronously perform all necessary steps to bring the Job to the desired state. This process is called reconciliation. While reconciliation is in process, observedGeneration and latest_succeeded_execution, will have transient values that might mismatch the intended state: Once reconciliation is over (and this field is false), there are two possible outcomes: reconciliation succeeded and the state matches the Job, or there was an error, and reconciliation failed. This state can be found in terminalCondition.state.
If reconciliation succeeded, the following fields will match: observedGeneration and generation, latest_succeeded_execution and latestCreatedExecution.
If reconciliation failed, observedGeneration and latest_succeeded_execution will have the state of the last succeeded execution or empty for newly created Job. Additional information on the failure can be found in terminalCondition and conditions
*/
  public reconciling?: boolean;

  // The deletion time.
  public deleteTime?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The template used to create executions for this Job.
Structure is documented below.
*/
  public template?: cloudrunv2_JobTemplate;

  // Server assigned unique identifier for the Execution. The value is a UUID4 string and guaranteed to remain unchanged until the resource is deleted.
  public uid?: string;

  /*
Settings for the Binary Authorization feature.
Structure is documented below.
*/
  public binaryAuthorization?: cloudrunv2_JobBinaryAuthorization;

  // Name of the Job.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "launchStage",
        "The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.\nIf no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.\nFor example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output.\nPossible values are: `UNIMPLEMENTED`, `PRELAUNCH`, `EARLY_ACCESS`, `ALPHA`, `BETA`, `GA`, `DEPRECATED`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Job.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "template",
        "The template used to create executions for this Job.\nStructure is documented below.",
        () => cloudrunv2_JobTemplate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientVersion",
        "Arbitrary version identifier for the API client.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "annotations",
        "Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.\nCloud Run API v2 does not support annotations with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected on new resources.\nAll system annotations in v1 now have a corresponding field in v2 Job.\nThis field follows Kubernetes annotations' namespacing, limits, and rules.\n**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.\nPlease refer to the field `effective_annotations` for all of the annotations present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "binaryAuthorization",
        "Settings for the Binary Authorization feature.\nStructure is documented below.",
        () => cloudrunv2_JobBinaryAuthorization_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "client",
        "Arbitrary identifier for the API client.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,\nenvironment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.\nCloud Run API v2 does not support labels with `run.googleapis.com`, `cloud.googleapis.com`, `serving.knative.dev`, or `autoscaling.knative.dev` namespaces, and they will be rejected.\nAll system labels in v1 now have a corresponding field in v2 Job.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The location of the cloud run job",
        () => [],
        true,
        true,
      ),
    ];
  }
}
