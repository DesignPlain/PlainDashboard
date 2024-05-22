import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_NetworkInsightsAnalysisExplanationClassicLoadBalancerListener {
  //
  instancePort?: number;

  //
  loadBalancerPort?: number;
}

export function ec2_NetworkInsightsAnalysisExplanationClassicLoadBalancerListener_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "instancePort", "", [], false, false),
    new DynamicUIProps(
      InputType.Number,
      "loadBalancerPort",
      "",
      [],
      false,
      false,
    ),
  ];
}
