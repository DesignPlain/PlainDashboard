import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxFlowAdvancedSettingsAudioExportGcsDestination,
  Diagflow_CxFlowAdvancedSettingsAudioExportGcsDestination_GetTypes,
} from "./Diagflow_CxFlowAdvancedSettingsAudioExportGcsDestination";
import {
  Diagflow_CxFlowAdvancedSettingsDtmfSettings,
  Diagflow_CxFlowAdvancedSettingsDtmfSettings_GetTypes,
} from "./Diagflow_CxFlowAdvancedSettingsDtmfSettings";

export interface Diagflow_CxFlowAdvancedSettings {
  /*
If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination. Exposed at the following levels:
- Agent level
- Flow level
Structure is documented below.
*/
  AudioExportGcsDestination?: Diagflow_CxFlowAdvancedSettingsAudioExportGcsDestination;

  /*
Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:
- Agent level
- Flow level
- Page level
- Parameter level
Structure is documented below.
*/
  DtmfSettings?: Diagflow_CxFlowAdvancedSettingsDtmfSettings;
}

export function Diagflow_CxFlowAdvancedSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AudioExportGcsDestination",
      "If present, incoming audio is exported by Dialogflow to the configured Google Cloud Storage destination. Exposed at the following levels:\n* Agent level\n* Flow level\nStructure is documented below.",
      Diagflow_CxFlowAdvancedSettingsAudioExportGcsDestination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "DtmfSettings",
      "Define behaviors for DTMF (dual tone multi frequency). DTMF settings does not override each other. DTMF settings set at different levels define DTMF detections running in parallel. Exposed at the following levels:\n* Agent level\n* Flow level\n* Page level\n* Parameter level\nStructure is documented below.",
      Diagflow_CxFlowAdvancedSettingsDtmfSettings_GetTypes(),
      false,
      false,
    ),
  ];
}
