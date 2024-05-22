import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig,
  workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig_GetTypes,
} from "./workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig";
import {
  workstations_WorkstationConfigHostGceInstanceAccelerator,
  workstations_WorkstationConfigHostGceInstanceAccelerator_GetTypes,
} from "./workstations_WorkstationConfigHostGceInstanceAccelerator";
import {
  workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig,
  workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig_GetTypes,
} from "./workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig";

export interface workstations_WorkstationConfigHostGceInstance {
  /*
A set of Compute Engine Confidential VM instance options.
Structure is documented below.
*/
  confidentialInstanceConfig?: workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig;

  // Whether to disable SSH access to the VM.
  disableSsh?: boolean;

  // The name of a Compute Engine machine type.
  machineType?: string;

  // Number of instances to pool for faster workstation startup.
  poolSize?: number;

  // Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.
  serviceAccount?: string;

  // Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.
  serviceAccountScopes?: Array<string>;

  /*
A set of Compute Engine Shielded instance options.
Structure is documented below.
*/
  shieldedInstanceConfig?: workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig;

  /*
An accelerator card attached to the instance.
Structure is documented below.
*/
  accelerators?: Array<workstations_WorkstationConfigHostGceInstanceAccelerator>;

  // Size of the boot disk in GB.
  bootDiskSizeGb?: number;

  // Whether instances have no public IP address.
  disablePublicIpAddresses?: boolean;

  /*
Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.
See https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization
*/
  enableNestedVirtualization?: boolean;

  // Network tags to add to the Compute Engine machines backing the Workstations.
  tags?: Array<string>;
}

export function workstations_WorkstationConfigHostGceInstance_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "machineType",
      "The name of a Compute Engine machine type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "poolSize",
      "Number of instances to pool for faster workstation startup.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accelerators",
      "An accelerator card attached to the instance.\nStructure is documented below.",
      workstations_WorkstationConfigHostGceInstanceAccelerator_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bootDiskSizeGb",
      "Size of the boot disk in GB.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableNestedVirtualization",
      "Whether to enable nested virtualization on the Compute Engine VMs backing the Workstations.\nSee https://cloud.google.com/workstations/docs/reference/rest/v1beta/projects.locations.workstationClusters.workstationConfigs#GceInstance.FIELDS.enable_nested_virtualization",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "confidentialInstanceConfig",
      "A set of Compute Engine Confidential VM instance options.\nStructure is documented below.",
      workstations_WorkstationConfigHostGceInstanceConfidentialInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disableSsh",
      "Whether to disable SSH access to the VM.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccount",
      "Email address of the service account that will be used on VM instances used to support this config. This service account must have permission to pull the specified container image. If not set, VMs will run without a service account, in which case the image must be publicly accessible.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "serviceAccountScopes",
      "Scopes to grant to the service_account. Various scopes are automatically added based on feature usage. When specified, users of workstations under this configuration must have `iam.serviceAccounts.actAs` on the service account.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "shieldedInstanceConfig",
      "A set of Compute Engine Shielded instance options.\nStructure is documented below.",
      workstations_WorkstationConfigHostGceInstanceShieldedInstanceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "disablePublicIpAddresses",
      "Whether instances have no public IP address.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tags",
      "Network tags to add to the Compute Engine machines backing the Workstations.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
