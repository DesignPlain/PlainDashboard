import { getAiIndexMetadataConfig } from "./getAiIndexMetadataConfig";

export interface getAiIndexMetadata {
  /*
If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
then existing content of the Index will be replaced by the data from the contentsDeltaUri.
*/
  IsCompleteOverwrite?: boolean;

  // The configuration of the Matching Engine Index.
  Configs?: Array<getAiIndexMetadataConfig>;

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
