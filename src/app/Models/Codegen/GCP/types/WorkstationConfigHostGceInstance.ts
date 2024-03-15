import { WorkstationConfigHostGceInstanceShieldedInstanceConfig } from "./WorkstationConfigHostGceInstanceShieldedInstanceConfig";
import { WorkstationConfigHostGceInstanceConfidentialInstanceConfig } from "./WorkstationConfigHostGceInstanceConfidentialInstanceConfig";
import { WorkstationConfigHostGceInstanceAccelerator } from "./WorkstationConfigHostGceInstanceAccelerator";

export interface WorkstationConfigHostGceInstance {
  // Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.
  ServiceAccountScopes?: Array<string>;

  /*
A set of Compute Engine Shielded instance options.
Structure is documented below.
*/
  ShieldedInstanceConfig?: WorkstationConfigHostGceInstanceShieldedInstanceConfig;

  // Network tags to add to the Compute Engine machines backing the Workstations.
  Tags?: Array<string>;

  /*
A set of Compute Engine Confidential VM instance options.
Structure is documented below.
*/
  ConfidentialInstanceConfig?: WorkstationConfigHostGceInstanceConfidentialInstanceConfig;

  // Whether instances have no public IP address.
  DisablePublicIpAddresses?: boolean;

  // Whether to disable SSH access to the VM.
  DisableSsh?: boolean;

  /*
Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.
See https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization
*/
  EnableNestedVirtualization?: boolean;

  // The name of a Compute Engine machine type.
  MachineType?: string;

  /*
An accelerator card attached to the instance.
Structure is documented below.
*/
  Accelerators?: Array<WorkstationConfigHostGceInstanceAccelerator>;

  // Size of the boot disk in GB.
  BootDiskSizeGb?: number;

  // Number of instances to pool for faster workstation startup.
  PoolSize?: number;

  // Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.
  ServiceAccount?: string;
}
