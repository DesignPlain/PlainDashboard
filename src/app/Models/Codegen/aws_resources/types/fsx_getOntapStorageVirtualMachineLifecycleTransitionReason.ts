import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
  ];
}
