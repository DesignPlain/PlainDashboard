import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable {
  // The ID of the project containing this table.
  ProjectId?: string;

  /*
The ID of the table. The ID must contain only letters (a-z,
A-Z), numbers (0-9), or underscores (_). The maximum length
is 1,024 characters.
*/
  TableId?: string;

  // The ID of the dataset containing this table.
  DatasetId?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationDetailsStorageConfigTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ProjectId",
      "The ID of the project containing this table.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TableId",
      "The ID of the table. The ID must contain only letters (a-z,\nA-Z), numbers (0-9), or underscores (_). The maximum length\nis 1,024 characters.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DatasetId",
      "The ID of the dataset containing this table.",
      [],
      true,
      false,
    ),
  ];
}
