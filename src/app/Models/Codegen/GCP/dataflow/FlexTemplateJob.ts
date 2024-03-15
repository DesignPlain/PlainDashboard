import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface FlexTemplateJobArgs {
  // Indicates if the job should use the streaming engine feature.
  EnableStreamingEngine?: boolean;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  Network?: string;

  /*
The project in which the resource belongs. If it is not
provided, the provider project is used.
*/
  Project?: string;

  // The region in which the created job should run.
  Region?: string;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  Subnetwork?: string;

  /*
Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the
corresponding name prefixes of the new job.
*/
  TransformNameMapping?: Map<string, string>;

  // The algorithm to use for autoscaling
  AutoscalingAlgorithm?: string;

  // The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  IpConfiguration?: string;

  /*
The name for the Cloud KMS key for the job. Key format is:
projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
*/
  KmsKeyName?: string;

  /*
The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to
1000.
*/
  MaxWorkers?: number;

  // The initial number of Google Compute Engine instances for the job.
  NumWorkers?: number;

  /*
One of "drain" or "cancel". Specifies behavior of
deletion during `pulumi destroy`.  See above note.
*/
  OnDelete?: string;

  /*
Key/Value pairs to be passed to the Dataflow job (as
used in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)
such as `serviceAccount`, `workerMachineType`, etc can be specified here.
*/
  Parameters?: Map<string, string>;

  /*
Docker registry location of container image to use for the 'worker harness. Default is the container for the version of
the SDK. Note this field is only valid for portable pipelines.
*/
  SdkContainerImage?: string;

  /*
The GCS path to the Dataflow job Flex
Template.

- - -
*/
  ContainerSpecGcsPath?: string;

  /*
If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from
terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are
different, e.g. by embedding a release ID or by using a random_id.
*/
  SkipWaitOnJobTermination?: boolean;

  // The machine type to use for launching the job. The default is n1-standard-1.
  LauncherMachineType?: string;

  // The machine type to use for the job.
  MachineType?: string;

  // A unique name for the resource, required by Dataflow.
  Name?: string;

  // List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  AdditionalExperiments?: Array<string>;

  // The Service Account email used to create the job.
  ServiceAccountEmail?: string;

  // The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  StagingLocation?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  TempLocation?: string;

  /*
User labels to be specified for the job. Keys and values
should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
page. --Note--: This field is marked as deprecated as the API does not currently
support adding labels.
--NOTE--: Google-provided Dataflow templates often provide default labels
that begin with `goog-dataflow-provided`. Unless explicitly set in config, these
labels will be ignored to prevent diffs on re-apply.
*/
  Labels?: Map<string, string>;
}
export class FlexTemplateJob extends Resource {
  // The initial number of Google Compute Engine instances for the job.
  public NumWorkers?: number;

  // The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.
  public StagingLocation?: string;

  // The current state of the resource, selected from the [JobState enum](https://cloud.google.com/dataflow/docs/reference/rest/v1b3/projects.jobs#Job.JobState)
  public State?: string;

  // The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".
  public Subnetwork?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  public TempLocation?: string;

  /*
The name for the Cloud KMS key for the job. Key format is:
projects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY
*/
  public KmsKeyName?: string;

  /*
The GCS path to the Dataflow job Flex
Template.

- - -
*/
  public ContainerSpecGcsPath?: string;

  // A unique name for the resource, required by Dataflow.
  public Name?: string;

  // Indicates if the job should use the streaming engine feature.
  public EnableStreamingEngine?: boolean;

  // The unique ID of this job.
  public JobId?: string;

  // The machine type to use for launching the job. The default is n1-standard-1.
  public LauncherMachineType?: string;

  // The region in which the created job should run.
  public Region?: string;

  // The algorithm to use for autoscaling
  public AutoscalingAlgorithm?: string;

  // The machine type to use for the job.
  public MachineType?: string;

  /*
The project in which the resource belongs. If it is not
provided, the provider project is used.
*/
  public Project?: string;

  /*
If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from
terraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are
different, e.g. by embedding a release ID or by using a random_id.
*/
  public SkipWaitOnJobTermination?: boolean;

  // The type of this job, selected from the JobType enum.
  public Type?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Terraform, other
clients and services.
*/
  public EffectiveLabels?: Map<string, string>;

  /*
The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to
1000.
*/
  public MaxWorkers?: number;

  /*
Docker registry location of container image to use for the 'worker harness. Default is the container for the version of
the SDK. Note this field is only valid for portable pipelines.
*/
  public SdkContainerImage?: string;

  // The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".
  public IpConfiguration?: string;

  // The network to which VMs will be assigned. If it is not provided, "default" will be used.
  public Network?: string;

