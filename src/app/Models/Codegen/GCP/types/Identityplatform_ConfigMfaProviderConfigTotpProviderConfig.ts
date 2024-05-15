import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Identityplatform_ConfigMfaProviderConfigTotpProviderConfig {
  // The allowed number of adjacent intervals that will be used for verification to avoid clock skew.
  AdjacentIntervals?: number;
}

export function Identityplatform_ConfigMfaProviderConfigTotpProviderConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "AdjacentIntervals",
      "The allowed number of adjacent intervals that will be used for verification to avoid clock skew.",
      [],
      false,
      false,
    ),
  ];
}
