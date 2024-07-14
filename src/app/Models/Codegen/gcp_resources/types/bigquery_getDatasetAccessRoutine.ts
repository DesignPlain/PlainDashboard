import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_getDatasetAccessRoutine {
  // The dataset ID.
  datasetId?: string;

  // The ID of the project containing this table.
  projectId?: string;

  /*
The ID of the routine. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 256 characters.
*/
  routineId?: string;
}

export function bigquery_getDatasetAccessRoutine_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The dataset ID.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The ID of the project containing this table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "routineId",
      "The ID of the routine. The ID must contain only letters (a-z,\nA-Z), numbers (0-9), or underscores (_). The maximum length\nis 256 characters.",
      [],
      true,
      false,
    ),
  ];
}
