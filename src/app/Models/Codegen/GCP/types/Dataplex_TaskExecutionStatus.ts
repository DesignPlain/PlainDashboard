import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataplex_TaskExecutionStatusLatestJob,
  Dataplex_TaskExecutionStatusLatestJob_GetTypes,
} from "./Dataplex_TaskExecutionStatusLatestJob";

export interface Dataplex_TaskExecutionStatus {
  /*
(Output)
latest job execution.
Structure is documented below.
*/
  LatestJobs?: Array<Dataplex_TaskExecutionStatusLatestJob>;

  /*
(Output)
Last update time of the status.
*/
  UpdateTime?: string;
}

export function Dataplex_TaskExecutionStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "LatestJobs",
      "(Output)\nlatest job execution.\nStructure is documented below.",
      Dataplex_TaskExecutionStatusLatestJob_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UpdateTime",
      "(Output)\nLast update time of the status.",
      [],
      false,
      false,
    ),
  ];
}
