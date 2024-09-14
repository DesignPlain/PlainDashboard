import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor {
  // Unique provider name.
  providerName?: string;

  // Unique service name.
  serviceName?: string;
}

export function medialive_MultiplexProgramMultiplexProgramSettingsServiceDescriptor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "providerName",
      "Unique provider name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "Unique service name.",
      () => [],
      true,
      false,
    ),
  ];
}
