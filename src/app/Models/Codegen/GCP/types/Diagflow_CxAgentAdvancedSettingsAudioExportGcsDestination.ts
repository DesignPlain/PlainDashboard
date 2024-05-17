import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination {
  /*
The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix
*/
  Uri?: string;
}

export function Diagflow_CxAgentAdvancedSettingsAudioExportGcsDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Uri",
      "The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.\nFormat: gs://bucket/object-name-or-prefix",
      [],
      false,
      false,
    ),
  ];
}