  /*
One of "drain" or "cancel". Specifies behavior of
deletion during `pulumi destroy`.  See above note.
*/
  public OnDelete?: string;

  /*
Key/Value pairs to be passed to the Dataflow job (as
used in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)
such as `serviceAccount`, `workerMachineType`, etc can be specified here.
*/
  public Parameters?: Map<string, string>;

  // List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].
  public AdditionalExperiments?: Array<string>;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  // The Service Account email used to create the job.
  public ServiceAccountEmail?: string;

  /*
Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the
corresponding name prefixes of the new job.
*/
  public TransformNameMapping?: Map<string, string>;

  /*
User labels to be specified for the job. Keys and values
should follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)
page. --Note--: This field is marked as deprecated as the API does not currently
support adding labels.
--NOTE--: Google-provided Dataflow templates often provide default labels
that begin with `goog-dataflow-provided`. Unless explicitly set in config, these
labels will be ignored to prevent diffs on re-apply.
*/
  public Labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "OnDelete",
        'One of "drain" or "cancel". Specifies behavior of\ndeletion during `pulumi destroy`.  See above note.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Parameters",
        "Key/Value pairs to be passed to the Dataflow job (as\nused in the template). Additional [pipeline options](https://cloud.google.com/dataflow/docs/guides/specifying-exec-params#setting-other-cloud-dataflow-pipeline-options)\nsuch as `serviceAccount`, `workerMachineType`, etc can be specified here.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SdkContainerImage",
        "Docker registry location of container image to use for the 'worker harness. Default is the container for the version of\nthe SDK. Note this field is only valid for portable pipelines.",
      ),
      new DynamicUIProps(
        InputType.String,
        "TempLocation",
        "The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.",
      ),
      new DynamicUIProps(
        InputType.String,
        "IpConfiguration",
        'The configuration for VM IPs. Options are "WORKER_IP_PUBLIC" or "WORKER_IP_PRIVATE".',
      ),
      new DynamicUIProps(
        InputType.Number,
        "NumWorkers",
        "The initial number of Google Compute Engine instances for the job.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnetwork",
        'The subnetwork to which VMs will be assigned. Should be of the form "regions/REGION/subnetworks/SUBNETWORK".',
      ),
      new DynamicUIProps(
        InputType.String,
        "AutoscalingAlgorithm",
        "The algorithm to use for autoscaling",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The name for the Cloud KMS key for the job. Key format is:\nprojects/PROJECT_ID/locations/LOCATION/keyRings/KEY_RING/cryptoKeys/KEY",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "SkipWaitOnJobTermination",
        "If true, treat DRAINING and CANCELLING as terminal job states and do not wait for further changes before removing from\nterraform state and moving on. WARNING: this will lead to job name conflicts if you do not ensure that the job names are\ndifferent, e.g. by embedding a release ID or by using a random_id.",
      ),
      new DynamicUIProps(
        InputType.String,
        "LauncherMachineType",
        "The machine type to use for launching the job. The default is n1-standard-1.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "The machine type to use for the job.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The project in which the resource belongs. If it is not\nprovided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the created job should run.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "AdditionalExperiments",
        'List of experiments that should be used by the job. An example value is ["enable_stackdriver_agent_metrics"].',
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccountEmail",
        "The Service Account email used to create the job.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableStreamingEngine",
        "Indicates if the job should use the streaming engine feature.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ContainerSpecGcsPath",
        "The GCS path to the Dataflow job Flex\nTemplate.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxWorkers",
        "The maximum number of Google Compute Engine instances to be made available to your pipeline during execution, from 1 to\n1000.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "A unique name for the resource, required by Dataflow.",
      ),
      new DynamicUIProps(
        InputType.String,
        "StagingLocation",
        "The Cloud Storage path to use for staging files. Must be a valid Cloud Storage URL, beginning with gs://.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "User labels to be specified for the job. Keys and values\nshould follow the restrictions specified in the [labeling restrictions](https://cloud.google.com/compute/docs/labeling-resources#restrictions)\npage. **Note**: This field is marked as deprecated as the API does not currently\nsupport adding labels.\n**NOTE**: Google-provided Dataflow templates often provide default labels\nthat begin with `goog-dataflow-provided`. Unless explicitly set in config, these\nlabels will be ignored to prevent diffs on re-apply.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        'The network to which VMs will be assigned. If it is not provided, "default" will be used.',
      ),
      new DynamicUIProps(
        InputType.String,
        "TransformNameMapping",
        "Only applicable when updating a pipeline. Map of transform name prefixes of the job to be replaced with the\ncorresponding name prefixes of the new job.",
      ),
    ];
  }
}
