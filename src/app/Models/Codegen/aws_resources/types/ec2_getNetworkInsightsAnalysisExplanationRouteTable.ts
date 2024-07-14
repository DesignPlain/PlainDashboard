import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getNetworkInsightsAnalysisExplanationRouteTable {
  // ARN of the selected Network Insights Analysis.
  arn?: string;

  //
  id?: string;

  // Name of the filter field. Valid values can be found in the EC2 [`DescribeNetworkInsightsAnalyses`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html) API Reference.
  name?: string;
}

export function ec2_getNetworkInsightsAnalysisExplanationRouteTable_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the selected Network Insights Analysis.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "id", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter field. Valid values can be found in the EC2 [`DescribeNetworkInsightsAnalyses`](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeNetworkInsightsAnalyses.html) API Reference.",
      [],
      true,
      false,
    ),
  ];
}
