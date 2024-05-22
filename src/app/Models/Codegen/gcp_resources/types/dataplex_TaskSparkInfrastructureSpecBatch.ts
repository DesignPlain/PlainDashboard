import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface dataplex_TaskSparkInfrastructureSpecBatch {
  // Total number of job executors. Executor Count should be between 2 and 100. [Default=2]
  executorsCount?: number;

  // Max configurable executors. If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]
  maxExecutorsCount?: number;
}

export function dataplex_TaskSparkInfrastructureSpecBatch_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxExecutorsCount",
      "Max configurable executors. If maxExecutorsCount > executorsCount, then auto-scaling is enabled. Max Executor Count should be between 2 and 1000. [Default=1000]",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "executorsCount",
      "Total number of job executors. Executor Count should be between 2 and 100. [Default=2]",
      [],
      false,
      false,
    ),
  ];
}
