import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus,
  dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus_GetTypes,
} from "./dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus";

export interface dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord {
  /*
(Output)
The name of the created compilation result, if one was successfully created. Must be in the format projects/-/locations/-/repositories/-/compilationResults/-.
*/
  compilationResult?: string;

  /*
(Output)
The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.
Structure is documented below.
*/
  errorStatuses?: Array<dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus>;

  /*
(Output)
The timestamp of this release attempt.
*/
  releaseTime?: string;
}

export function dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "compilationResult",
      "(Output)\nThe name of the created compilation result, if one was successfully created. Must be in the format projects/*/locations/*/repositories/*/compilationResults/*.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "errorStatuses",
      "(Output)\nThe error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.\nStructure is documented below.",
      dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "releaseTime",
      "(Output)\nThe timestamp of this release attempt.",
      [],
      false,
      false,
    ),
  ];
}
