import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudformation_StackSetInstanceOperationPreferences {
  // Number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region.
  failureToleranceCount?: number;

  // Percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region.
  failureTolerancePercentage?: number;

  // Maximum number of accounts in which to perform this operation at one time.
  maxConcurrentCount?: number;

  // Maximum percentage of accounts in which to perform this operation at one time.
  maxConcurrentPercentage?: number;

  // Concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time. Valid values are `SEQUENTIAL` and `PARALLEL`.
  regionConcurrencyType?: string;

  // Order of the Regions in where you want to perform the stack operation.
  regionOrders?: Array<string>;

  // Specifies how the concurrency level behaves during the operation execution. Valid values are `STRICT_FAILURE_TOLERANCE` and `SOFT_FAILURE_TOLERANCE`.
  concurrencyMode?: string;
}

export function cloudformation_StackSetInstanceOperationPreferences_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'failureTolerancePercentage',
      'Percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxConcurrentCount',
      'Maximum number of accounts in which to perform this operation at one time.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'maxConcurrentPercentage',
      'Maximum percentage of accounts in which to perform this operation at one time.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'regionConcurrencyType',
      'Concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time. Valid values are `SEQUENTIAL` and `PARALLEL`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'regionOrders',
      'Order of the Regions in where you want to perform the stack operation.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'concurrencyMode',
      'Specifies how the concurrency level behaves during the operation execution. Valid values are `STRICT_FAILURE_TOLERANCE` and `SOFT_FAILURE_TOLERANCE`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'failureToleranceCount',
      'Number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region.',
      () => [],
      false,
      false,
    ),
  ];
}
