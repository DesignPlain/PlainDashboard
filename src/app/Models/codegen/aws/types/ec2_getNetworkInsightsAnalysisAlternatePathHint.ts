import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getNetworkInsightsAnalysisAlternatePathHint {
  //
  componentArn?: string;

  //
  componentId?: string;
}

export function ec2_getNetworkInsightsAnalysisAlternatePathHint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "componentArn",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "componentId",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
