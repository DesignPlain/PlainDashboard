import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Compute_getMachineTypesMachineTypeAccelerator,
  Compute_getMachineTypesMachineTypeAccelerator_GetTypes,
} from "./Compute_getMachineTypesMachineTypeAccelerator";
import {
  Compute_getMachineTypesMachineTypeBundledLocalSsd,
  Compute_getMachineTypesMachineTypeBundledLocalSsd_GetTypes,
} from "./Compute_getMachineTypesMachineTypeBundledLocalSsd";
import {
  Compute_getMachineTypesMachineTypeDeprecated,
  Compute_getMachineTypesMachineTypeDeprecated_GetTypes,
} from "./Compute_getMachineTypesMachineTypeDeprecated";

export interface Compute_getMachineTypesMachineType {
  // The maximum total persistent disks size (GB) allowed.
  MaximumPersistentDisksSizeGb?: number;

  // The amount of physical memory available to the instance, defined in MB.
  MemoryMb?: number;

  // The name of the machine type.
  Name?: string;

  // The server-defined URL for the machine type.
  SelfLink?: string;

  // A list of accelerator configurations assigned to this machine type. Structure is documented below.
  Accelerators?: Array<Compute_getMachineTypesMachineTypeAccelerator>;

  // Whether this machine type has a shared CPU.
  IsSharedCpus?: boolean;

  // The maximum persistent disks allowed.
  MaximumPersistentDisks?: number;

  // The number of virtual CPUs that are available to the instance.
  GuestCpus?: number;

  // The configuration of bundled local SSD for the machine type. Structure is documented below.
  BundledLocalSsds?: Array<Compute_getMachineTypesMachineTypeBundledLocalSsd>;

  // The deprecation status associated with this machine type. Structure is documented below.
  Deprecateds?: Array<Compute_getMachineTypesMachineTypeDeprecated>;

  // A textual description of the machine type.
  Description?: string;
}

export function Compute_getMachineTypesMachineType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SelfLink",
      "The server-defined URL for the machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsSharedCpus",
      "Whether this machine type has a shared CPU.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaximumPersistentDisks",
      "The maximum persistent disks allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "BundledLocalSsds",
      "The configuration of bundled local SSD for the machine type. Structure is documented below.",
      Compute_getMachineTypesMachineTypeBundledLocalSsd_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Deprecateds",
      "The deprecation status associated with this machine type. Structure is documented below.",
      Compute_getMachineTypesMachineTypeDeprecated_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "A textual description of the machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaximumPersistentDisksSizeGb",
      "The maximum total persistent disks size (GB) allowed.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MemoryMb",
      "The amount of physical memory available to the instance, defined in MB.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the machine type.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Accelerators",
      "A list of accelerator configurations assigned to this machine type. Structure is documented below.",
      Compute_getMachineTypesMachineTypeAccelerator_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "GuestCpus",
      "The number of virtual CPUs that are available to the instance.",
      [],
      true,
      false,
    ),
  ];
}
