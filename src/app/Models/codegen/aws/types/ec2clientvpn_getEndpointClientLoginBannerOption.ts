import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ec2clientvpn_getEndpointClientLoginBannerOption {
  //
  bannerText?: string;

  //
  enabled?: boolean;
}

export function ec2clientvpn_getEndpointClientLoginBannerOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bannerText",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
  ];
}
