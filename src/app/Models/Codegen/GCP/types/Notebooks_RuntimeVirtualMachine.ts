import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Notebooks_RuntimeVirtualMachineVirtualMachineConfig,
  Notebooks_RuntimeVirtualMachineVirtualMachineConfig_GetTypes,
} from "./Notebooks_RuntimeVirtualMachineVirtualMachineConfig";

export interface Notebooks_RuntimeVirtualMachine {
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
  VirtualMachineConfig?: Notebooks_RuntimeVirtualMachineVirtualMachineConfig;
}

export function Notebooks_RuntimeVirtualMachine_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "InstanceId",
      "(Output)\nThe unique identifier of the Managed Compute Engine instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "InstanceName",
      "(Output)\nThe user-friendly name of the Managed Compute Engine instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "VirtualMachineConfig",
      "Virtual Machine configuration settings.\nStructure is documented below.",
      Notebooks_RuntimeVirtualMachineVirtualMachineConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
