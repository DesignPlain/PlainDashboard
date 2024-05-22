import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_InstanceInstanceMarketOptionsSpotOptions {
  // The maximum hourly price that you're willing to pay for a Spot Instance.
  maxPrice?: string;

  // The Spot Instance request type. Valid values include `one-time`, `persistent`. Persistent Spot Instance requests are only supported when the instance interruption behavior is either hibernate or stop. The default is `one-time`.
  spotInstanceType?: string;

  // The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). Supported only for persistent requests.
  validUntil?: string;

  // The behavior when a Spot Instance is interrupted. Valid values include `hibernate`, `stop`, `terminate` . The default is `terminate`.
  instanceInterruptionBehavior?: string;
}

export function ec2_InstanceInstanceMarketOptionsSpotOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "maxPrice",
      "The maximum hourly price that you're willing to pay for a Spot Instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "spotInstanceType",
      "The Spot Instance request type. Valid values include `one-time`, `persistent`. Persistent Spot Instance requests are only supported when the instance interruption behavior is either hibernate or stop. The default is `one-time`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "validUntil",
      "The end date of the request, in UTC format (YYYY-MM-DDTHH:MM:SSZ). Supported only for persistent requests.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceInterruptionBehavior",
      "The behavior when a Spot Instance is interrupted. Valid values include `hibernate`, `stop`, `terminate` . The default is `terminate`.",
      [],
      false,
      true,
    ),
  ];
}
