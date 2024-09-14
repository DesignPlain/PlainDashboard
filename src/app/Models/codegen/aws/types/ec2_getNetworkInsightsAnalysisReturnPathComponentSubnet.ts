import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet {
  // Name of the filter field. Valid values can be found in the EC2 [`DescribeNetworkInsightsAnalyses`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html) API Reference.
  name?: string;

  // ARN of the selected Network Insights Analysis.
  arn?: string;

  //
  id?: string;
}

export function ec2_getNetworkInsightsAnalysisReturnPathComponentSubnet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter field. Valid values can be found in the EC2 [`DescribeNetworkInsightsAnalyses`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html) API Reference.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the selected Network Insights Analysis.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "id", "", () => [], true, false),
  ];
}
