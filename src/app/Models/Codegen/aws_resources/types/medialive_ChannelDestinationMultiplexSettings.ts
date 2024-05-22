import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_ChannelDestinationMultiplexSettings {
  // The ID of the Multiplex that the encoder is providing output to.
  multiplexId?: string;

  // The program name of the Multiplex program that the encoder is providing output to.
  programName?: string;
}

export function medialive_ChannelDestinationMultiplexSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "multiplexId",
      "The ID of the Multiplex that the encoder is providing output to.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "programName",
      "The program name of the Multiplex program that the encoder is providing output to.",
      [],
      true,
      false,
    ),
  ];
}
