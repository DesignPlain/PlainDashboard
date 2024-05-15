import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus,
  Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus_GetTypes,
} from "./Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus";

export interface Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord {
  /*
(Output)
The timestamp of this release attempt.
*/
  ReleaseTime?: string;

  /*
(Output)
The name of the created compilation result, if one was successfully created. Must be in the format projects/-/locations/-/repositories/-/compilationResults/-.
*/
  CompilationResult?: string;

  /*
(Output)
The error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.
Structure is documented below.
*/
  ErrorStatuses?: Array<Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus>;
}

export function Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecord_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ReleaseTime",
      "(Output)\nThe timestamp of this release attempt.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "CompilationResult",
      "(Output)\nThe name of the created compilation result, if one was successfully created. Must be in the format projects/*/locations/*/repositories/*/compilationResults/*.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ErrorStatuses",
      "(Output)\nThe error status encountered upon this attempt to create the compilation result, if the attempt was unsuccessful.\nStructure is documented below.",
      Dataform_RepositoryReleaseConfigRecentScheduledReleaseRecordErrorStatus_GetTypes(),
      false,
      false,
    ),
  ];
}
