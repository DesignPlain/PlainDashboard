import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  opensearch_getDomainOffPeakWindowOptionsOffPeakWindow,
  opensearch_getDomainOffPeakWindowOptionsOffPeakWindow_GetTypes,
} from "./opensearch_getDomainOffPeakWindowOptionsOffPeakWindow";

export interface opensearch_getDomainOffPeakWindowOptions {
  // Enabled disabled toggle for off-peak update window
  enabled?: boolean;

  //
  offPeakWindows?: Array<opensearch_getDomainOffPeakWindowOptionsOffPeakWindow>;
}

export function opensearch_getDomainOffPeakWindowOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "offPeakWindows",
      "",
      () => opensearch_getDomainOffPeakWindowOptionsOffPeakWindow_GetTypes(),
      true,
      false,
    ),
  ];
}
