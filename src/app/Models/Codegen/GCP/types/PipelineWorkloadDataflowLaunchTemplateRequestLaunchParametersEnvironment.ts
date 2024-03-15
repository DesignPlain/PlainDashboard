export interface PipelineWorkloadDataflowLaunchTemplateRequestLaunchParametersEnvironment {
  // The machine type to use for the job. Defaults to the value from the template if not specified.
  MachineType?: string;

  // The Compute Engine zone (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1-a". Mutually exclusive with workerRegion. If neither workerRegion nor workerZone is specified, a zone in the control plane's region is chosen based on available capacity. If both workerZone and zone are set, workerZone takes precedence.
  WorkerZone?: string;

  // Additional experiment flags for the job.
  AdditionalExperiments?: Array<string>;

  // Whether to enable Streaming Engine for the job.
  EnableStreamingEngine?: boolean;

  // 'Name for the Cloud KMS key for the job. The key format is: projects//locations//keyRings//cryptoKeys/'
  KmsKeyName?: string;

  // The Compute Engine region (https://cloud.google.com/compute/docs/regions-zones/regions-zones) in which worker processing should occur, e.g. "us-west1". Mutually exclusive with workerZone. If neither workerRegion nor workerZone is specified, default to the control plane's region.
  WorkerRegion?: string;

  // Whether to bypass the safety checks for the job's temporary directory. Use with caution.
  BypassTempDirValidation?: boolean;

  /*
Configuration for VM IPs.
https://cloud.google.com/dataflow/docs/reference/data-pipelines/rest/v1/projects.locations.pipelines#WorkerIPAddressConfiguration
Possible values are: `WORKER_IP_UNSPECIFIED`, `WORKER_IP_PUBLIC`, `WORKER_IP_PRIVATE`.
*/
  IpConfiguration?: string;

  // The Compute Engine availability zone for launching worker instances to run your pipeline. In the future, workerZone will take precedence.
  Zone?: string;

  /*
Additional user labels to be specified for the job. Keys and values should follow the restrictions specified in the labeling restrictions page. An object containing a list of key/value pairs.
'Example: { "name": "wrench", "mass": "1kg", "count": "3" }.'
'An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.'
*/
  AdditionalUserLabels?: Map<string, string>;

  // The initial number of Compute Engine instances for the job.
  NumWorkers?: number;

  // The email address of the service account to run the job as.
  ServiceAccountEmail?: string;

  // Subnetwork to which VMs will be assigned, if desired. You can specify a subnetwork using either a complete URL or an abbreviated path. Expected to be of the form "https://www.googleapis.com/compute/v1/projects/HOST_PROJECT_ID/regions/REGION/subnetworks/SUBNETWORK" or "regions/REGION/subnetworks/SUBNETWORK". If the subnetwork is located in a Shared VPC network, you must use the complete URL.
  Subnetwork?: string;

  // The Cloud Storage path to use for temporary files. Must be a valid Cloud Storage URL, beginning with gs://.
  TempLocation?: string;

  // The maximum number of Compute Engine instances to be made available to your pipeline during execution, from 1 to 1000.
  MaxWorkers?: number;

  // Network to which VMs will be assigned. If empty or unspecified, the service will use the network "default".
  Network?: string;
}
