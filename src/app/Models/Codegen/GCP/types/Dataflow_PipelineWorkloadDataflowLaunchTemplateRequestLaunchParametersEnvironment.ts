import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
  /*
Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  AdditionalUserLabels?: Map<string, string>;

  // 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'
  KmsKeyName?: string;

  // The initial number of Compute Engine instances for the job.
  NumWorkers?: number;

  // The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.
  WorkerRegion?: string;

  // Whether to bypass the safety checks for the job's temporary directory. Use with caution.
  BypassTempDirValidation?: boolean;

  // Whether to enable Streaming Engine for the job.
  EnableStreamingEngine?: boolean;

  // The machine type to use for the job. Defaults to the value from the template if not specified.
  MachineType?: string;

  // The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  MaxWorkers?: number;

  // Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  Network?: string;

  // Additional experiment flags for the job.
  AdditionalExperiments?: Array<string>;

  /*
Configuration for VM IPs.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration
Possible values are: `WORKER_IP_UNSPECIFIED`, `WORKER_IP_PUBLIC`, `WORKER_IP_PRIVATE`.
*/
  IpConfiguration?: string;

  // The email address of the service account to run the job as.
  ServiceAccountEmail?: string;

  // Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  Subnetwork?: string;

  // The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.
  WorkerZone?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  TempLocation?: string;

  // The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.
  Zone?: string;
}

export function Dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Network",
      'Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IpConfiguration",
      "Configuration for VM IPs.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration\nPossible values are: `WORKER_IP_UNSPECIFIED`, `WORKER_IP_PUBLIC`, `WORKER_IP_PRIVATE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "The email address of the service account to run the job as.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Zone",
      "The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "AdditionalUserLabels",
      'Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.\n\'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.\'\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "KmsKeyName",
      "'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkerRegion",
      'The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane\'s region.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Subnetwork",
      'Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.',
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
      InputType.Number,
      "NumWorkers",
      "The initial number of Compute Engine instances for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The machine type to use for the job. Defaults to the value from the template if not specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxWorkers",
      "The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "BypassTempDirValidation",
      "Whether to bypass the safety checks for the job's temporary directory. Use with caution.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableStreamingEngine",
      "Whether to enable Streaming Engine for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "AdditionalExperiments",
      "Additional experiment flags for the job.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WorkerZone",
      'The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane\'s region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.',
      [],
      false,
      false,
    ),
  ];
}
