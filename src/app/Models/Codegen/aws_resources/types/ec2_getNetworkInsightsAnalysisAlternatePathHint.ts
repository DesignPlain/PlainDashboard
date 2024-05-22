import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getNetworkInsightsAnalysisAlternatePathHint {
  //
  componentArn?: string;

  //
  componentId?: string;
}

export function ec2_getNetworkInsightsAnalysisAlternatePathHint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "componentId", "", [], true, false),
    new DynamicUIProps(InputType.String, "componentArn", "", [], true, false),
  ];
}
