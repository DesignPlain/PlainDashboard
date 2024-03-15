import { RuntimeVirtualMachineVirtualMachineConfig } from "./RuntimeVirtualMachineVirtualMachineConfig";

export interface RuntimeVirtualMachine {
  /*
(Output)
The unique identifier of the Managed Compute Engine instance.
*/
  InstanceId?: string;

  /*
(Output)
The user-friendly name of the Managed Compute Engine instance.
*/
  InstanceName?: string;

  /*
Virtual Machine configuration settings.
Structure is documented below.
*/
  VirtualMachineConfig?: RuntimeVirtualMachineVirtualMachineConfig;
}
