import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  notebooks_RuntimeVirtualMachineVirtualMachineConfig,
  notebooks_RuntimeVirtualMachineVirtualMachineConfig_GetTypes,
} from "./notebooks_RuntimeVirtualMachineVirtualMachineConfig";

export interface notebooks_RuntimeVirtualMachine {
  /*
(Output)
The unique identifier of the Managed Compute Engine instance.
*/
  instanceId?: string;

  /*
(Output)
The user-friendly name of the Managed Compute Engine instance.
*/
  instanceName?: string;

  /*
Virtual Machine configuration settings.
Structure is documented below.
*/
  virtualMachineConfig?: notebooks_RuntimeVirtualMachineVirtualMachineConfig;
}

export function notebooks_RuntimeVirtualMachine_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "instanceId",
      "(Output)\nThe unique identifier of the Managed Compute Engine instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceName",
      "(Output)\nThe user-friendly name of the Managed Compute Engine instance.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "virtualMachineConfig",
      "Virtual Machine configuration settings.\nStructure is documented below.",
      () => notebooks_RuntimeVirtualMachineVirtualMachineConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
