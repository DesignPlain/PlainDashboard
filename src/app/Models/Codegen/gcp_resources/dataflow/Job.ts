import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface JobArgs {
  // The project in which the resource belongs. If it is not provided, the provider project is used.
  project?: string;

  // The GCS path to the Dataflow job template.
  templateGcsPath?: string;

  // The configuration for VM IPs.  Options are `"WORKER_IP_PUBLIC"` or `"WORKER_IP_PRIVATE"`.
  ipConfiguration?: string;

  // The number of workers permitted to work on the job.  More workers may improve processing speed at additional cost.
  maxWorkers?: number;

  // A unique name for the resource, required by Dataflow.
  name?: string;

  // Key/Value pairs to be passed to the Dataflow job (as used in the template).
  parameters?: Map<string, string>;

  // The region in which the created job should run.
  region?: string;

  // If set to `true`, Pulumi will treat `DRAINING` and `CANCELLING` as terminal states when deleting the resource, and will remove the resource from Pulumi state and move on.  See above note.
  skipWaitOnJobTermination?: boolean;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". If the [subnetwork is located in a Shared VPC network](https://cloud.google.com/dataflow/docs/guides/specifying-networks#shared), you must use the complete URL. For example `"googleapis.com/compute/v1/projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME"`
  subnetwork?: string;

  /*
A writeable location on GCS for the Dataflow job to dump its temporary data.

- - -
*/
  tempGcsLocation?: string;

  /*
User labels to be specified for the job. Keys and values should follow the restrictions
specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The machine type to use for the job.
  machineType?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  network?: string;

  // One of "drain" or "cancel".  Specifies behavior of deletion during `pulumi destroy`.  See above note.
  onDelete?: string;

  // Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. This field is not used outside of update.
  transformNameMapping?: Map<string, string>;

  // The zone in which the created job should run. If it is not provided, the provider zone is used.
  zone?: string;

  // List of experiments that should be used by the job. An example value is `["enable_stackdriver_agent_metrics"]`.
  additionalExperiments?: Array<string>;

  // Enable/disable the use of [Streaming Engine](https://cloud.google.com/dataflow/docs/guides/deploying-a-pipeline#streaming-engine) for the job. Note that Streaming Engine is enabled by default for pipelines developed against the Beam SDK for Python v2.21.0 or later when using Python 3.
  enableStreamingEngine?: boolean;

  // The name for the Cloud KMS key for the job. Key format is: `projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY`
  kmsKeyName?: string;

  // The Service Account email used to create the job.
  serviceAccountEmail?: string;
}
export class Job extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  // The machine type to use for the job.
  public machineType?: string;

  // The number of workers permitted to work on the job.  More workers may improve processing speed at additional cost.
  public maxWorkers?: number;

  // The project in which the resource belongs. If it is not provided, the provider project is used.
  public project?: string;

  // Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. This field is not used outside of update.
  public transformNameMapping?: Map<string, string>;

  // The type of this job, selected from the [JobType enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobType)
  public type?: string;

  // The name for the Cloud KMS key for the job. Key format is: `projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY`
  public kmsKeyName?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  public network?: string;

  // Key/Value pairs to be passed to the Dataflow job (as used in the template).
  public parameters?: Map<string, string>;

  // The Service Account email used to create the job.
  public serviceAccountEmail?: string;

  // If set to `true`, Pulumi will treat `DRAINING` and `CANCELLING` as terminal states when deleting the resource, and will remove the resource from Pulumi state and move on.  See above note.
  public skipWaitOnJobTermination?: boolean;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". If the [subnetwork is located in a Shared VPC network](https://cloud.google.com/dataflow/docs/guides/specifying-networks#shared), you must use the complete URL. For example `"googleapis.com/compute/v1/projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME"`
  public subnetwork?: string;

  /*
A writeable location on GCS for the Dataflow job to dump its temporary data.

- - -
*/
  public tempGcsLocation?: string;

  // A unique name for the resource, required by Dataflow.
  public name?: string;

  // The region in which the created job should run.
  public region?: string;

  // The current state of the resource, selected from the [JobState enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobState)
  public state?: string;

  // The zone in which the created job should run. If it is not provided, the provider zone is used.
  public zone?: string;

  // The GCS path to the Dataflow job template.
  public templateGcsPath?: string;

  // List of experiments that should be used by the job. An example value is `["enable_stackdriver_agent_metrics"]`.
  public additionalExperiments?: Array<string>;

  // Enable/disable the use of [Streaming Engine](https://cloud.google.com/dataflow/docs/guides/deploying-a-pipeline#streaming-engine) for the job. Note that Streaming Engine is enabled by default for pipelines developed against the Beam SDK for Python v2.21.0 or later when using Python 3.
  public enableStreamingEngine?: boolean;

  // The configuration for VM IPs.  Options are `"WORKER_IP_PUBLIC"` or `"WORKER_IP_PRIVATE"`.
  public ipConfiguration?: string;

  // The unique ID of this job.
  public jobId?: string;

  /*
User labels to be specified for the job. Keys and values should follow the restrictions
specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // One of "drain" or "cancel".  Specifies behavior of deletion during `pulumi destroy`.  See above note.
  public onDelete?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipConfiguration",
        'The configuration for VM IPs.  Options are `"WORKER_IP_PUBLIC"` or `"WORKER_IP_PRIVATE"`.',
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
        InputType.String,
        "onDelete",
        'One of "drain" or "cancel".  Specifies behavior of deletion during `pulumi destroy`.  See above note.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone in which the created job should run. If it is not provided, the provider zone is used.",
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
        "network",
        'The network to which VMs will be assigned. If it is not provided, "default" will be used.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "transformNameMapping",
        "Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. This field is not used outside of update.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableStreamingEngine",
        "Enable/disable the use of [Streaming Engine](https://cloud.google.com/dataflow/docs/guides/deploying-a-pipeline#streaming-engine) for the job. Note that Streaming Engine is enabled by default for pipelines developed against the Beam SDK for Python v2.21.0 or later when using Python 3.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "maxWorkers",
        "The number of workers permitted to work on the job.  More workers may improve processing speed at additional cost.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "subnetwork",
        'The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". If the [subnetwork is located in a Shared VPC network](https://cloud.google.com/dataflow/docs/guides/specifying-networks#shared), you must use the complete URL. For example `"googleapis.com/compute/v1/projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME"`',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tempGcsLocation",
        "A writeable location on GCS for the Dataflow job to dump its temporary data.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "additionalExperiments",
        'List of experiments that should be used by the job. An example value is `["enable_stackdriver_agent_metrics"]`.',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The name for the Cloud KMS key for the job. Key format is: `projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The project in which the resource belongs. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "templateGcsPath",
        "The GCS path to the Dataflow job template.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "parameters",
        "Key/Value pairs to be passed to the Dataflow job (as used in the template).",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "skipWaitOnJobTermination",
        "If set to `true`, Pulumi will treat `DRAINING` and `CANCELLING` as terminal states when deleting the resource, and will remove the resource from Pulumi state and move on.  See above note.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "User labels to be specified for the job. Keys and values should follow the restrictions\nspecified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
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
        "serviceAccountEmail",
        "The Service Account email used to create the job.",
        [],
        false,
        false,
      ),
    ];
  }
}
