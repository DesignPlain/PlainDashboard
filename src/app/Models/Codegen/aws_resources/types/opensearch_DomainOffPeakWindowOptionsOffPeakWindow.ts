import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime,
  opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime_GetTypes,
} from "./opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime";

export interface opensearch_DomainOffPeakWindowOptionsOffPeakWindow {
  // 10h window for updates
  windowStartTime?: opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime;
}

export function opensearch_DomainOffPeakWindowOptionsOffPeakWindow_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "windowStartTime",
      "10h window for updates",
      opensearch_DomainOffPeakWindowOptionsOffPeakWindowWindowStartTime_GetTypes(),
      false,
      false,
    ),
  ];
}
