import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  opensearch_DomainOffPeakWindowOptionsOffPeakWindow,
  opensearch_DomainOffPeakWindowOptionsOffPeakWindow_GetTypes,
} from "./opensearch_DomainOffPeakWindowOptionsOffPeakWindow";

export interface opensearch_DomainOffPeakWindowOptions {
  // Enabled disabled toggle for off-peak update window.
  enabled?: boolean;

  //
  offPeakWindow?: opensearch_DomainOffPeakWindowOptionsOffPeakWindow;
}

export function opensearch_DomainOffPeakWindowOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Enabled disabled toggle for off-peak update window.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "offPeakWindow",
      "",
      opensearch_DomainOffPeakWindowOptionsOffPeakWindow_GetTypes(),
      false,
      false,
    ),
  ];
}
