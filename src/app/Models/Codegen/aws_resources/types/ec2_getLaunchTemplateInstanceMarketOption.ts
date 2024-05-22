import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ec2_getLaunchTemplateInstanceMarketOptionSpotOption,
  ec2_getLaunchTemplateInstanceMarketOptionSpotOption_GetTypes,
} from "./ec2_getLaunchTemplateInstanceMarketOptionSpotOption";

export interface ec2_getLaunchTemplateInstanceMarketOption {
  //
  spotOptions?: Array<ec2_getLaunchTemplateInstanceMarketOptionSpotOption>;

  //
  marketType?: string;
}

export function ec2_getLaunchTemplateInstanceMarketOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "spotOptions",
      "",
      ec2_getLaunchTemplateInstanceMarketOptionSpotOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "marketType", "", [], true, false),
  ];
}
