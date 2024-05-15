import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_TaskNotebookInfrastructureSpecBatch {
  // Total number of job executors. Executor Count should be between 2 and 100. [Default=2]
  ExecutorsCount?: number;

  // Max configurable executors. If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]
  MaxExecutorsCount?: number;
}

export function Dataplex_TaskNotebookInfrastructureSpecBatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ExecutorsCount",
      "Total number of job executors. Executor Count should be between 2 and 100. [Default=2]",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "MaxExecutorsCount",
      "Max configurable executors. If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]",
      [],
      false,
      false,
    ),
  ];
}
