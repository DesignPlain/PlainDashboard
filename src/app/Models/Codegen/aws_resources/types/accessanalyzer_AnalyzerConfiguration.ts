import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  accessanalyzer_AnalyzerConfigurationUnusedAccess,
  accessanalyzer_AnalyzerConfigurationUnusedAccess_GetTypes,
} from "./accessanalyzer_AnalyzerConfigurationUnusedAccess";

export interface accessanalyzer_AnalyzerConfiguration {
  // A block that specifies the configuration of an unused access analyzer for an AWS organization or account. Documented below
  unusedAccess?: accessanalyzer_AnalyzerConfigurationUnusedAccess;
}

export function accessanalyzer_AnalyzerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "unusedAccess",
      "A block that specifies the configuration of an unused access analyzer for an AWS organization or account. Documented below",
      accessanalyzer_AnalyzerConfigurationUnusedAccess_GetTypes(),
      false,
      true,
    ),
  ];
}
