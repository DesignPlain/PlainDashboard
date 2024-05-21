import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FlexTemplateJobArgs {
  // The machine type to use for launching the job. The default is n1-standard-1.
  launcherMachineType?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  network?: string;

  // The initial number of Google Compute Engine instances for the job.
  numWorkers?: number;

  /*
One of "drain" or "cancel". Specifies behavior of
deletion during `pulumi destroy`.  See above note.
*/
  onDelete?: string;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  subnetwork?: string;

  /*
The name for the Cloud KMS key for the job. Key format is:
projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
*/
  kmsKeyName?: string;

  // Indicates if the job should use the streaming engine feature.
  enableStreamingEngine?: boolean;

  /*
Docker registry location of container image to use for the 'worker harness. Default is the container for the version of
the SDK. Note this field is only valid for portable pipelines.
*/
  sdkContainerImage?: string;

  // The Service Account email used to create the job.
  serviceAccountEmail?: string;

  // The algorithm to use for autoscaling
  autoscalingAlgorithm?: string;

  // The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  ipConfiguration?: string;

  // The machine type to use for the job.
  machineType?: string;

  // A unique name for the resource, required by Dataflow.
  name?: string;

  /*
Key/Value pairs to be passed to the Dataflow job (as
used in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)
such as `serviceAccount`, `workerMachineType`, etc can be specified here.
*/
  parameters?: Map<string, string>;

  /*
The GCS path to the Dataflow job Flex
Template.

- - -
*/
  containerSpecGcsPath?: string;

  /*
User labels to be specified for the job. Keys and values
should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
page. --Note--: This field is marked as deprecated as the API does not currently
support adding labels.
--NOTE--: Google-provided Dataflow templates often provide default labels
that begin with `goog-dataflow-provided`. Unless explicitly set in config, these
labels will be ignored to prevent diffs on re-apply.
*/
  labels?: Map<string, string>;

  /*
The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to
1000.
*/
  maxWorkers?: number;

  /*
The project in which the resource belongs. If it is not
provided, the provider project is used.
*/
  project?: string;

  // The region in which the created job should run.
  region?: string;

  /*
If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from
terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are
different, e.g. by embedding a release ID or by using a random_id.
*/
  skipWaitOnJobTermination?: boolean;

  // The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  stagingLocation?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  tempLocation?: string;

  // List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  additionalExperiments?: Array<string>;

  /*
Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the
corresponding name prefixes of the new job.
*/
  transformNameMapping?: Map<string, string>;
}
export class FlexTemplateJob extends Resource {
  // The current state of the resource, selected from the [JobState enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobState)
  public state?: string;

  /*
Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the
corresponding name prefixes of the new job.
*/
  public transformNameMapping?: Map<string, string>;

  /*
The GCS path to the Dataflow job Flex
Template.

- - -
*/
  public containerSpecGcsPath?: string;

  // A unique name for the resource, required by Dataflow.
  public name?: string;

  // The initial number of Google Compute Engine instances for the job.
  public numWorkers?: number;

  // The algorithm to use for autoscaling
  public autoscalingAlgorithm?: string;

  /*
The name for the Cloud KMS key for the job. Key format is:
projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
*/
  public kmsKeyName?: string;

  /*
The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to
1000.
*/
  public maxWorkers?: number;

  /*
If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from
terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are
different, e.g. by embedding a release ID or by using a random_id.
*/
  public skipWaitOnJobTermination?: boolean;

  // The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  public ipConfiguration?: string;

  // The unique ID of this job.
  public jobId?: string;

  // The machine type to use for the job.
  public machineType?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  public tempLocation?: string;

  // The type of this job, selected from the JobType enum.
  public type?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  public network?: string;

  /*
One of "drain" or "cancel". Specifies behavior of
deletion during `pulumi destroy`.  See above note.
*/
  public onDelete?: string;

  // The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  public stagingLocation?: string;

  // The Service Account email used to create the job.
  public serviceAccountEmail?: string;

  // List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  public additionalExperiments?: Array<string>;

  // Indicates if the job should use the streaming engine feature.
  public enableStreamingEngine?: boolean;

  /*
Docker registry location of container image to use for the 'worker harness. Default is the container for the version of
the SDK. Note this field is only valid for portable pipelines.
*/
  public sdkContainerImage?: string;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  public subnetwork?: string;

  /*
Key/Value pairs to be passed to the Dataflow job (as
used in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)
such as `serviceAccount`, `workerMachineType`, etc can be specified here.
*/
  public parameters?: Map<string, string>;

  /*
The project in which the resource belongs. If it is not
provided, the provider project is used.
*/
  public project?: string;

  // The region in which the created job should run.
  public region?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public effectiveLabels?: Map<string, string>;

  /*
User labels to be specified for the job. Keys and values
should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
page. --Note--: This field is marked as deprecated as the API does not currently
support adding labels.
--NOTE--: Google-provided Dataflow templates often provide default labels
that begin with `goog-dataflow-provided`. Unless explicitly set in config, these
labels will be ignored to prevent diffs on re-apply.
*/
  public labels?: Map<string, string>;

  // The machine type to use for launching the job. The default is n1-standard-1.
  public launcherMachineType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "maxWorkers",
        "The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to\n1000.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "containerSpecGcsPath",
        "The GCS path to the Dataflow job Flex\nTemplate.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User labels to be specified for the job. Keys and values\nshould follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)\npage. **Note**: This field is marked as deprecated as the API does not currently\nsupport adding labels.\n**NOTE**: Google-provided Dataflow templates often provide default labels\nthat begin with `goog-dataflow-provided`. Unless explicitly set in config, these\nlabels will be ignored to prevent diffs on re-apply.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the resource belongs. If it is not\nprovided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "region",
        "The region in which the created job should run.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tempLocation",
        "The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "network",
        'The network to which VMs will be assigned. If it is not provided, "default" will be used.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The name for the Cloud KMS key for the job. Key format is:\nprojects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "machineType",
        "The machine type to use for the job.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        'The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sdkContainerImage",
        "Docker registry location of container image to use for the 'worker harness. Default is the container for the version of\nthe SDK. Note this field is only valid for portable pipelines.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipConfiguration",
        'The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "Key/Value pairs to be passed to the Dataflow job (as\nused in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)\nsuch as `serviceAccount`, `workerMachineType`, etc can be specified here.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "additionalExperiments",
        'List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "launcherMachineType",
        "The machine type to use for launching the job. The default is n1-standard-1.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "numWorkers",
        "The initial number of Google Compute Engine instances for the job.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "onDelete",
        'One of "drain" or "cancel". Specifies behavior of\ndeletion during `pulumi destroy`.  See above note.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for the resource, required by Dataflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipWaitOnJobTermination",
        "If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from\nterraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are\ndifferent, e.g. by embedding a release ID or by using a random_id.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stagingLocation",
        "The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "transformNameMapping",
        "Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the\ncorresponding name prefixes of the new job.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableStreamingEngine",
        "Indicates if the job should use the streaming engine feature.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccountEmail",
        "The Service Account email used to create the job.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoscalingAlgorithm",
        "The algorithm to use for autoscaling",
        [],
        false,
        false,
      ),
    ];
  }
}
