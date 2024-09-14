import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fsx_getOntapStorageVirtualMachineLifecycleTransitionReason {
  // A detailed message.
  message?: string;
}

export function fsx_getOntapStorageVirtualMachineLifecycleTransitionReason_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "message",
      "A detailed message.",
      () => [],
      true,
      false,
    ),
  ];
}
