import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  compute_getMachineTypesMachineTypeDeprecated,
  compute_getMachineTypesMachineTypeDeprecated_GetTypes,
} from "./compute_getMachineTypesMachineTypeDeprecated";
import {
  compute_getMachineTypesMachineTypeAccelerator,
  compute_getMachineTypesMachineTypeAccelerator_GetTypes,
} from "./compute_getMachineTypesMachineTypeAccelerator";
import {
  compute_getMachineTypesMachineTypeBundledLocalSsd,
  compute_getMachineTypesMachineTypeBundledLocalSsd_GetTypes,
} from "./compute_getMachineTypesMachineTypeBundledLocalSsd";

export interface compute_getMachineTypesMachineType {
  // The number of virtual CPUs that are available to the instance.
  guestCpus?: number;

  // The server-defined URL for the machine type.
  selfLink?: string;

  // The maximum persistent disks allowed.
  maximumPersistentDisks?: number;

  // The maximum total persistent disks size (GB) allowed.
  maximumPersistentDisksSizeGb?: number;

  // The amount of physical memory available to the instance, defined in MB.
  memoryMb?: number;

  // A list of accelerator configurations assigned to this machine type. Structure is documented below.
  accelerators?: Array<compute_getMachineTypesMachineTypeAccelerator>;

  // The configuration of bundled local SSD for the machine type. Structure is documented below.
  bundledLocalSsds?: Array<compute_getMachineTypesMachineTypeBundledLocalSsd>;

  // The deprecation status associated with this machine type. Structure is documented below.
  deprecateds?: Array<compute_getMachineTypesMachineTypeDeprecated>;

  // A textual description of the machine type.
  description?: string;

  // Whether this machine type has a shared CPU.
  isSharedCpus?: boolean;

  // The name of the machine type.
  name?: string;
}

export function compute_getMachineTypesMachineType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "memoryMb",
      "The amount of physical memory available to the instance, defined in MB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "A textual description of the machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "bundledLocalSsds",
      "The configuration of bundled local SSD for the machine type. Structure is documented below.",
      compute_getMachineTypesMachineTypeBundledLocalSsd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "deprecateds",
      "The deprecation status associated with this machine type. Structure is documented below.",
      compute_getMachineTypesMachineTypeDeprecated_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isSharedCpus",
      "Whether this machine type has a shared CPU.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "guestCpus",
      "The number of virtual CPUs that are available to the instance.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "selfLink",
      "The server-defined URL for the machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumPersistentDisks",
      "The maximum persistent disks allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumPersistentDisksSizeGb",
      "The maximum total persistent disks size (GB) allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accelerators",
      "A list of accelerator configurations assigned to this machine type. Structure is documented below.",
      compute_getMachineTypesMachineTypeAccelerator_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the machine type.",
      [],
      true,
      false,
    ),
  ];
}
