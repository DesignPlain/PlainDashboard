import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudformation_StackSetOperationPreferences {
  // The maximum number of accounts in which to perform this operation at one time.
  maxConcurrentCount?: number;

  // The maximum percentage of accounts in which to perform this operation at one time.
  maxConcurrentPercentage?: number;

  // The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time.
  regionConcurrencyType?: string;

  // The order of the Regions in where you want to perform the stack operation.
  regionOrders?: Array<string>;

  // The number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region.
  failureToleranceCount?: number;

  // The percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region.
  failureTolerancePercentage?: number;
}

export function cloudformation_StackSetOperationPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "regionOrders",
      "The order of the Regions in where you want to perform the stack operation.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureToleranceCount",
      "The number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "failureTolerancePercentage",
      "The percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentCount",
      "The maximum number of accounts in which to perform this operation at one time.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxConcurrentPercentage",
      "The maximum percentage of accounts in which to perform this operation at one time.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "regionConcurrencyType",
      "The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time.",
      () => [],
      false,
      false,
    ),
  ];
}
