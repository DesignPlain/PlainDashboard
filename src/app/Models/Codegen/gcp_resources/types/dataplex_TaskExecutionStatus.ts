import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataplex_TaskExecutionStatusLatestJob,
  dataplex_TaskExecutionStatusLatestJob_GetTypes,
} from "./dataplex_TaskExecutionStatusLatestJob";

export interface dataplex_TaskExecutionStatus {
  /*
(Output)
latest job execution.
Structure is documented below.
*/
  latestJobs?: Array<dataplex_TaskExecutionStatusLatestJob>;

  /*
(Output)
Last update time of the status.
*/
  updateTime?: string;
}

export function dataplex_TaskExecutionStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "(Output)\nLast update time of the status.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "latestJobs",
      "(Output)\nlatest job execution.\nStructure is documented below.",
      dataplex_TaskExecutionStatusLatestJob_GetTypes(),
      false,
      false,
    ),
  ];
}
