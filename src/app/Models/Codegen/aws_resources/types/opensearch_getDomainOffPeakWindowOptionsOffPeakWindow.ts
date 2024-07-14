import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime,
  opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime_GetTypes,
} from "./opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime";

export interface opensearch_getDomainOffPeakWindowOptionsOffPeakWindow {
  // 10h window for updates
  windowStartTimes?: Array<opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime>;
}

export function opensearch_getDomainOffPeakWindowOptionsOffPeakWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "windowStartTimes",
      "10h window for updates",
      opensearch_getDomainOffPeakWindowOptionsOffPeakWindowWindowStartTime_GetTypes(),
      true,
      false,
    ),
  ];
}
