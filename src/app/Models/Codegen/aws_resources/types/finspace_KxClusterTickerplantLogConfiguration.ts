import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface finspace_KxClusterTickerplantLogConfiguration {
  //
  tickerplantLogVolumes?: Array<string>;
}

export function finspace_KxClusterTickerplantLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "tickerplantLogVolumes",
      "",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
