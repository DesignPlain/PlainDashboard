import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigquery_BiReservationPreferredTable {
  // The ID of the dataset in the above project.
  DatasetId?: string;

  // The assigned project ID of the project.
  ProjectId?: string;

  // The ID of the table in the above dataset.
  TableId?: string;
}

export function Bigquery_BiReservationPreferredTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The ID of the dataset in the above project.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The assigned project ID of the project.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TableId",
      "The ID of the table in the above dataset.",
      [],
      false,
      false,
    ),
  ];
}
