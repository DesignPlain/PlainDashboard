import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ec2_LaunchTemplateInstanceMarketOptionsSpotOptions,
  ec2_LaunchTemplateInstanceMarketOptionsSpotOptions_GetTypes,
} from "./ec2_LaunchTemplateInstanceMarketOptionsSpotOptions";

export interface ec2_LaunchTemplateInstanceMarketOptions {
  // The market type. Can be `spot`.
  marketType?: string;

  // The options for [Spot Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html)
  spotOptions?: ec2_LaunchTemplateInstanceMarketOptionsSpotOptions;
}

export function ec2_LaunchTemplateInstanceMarketOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "marketType",
      "The market type. Can be `spot`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spotOptions",
      "The options for [Spot Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html)",
      () => ec2_LaunchTemplateInstanceMarketOptionsSpotOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
