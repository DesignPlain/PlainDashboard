import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
  // The machine type to use for the job. Defaults to the value from the template if not specified.
  machineType?: string;

  // The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.
  workerRegion?: string;

  // The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.
  workerZone?: string;

  /*
Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  additionalUserLabels?: Map<string, string>;

  /*
Configuration for VM IPs.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration
Possible values are: `WORKER_IP_UNSPECIFIED`, `WORKER_IP_PUBLIC`, `WORKER_IP_PRIVATE`.
*/
  ipConfiguration?: string;

  // The initial number of Compute Engine instances for the job.
  numWorkers?: number;

  // The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.
  zone?: string;

  // Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  network?: string;

  // Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  subnetwork?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  tempLocation?: string;

  // Additional experiment flags for the job.
  additionalExperiments?: Array<string>;

  // Whether to bypass the safety checks for the job's temporary directory. Use with caution.
  bypassTempDirValidation?: boolean;

  // The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  maxWorkers?: number;

  // The email address of the service account to run the job as.
  serviceAccountEmail?: string;

  // Whether to enable Streaming Engine for the job.
  enableStreamingEngine?: boolean;

  // 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'
  kmsKeyName?: string;
}

export function dataflow_PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "additionalUserLabels",
      'Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.\n\'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.\'\n\'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\'',
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipConfiguration",
      "Configuration for VM IPs.\nhttps://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration\nPossible values are: `WORKER_IP_UNSPECIFIED`, `WORKER_IP_PUBLIC`, `WORKER_IP_PRIVATE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "subnetwork",
      'Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmail",
      "The email address of the service account to run the job as.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workerZone",
      'The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane\'s region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "additionalExperiments",
      "Additional experiment flags for the job.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableStreamingEngine",
      "Whether to enable Streaming Engine for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "kmsKeyName",
      "'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "workerRegion",
      'The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane\'s region.',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "network",
      'Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxWorkers",
      "The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The machine type to use for the job. Defaults to the value from the template if not specified.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "numWorkers",
      "The initial number of Compute Engine instances for the job.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.",
      [],
      false,
      false,
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
      InputType.Bool,
      "bypassTempDirValidation",
      "Whether to bypass the safety checks for the job's temporary directory. Use with caution.",
      [],
      false,
      false,
    ),
  ];
}
