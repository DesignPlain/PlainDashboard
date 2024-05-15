import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Workstations_WorkstationConfigHostGceInstanceAccelerator,
  Workstations_WorkstationConfigHostGceInstanceAccelerator_GetTypes,
} from "./Workstations_WorkstationConfigHostGceInstanceAccelerator";
import {
  Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig,
  Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig_GetTypes,
} from "./Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig";
import {
  Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig,
  Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig_GetTypes,
} from "./Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig";

export interface Workstations_WorkstationConfigHostGceInstance {
  // Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.
  ServiceAccountScopes?: Array<string>;

  // Size of the boot disk in GB.
  BootDiskSizeGb?: number;

  // Whether instances have no public IP address.
  DisablePublicIpAddresses?: boolean;

  // Whether to disable SSH access to the VM.
  DisableSsh?: boolean;

  // The name of a Compute Engine machine type.
  MachineType?: string;

  // Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.
  ServiceAccount?: string;

  // Network tags to add to the Compute Engine machines backing the Workstations.
  Tags?: Array<string>;

  /*
An accelerator card attached to the instance.
Structure is documented below.
*/
  Accelerators?: Array<Workstations_WorkstationConfigHostGceInstanceAccelerator>;

  /*
A set of Compute Engine Confidential VM instance options.
Structure is documented below.
*/
  ConfidentialInstanceConfig?: Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig;

  /*
Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.
See https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization
*/
  EnableNestedVirtualization?: boolean;

  // Number of instances to pool for faster workstation startup.
  PoolSize?: number;

  /*
A set of Compute Engine Shielded instance options.
Structure is documented below.
*/
  ShieldedInstanceConfig?: Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig;
}

export function Workstations_WorkstationConfigHostGceInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ConfidentialInstanceConfig",
      "A set of Compute Engine Confidential VM instance options.\nStructure is documented below.",
      Workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "BootDiskSizeGb",
      "Size of the boot disk in GB.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisablePublicIpAddresses",
      "Whether instances have no public IP address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "MachineType",
      "The name of a Compute Engine machine type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Accelerators",
      "An accelerator card attached to the instance.\nStructure is documented below.",
      Workstations_WorkstationConfigHostGceInstanceAccelerator_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableNestedVirtualization",
      "Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.\nSee https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "PoolSize",
      "Number of instances to pool for faster workstation startup.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ShieldedInstanceConfig",
      "A set of Compute Engine Shielded instance options.\nStructure is documented below.",
      Workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ServiceAccountScopes",
      "Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "DisableSsh",
      "Whether to disable SSH access to the VM.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccount",
      "Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Tags",
      "Network tags to add to the Compute Engine machines backing the Workstations.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
