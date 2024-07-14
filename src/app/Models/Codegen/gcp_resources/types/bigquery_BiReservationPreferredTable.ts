import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bigquery_BiReservationPreferredTable {
  // The ID of the dataset in the above project.
  datasetId?: string;

  // The assigned project ID of the project.
  projectId?: string;

  // The ID of the table in the above dataset.
  tableId?: string;
}

export function bigquery_BiReservationPreferredTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "datasetId",
      "The ID of the dataset in the above project.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "projectId",
      "The assigned project ID of the project.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "tableId",
      "The ID of the table in the above dataset.",
      [],
      false,
      false,
    ),
  ];
}
