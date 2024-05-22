import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface kinesis_getStreamStreamModeDetail {
  // Capacity mode of the stream. Either `ON_DEMAND` or `PROVISIONED`.
  streamMode?: string;
}

export function kinesis_getStreamStreamModeDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "streamMode",
      "Capacity mode of the stream. Either `ON_DEMAND` or `PROVISIONED`.",
      [],
      true,
      false,
    ),
  ];
}
