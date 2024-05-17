import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageAdvancedSettingsDtmfSettings,
  Diagflow_CxPageAdvancedSettingsDtmfSettings_GetTypes,
} from "./Diagflow_CxPageAdvancedSettingsDtmfSettings";

export interface Diagflow_CxPageAdvancedSettings {
  /*
Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:
- Agent level
- Flow level
- Page level
- Parameter level
Structure is documented below.
*/
  DtmfSettings?: Diagflow_CxPageAdvancedSettingsDtmfSettings;
}

export function Diagflow_CxPageAdvancedSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DtmfSettings",
      "Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:\n* Agent level\n* Flow level\n* Page level\n* Parameter level\nStructure is documented below.",
      Diagflow_CxPageAdvancedSettingsDtmfSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
