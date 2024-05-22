import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_getAiIndexMetadataConfig,
  vertex_getAiIndexMetadataConfig_GetTypes,
} from "./vertex_getAiIndexMetadataConfig";

export interface vertex_getAiIndexMetadata {
  // The configuration of the Matching Engine Index.
  configs?: Array<vertex_getAiIndexMetadataConfig>;

  /*
Allows inserting, updating  or deleting the contents of the Matching Engine Index.
The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format
*/
  contentsDeltaUri?: string;

  /*
If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
then existing content of the Index will be replaced by the data from the contentsDeltaUri.
*/
  isCompleteOverwrite?: boolean;
}

export function vertex_getAiIndexMetadata_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "contentsDeltaUri",
      "Allows inserting, updating  or deleting the contents of the Matching Engine Index.\nThe string must be a valid Cloud Storage directory path. If this\nfield is set when calling IndexService.UpdateIndex, then no other\nIndex field can be also updated as part of the same call.\nThe expected structure and format of the files this URI points to is\ndescribed at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "isCompleteOverwrite",
      "If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,\nthen existing content of the Index will be replaced by the data from the contentsDeltaUri.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configs",
      "The configuration of the Matching Engine Index.",
      vertex_getAiIndexMetadataConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
