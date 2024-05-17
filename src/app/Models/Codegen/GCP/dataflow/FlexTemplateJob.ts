import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FlexTemplateJobArgs {
  // The machine type to use for the job.
  MachineType?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  TempLocation?: string;

  /*
Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the
corresponding name prefixes of the new job.
*/
  TransformNameMapping?: Map<string, InputType.String>;

  // The region in which the created job should run.
  Region?: string;

  /*
Docker registry location of container image to use for the 'worker harness. Default is the container for the version of
the SDK. Note this field is only valid for portable pipelines.
*/
  SdkContainerImage?: string;

  // The Service Account email used to create the job.
  ServiceAccountEmail?: string;

  // Indicates if the job should use the streaming engine feature.
  EnableStreamingEngine?: boolean;

  // A unique name for the resource, required by Dataflow.
  Name?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  Network?: string;

  /*
One of "drain" or "cancel". Specifies behavior of
deletion during `pulumi destroy`.  See above note.
*/
  OnDelete?: string;

  /*
The project in which the resource belongs. If it is not
provided, the provider project is used.
*/
  Project?: string;

  /*
If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from
terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are
different, e.g. by embedding a release ID or by using a random_id.
*/
  SkipWaitOnJobTermination?: boolean;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  Subnetwork?: string;

  // The initial number of Google Compute Engine instances for the job.
  NumWorkers?: number;

  // The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  StagingLocation?: string;

  /*
The GCS path to the Dataflow job Flex
Template.

- - -
*/
  ContainerSpecGcsPath?: string;

  /*
The name for the Cloud KMS key for the job. Key format is:
projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
*/
  KmsKeyName?: string;

  /*
User labels to be specified for the job. Keys and values
should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
page. --Note--: This field is marked as deprecated as the API does not currently
support adding labels.
--NOTE--: Google-provided Dataflow templates often provide default labels
that begin with `goog-dataflow-provided`. Unless explicitly set in config, these
labels will be ignored to prevent diffs on re-apply.
*/
  Labels?: Map<string, InputType.String>;

  // The machine type to use for launching the job. The default is n1-standard-1.
  LauncherMachineType?: string;

  /*
The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to
1000.
*/
  MaxWorkers?: number;

  // List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  AdditionalExperiments?: Array<string>;

  // The algorithm to use for autoscaling
  AutoscalingAlgorithm?: string;

  // The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  IpConfiguration?: string;

  /*
Key/Value pairs to be passed to the Dataflow job (as
used in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)
such as `serviceAccount`, `workerMachineType`, etc can be specified here.
*/
  Parameters?: Map<string, InputType.String>;
}
export class FlexTemplateJob extends Resource {
  // List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  public AdditionalExperiments?: Array<string>;

  /*
The GCS path to the Dataflow job Flex
Template.

- - -
*/
  public ContainerSpecGcsPath?: string;

  /*
The name for the Cloud KMS key for the job. Key format is:
projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
*/
  public KmsKeyName?: string;

  /*
Docker registry location of container image to use for the 'worker harness. Default is the container for the version of
the SDK. Note this field is only valid for portable pipelines.
*/
  public SdkContainerImage?: string;

  /*
If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from
terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are
different, e.g. by embedding a release ID or by using a random_id.
*/
  public SkipWaitOnJobTermination?: boolean;

  /*
Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the
corresponding name prefixes of the new job.
*/
  public TransformNameMapping?: Map<string, InputType.String>;

  /*
Key/Value pairs to be passed to the Dataflow job (as
used in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)
such as `serviceAccount`, `workerMachineType`, etc can be specified here.
*/
  public Parameters?: Map<string, InputType.String>;

  // The type of this job, selected from the JobType enum.
  public Type?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  // Indicates if the job should use the streaming engine feature.
  public EnableStreamingEngine?: boolean;

  // The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  public IpConfiguration?: string;

  // The unique ID of this job.
  public JobId?: string;

  /*
User labels to be specified for the job. Keys and values
should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
page. --Note--: This field is marked as deprecated as the API does not currently
support adding labels.
--NOTE--: Google-provided Dataflow templates often provide default labels
that begin with `goog-dataflow-provided`. Unless explicitly set in config, these
labels will be ignored to prevent diffs on re-apply.
*/
  public Labels?: Map<string, InputType.String>;

  // The machine type to use for the job.
  public MachineType?: string;

  /*
The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to
1000.
*/
  public MaxWorkers?: number;

  // A unique name for the resource, required by Dataflow.
  public Name?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  public Network?: string;

  // The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  public StagingLocation?: string;

  /*
The project in which the resource belongs. If it is not
provided, the provider project is used.
*/
  public Project?: string;

  // The region in which the created job should run.
  public Region?: string;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  public Subnetwork?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  public TempLocation?: string;

  // The algorithm to use for autoscaling
  public AutoscalingAlgorithm?: string;

  // The machine type to use for launching the job. The default is n1-standard-1.
  public LauncherMachineType?: string;

  // The Service Account email used to create the job.
  public ServiceAccountEmail?: string;

  // The current state of the resource, selected from the [JobState enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobState)
  public State?: string;

  // The initial number of Google Compute Engine instances for the job.
  public NumWorkers?: number;

  /*
One of "drain" or "cancel". Specifies behavior of
deletion during `pulumi destroy`.  See above note.
*/
  public OnDelete?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by Dataflow.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        'The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The name for the Cloud KMS key for the job. Key format is:\nprojects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it is not\nprovided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "NumWorkers",
        "The initial number of Google Compute Engine instances for the job.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "AdditionalExperiments",
        'List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].',
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Parameters",
        "Key/Value pairs to be passed to the Dataflow job (as\nused in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)\nsuch as `serviceAccount`, `workerMachineType`, etc can be specified here.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "TransformNameMapping",
        "Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the\ncorresponding name prefixes of the new job.",
        InputType_Map_GetTypes(),
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
        "EnableStreamingEngine",
        "Indicates if the job should use the streaming engine feature.",
        [],
        false,
        true,
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
        InputType.Bool,
        "SkipWaitOnJobTermination",
        "If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from\nterraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are\ndifferent, e.g. by embedding a release ID or by using a random_id.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "StagingLocation",
        "The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ContainerSpecGcsPath",
        "The GCS path to the Dataflow job Flex\nTemplate.\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "LauncherMachineType",
        "The machine type to use for launching the job. The default is n1-standard-1.",
        [],
        false,
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
        "TempLocation",
        "The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SdkContainerImage",
        "Docker registry location of container image to use for the 'worker harness. Default is the container for the version of\nthe SDK. Note this field is only valid for portable pipelines.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxWorkers",
        "The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to\n1000.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoscalingAlgorithm",
        "The algorithm to use for autoscaling",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpConfiguration",
        'The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".',
        [],
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
      new DynamicUIProps(
        InputType.String,
        "OnDelete",
        'One of "drain" or "cancel". Specifies behavior of\ndeletion during `pulumi destroy`.  See above note.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "User labels to be specified for the job. Keys and values\nshould follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)\npage. **Note**: This field is marked as deprecated as the API does not currently\nsupport adding labels.\n**NOTE**: Google-provided Dataflow templates often provide default labels\nthat begin with `goog-dataflow-provided`. Unless explicitly set in config, these\nlabels will be ignored to prevent diffs on re-apply.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
