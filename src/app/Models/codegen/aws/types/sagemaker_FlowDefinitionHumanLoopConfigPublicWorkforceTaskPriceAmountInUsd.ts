import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd {
  // The fractional portion, in cents, of the amount. Valid value range between `0` and `99`.
  cents?: number;

  // The whole number of dollars in the amount. Valid value range between `0` and `2`.
  dollars?: number;

  // Fractions of a cent, in tenths. Valid value range between `0` and `9`.
  tenthFractionsOfACent?: number;
}

export function sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "cents",
      "The fractional portion, in cents, of the amount. Valid value range between `0` and `99`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "dollars",
      "The whole number of dollars in the amount. Valid value range between `0` and `2`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "tenthFractionsOfACent",
      "Fractions of a cent, in tenths. Valid value range between `0` and `9`.",
      () => [],
      false,
      true,
    ),
  ];
}
