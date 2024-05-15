import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_getAiIndexMetadataConfig,
  Vertex_getAiIndexMetadataConfig_GetTypes,
} from "./Vertex_getAiIndexMetadataConfig";

export interface Vertex_getAiIndexMetadata {
  // The configuration of the Matching Engine Index.
  Configs?: Array<Vertex_getAiIndexMetadataConfig>;

  /*
Allows inserting, updating  or deleting the contents of the Matching Engine Index.
The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format
*/
  ContentsDeltaUri?: string;

  /*
If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
then existing content of the Index will be replaced by the data from the contentsDeltaUri.
*/
  IsCompleteOverwrite?: boolean;
}

export function Vertex_getAiIndexMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Configs",
      "The configuration of the Matching Engine Index.",
      Vertex_getAiIndexMetadataConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ContentsDeltaUri",
      "Allows inserting, updating  or deleting the contents of the Matching Engine Index.\nThe string must be a valid Cloud Storage directory path. If this\nfield is set when calling IndexService.UpdateIndex, then no other\nIndex field can be also updated as part of the same call.\nThe expected structure and format of the files this URI points to is\ndescribed at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "IsCompleteOverwrite",
      "If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,\nthen existing content of the Index will be replaced by the data from the contentsDeltaUri.",
      [],
      true,
      false,
    ),
  ];
}
