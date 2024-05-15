import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface JobArgs {
  /*
User labels to be specified for the job. Keys and values should follow the restrictions
specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, InputType.String>;

  // The Service Account email used to create the job.
  ServiceAccountEmail?: string;

  // The zone in which the created job should run. If it is not provided, the provider zone is used.
  Zone?: string;

  // Enable/disable the use of [Streaming Engine](https://cloud.google.com/dataflow/docs/guides/deploying-a-pipeline#streaming-engine) for the job. Note that Streaming Engine is enabled by default for pipelines developed against the Beam SDK for Python v2.21.0 or later when using Python 3.
  EnableStreamingEngine?: boolean;

  // The configuration for VM IPs.  Options are `"WORKER_IP_PUBLIC"` or `"WORKER_IP_PRIVATE"`.
  IpConfiguration?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  Network?: string;

  // One of "drain" or "cancel".  Specifies behavior of deletion during `pulumi destroy`.  See above note.
  OnDelete?: string;

  // If set to `true`, Pulumi will treat `DRAINING` and `CANCELLING` as terminal states when deleting the resource, and will remove the resource from Pulumi state and move on.  See above note.
  SkipWaitOnJobTermination?: boolean;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". If the [subnetwork is located in a Shared VPC network](https://cloud.google.com/dataflow/docs/guides/specifying-networks#shared), you must use the complete URL. For example `"googleapis.com/compute/v1/projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME"`
  Subnetwork?: string;

  // List of experiments that should be used by the job. An example value is `["enable_stackdriver_agent_metrics"]`.
  AdditionalExperiments?: Array<string>;

  // The name for the Cloud KMS key for the job. Key format is: `projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY`
  KmsKeyName?: string;

  // A unique name for the resource, required by Dataflow.
  Name?: string;

  // The region in which the created job should run.
  Region?: string;

  /*
A writeable location on GCS for the Dataflow job to dump its temporary data.

- - -
*/
  TempGcsLocation?: string;

  // The GCS path to the Dataflow job template.
  TemplateGcsPath?: string;

  // The machine type to use for the job.
  MachineType?: string;

  // The number of workers permitted to work on the job.  More workers may improve processing speed at additional cost.
  MaxWorkers?: number;

  // Key/Value pairs to be passed to the Dataflow job (as used in the template).
  Parameters?: Map<string, InputType.String>;

  // The project in which the resource belongs. If it is not provided, the provider project is used.
  Project?: string;

  // Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. This field is not used outside of update.
  TransformNameMapping?: Map<string, InputType.String>;
}
export class Job extends Resource {
  // The machine type to use for the job.
  public MachineType?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  public Network?: string;

  // The project in which the resource belongs. If it is not provided, the provider project is used.
  public Project?: string;

  // If set to `true`, Pulumi will treat `DRAINING` and `CANCELLING` as terminal states when deleting the resource, and will remove the resource from Pulumi state and move on.  See above note.
  public SkipWaitOnJobTermination?: boolean;

  /*
A writeable location on GCS for the Dataflow job to dump its temporary data.

- - -
*/
  public TempGcsLocation?: string;

  // Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. This field is not used outside of update.
  public TransformNameMapping?: Map<string, InputType.String>;

  // The zone in which the created job should run. If it is not provided, the provider zone is used.
  public Zone?: string;

  // The unique ID of this job.
  public JobId?: string;

  // The configuration for VM IPs.  Options are `"WORKER_IP_PUBLIC"` or `"WORKER_IP_PRIVATE"`.
  public IpConfiguration?: string;

  // The number of workers permitted to work on the job.  More workers may improve processing speed at additional cost.
  public MaxWorkers?: number;

  // Key/Value pairs to be passed to the Dataflow job (as used in the template).
  public Parameters?: Map<string, InputType.String>;

  // The Service Account email used to create the job.
  public ServiceAccountEmail?: string;

  // The current state of the resource, selected from the [JobState enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobState)
  public State?: string;

  // List of experiments that should be used by the job. An example value is `["enable_stackdriver_agent_metrics"]`.
  public AdditionalExperiments?: Array<string>;

  // The type of this job, selected from the [JobType enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobType)
  public Type?: string;

  // The region in which the created job should run.
  public Region?: string;

  // Enable/disable the use of [Streaming Engine](https://cloud.google.com/dataflow/docs/guides/deploying-a-pipeline#streaming-engine) for the job. Note that Streaming Engine is enabled by default for pipelines developed against the Beam SDK for Python v2.21.0 or later when using Python 3.
  public EnableStreamingEngine?: boolean;

  // The name for the Cloud KMS key for the job. Key format is: `projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY`
  public KmsKeyName?: string;

  /*
User labels to be specified for the job. Keys and values should follow the restrictions
specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, InputType.String>;

  // A unique name for the resource, required by Dataflow.
  public Name?: string;

  // One of "drain" or "cancel".  Specifies behavior of deletion during `pulumi destroy`.  See above note.
  public OnDelete?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". If the [subnetwork is located in a Shared VPC network](https://cloud.google.com/dataflow/docs/guides/specifying-networks#shared), you must use the complete URL. For example `"googleapis.com/compute/v1/projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME"`
  public Subnetwork?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // The GCS path to the Dataflow job template.
  public TemplateGcsPath?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "TempGcsLocation",
        "A writeable location on GCS for the Dataflow job to dump its temporary data.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to use for the job.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpConfiguration",
        'The configuration for VM IPs.  Options are `"WORKER_IP_PUBLIC"` or `"WORKER_IP_PRIVATE"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the created job should run.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "SkipWaitOnJobTermination",
        "If set to `true`, Pulumi will treat `DRAINING` and `CANCELLING` as terminal states when deleting the resource, and will remove the resource from Pulumi state and move on.  See above note.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "TemplateGcsPath",
        "The GCS path to the Dataflow job template.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "TransformNameMapping",
        "Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the corresponding name prefixes of the new job. This field is not used outside of update.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableStreamingEngine",
        "Enable/disable the use of [Streaming Engine](https://cloud.google.com/dataflow/docs/guides/deploying-a-pipeline#streaming-engine) for the job. Note that Streaming Engine is enabled by default for pipelines developed against the Beam SDK for Python v2.21.0 or later when using Python 3.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The network to which VMs will be assigned. If it is not provided, "default" will be used.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by Dataflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxWorkers",
        "The number of workers permitted to work on the job.  More workers may improve processing speed at additional cost.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Parameters",
        "Key/Value pairs to be passed to the Dataflow job (as used in the template).",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        'The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK". If the [subnetwork is located in a Shared VPC network](https://cloud.google.com/dataflow/docs/guides/specifying-networks#shared), you must use the complete URL. For example `"googleapis.com/compute/v1/projects/PROJECT_ID/regions/REGION/subnetworks/SUBNET_NAME"`',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The name for the Cloud KMS key for the job. Key format is: `projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY`",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone in which the created job should run. If it is not provided, the provider zone is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "OnDelete",
        'One of "drain" or "cancel".  Specifies behavior of deletion during `pulumi destroy`.  See above note.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "AdditionalExperiments",
        'List of experiments that should be used by the job. An example value is `["enable_stackdriver_agent_metrics"]`.',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User labels to be specified for the job. Keys and values should follow the restrictions\nspecified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions) page.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccountEmail",
        "The Service Account email used to create the job.",
        [],
        false,
        false,
      ),
    ];
  }
}
