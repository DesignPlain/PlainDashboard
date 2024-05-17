import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiIndexMetadataConfig,
  Vertex_AiIndexMetadataConfig_GetTypes,
} from "./Vertex_AiIndexMetadataConfig";

export interface Vertex_AiIndexMetadata {
  /*
If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
then existing content of the Index will be replaced by the data from the contentsDeltaUri.
*/
  IsCompleteOverwrite?: boolean;

  /*
The configuration of the Matching Engine Index.
Structure is documented below.
*/
  Config?: Vertex_AiIndexMetadataConfig;

  /*
Allows inserting, updating  or deleting the contents of the Matching Engine Index.
The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format
*/
  ContentsDeltaUri?: string;
}

export function Vertex_AiIndexMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "IsCompleteOverwrite",
      "If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,\nthen existing content of the Index will be replaced by the data from the contentsDeltaUri.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Config",
      "The configuration of the Matching Engine Index.\nStructure is documented below.",
      Vertex_AiIndexMetadataConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ContentsDeltaUri",
      "Allows inserting, updating  or deleting the contents of the Matching Engine Index.\nThe string must be a valid Cloud Storage directory path. If this\nfield is set when calling IndexService.UpdateIndex, then no other\nIndex field can be also updated as part of the same call.\nThe expected structure and format of the files this URI points to is\ndescribed at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format",
      [],
      true,
      false,
    ),
  ];
}
