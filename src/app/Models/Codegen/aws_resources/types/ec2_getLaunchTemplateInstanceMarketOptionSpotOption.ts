import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getLaunchTemplateInstanceMarketOptionSpotOption {
  //
  blockDurationMinutes?: number;

  //
  instanceInterruptionBehavior?: string;

  //
  maxPrice?: string;

  //
  spotInstanceType?: string;

  //
  validUntil?: string;
}

export function ec2_getLaunchTemplateInstanceMarketOptionSpotOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "blockDurationMinutes",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceInterruptionBehavior",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "maxPrice", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "spotInstanceType",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "validUntil", "", [], true, false),
  ];
}
