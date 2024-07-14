import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_CxPageAdvancedSettingsDtmfSettings,
  diagflow_CxPageAdvancedSettingsDtmfSettings_GetTypes,
} from "./diagflow_CxPageAdvancedSettingsDtmfSettings";

export interface diagflow_CxPageAdvancedSettings {
  /*
Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:
- Agent level
- Flow level
- Page level
- Parameter level
Structure is documented below.
*/
  dtmfSettings?: diagflow_CxPageAdvancedSettingsDtmfSettings;
}

export function diagflow_CxPageAdvancedSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dtmfSettings",
      "Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:\n* Agent level\n* Flow level\n* Page level\n* Parameter level\nStructure is documented below.",
      diagflow_CxPageAdvancedSettingsDtmfSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
