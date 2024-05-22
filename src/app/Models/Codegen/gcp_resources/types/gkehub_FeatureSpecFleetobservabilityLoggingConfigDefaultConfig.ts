import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig {
  /*
Specified if fleet logging feature is enabled.
Possible values are: `MODE_UNSPECIFIED`, `COPY`, `MOVE`.
*/
  mode?: string;
}

export function gkehub_FeatureSpecFleetobservabilityLoggingConfigDefaultConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "mode",
      "Specified if fleet logging feature is enabled.\nPossible values are: `MODE_UNSPECIFIED`, `COPY`, `MOVE`.",
      [],
      false,
      false,
    ),
  ];
}
