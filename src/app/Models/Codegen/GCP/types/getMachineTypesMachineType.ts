import { getMachineTypesMachineTypeAccelerator } from "./getMachineTypesMachineTypeAccelerator";
import { getMachineTypesMachineTypeBundledLocalSsd } from "./getMachineTypesMachineTypeBundledLocalSsd";
import { getMachineTypesMachineTypeDeprecated } from "./getMachineTypesMachineTypeDeprecated";

export interface getMachineTypesMachineType {
  // The name of the machine type.
  Name?: string;

  // The server-defined URL for the machine type.
  SelfLink?: string;

  // A textual description of the machine type.
  Description?: string;

  // The number of virtual CPUs that are available to the instance.
  GuestCpus?: number;

  // Whether this machine type has a shared CPU.
  IsSharedCpus?: boolean;

  // The maximum total persistent disks size (GB) allowed.
  MaximumPersistentDisksSizeGb?: number;

  // The amount of physical memory available to the instance, defined in MB.
  MemoryMb?: number;

  // A list of accelerator configurations assigned to this machine type. Structure is documented below.
  Accelerators?: Array<getMachineTypesMachineTypeAccelerator>;

  // The configuration of bundled local SSD for the machine type. Structure is documented below.
  BundledLocalSsds?: Array<getMachineTypesMachineTypeBundledLocalSsd>;

  // The deprecation status associated with this machine type. Structure is documented below.
  Deprecateds?: Array<getMachineTypesMachineTypeDeprecated>;

  // The maximum persistent disks allowed.
  MaximumPersistentDisks?: number;
}
