import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

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
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "Unique service name.",
      [],
      true,
      false,
    ),
  ];
}
