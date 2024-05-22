import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2clientvpn_getEndpointClientLoginBannerOption {
  //
  bannerText?: string;

  //
  enabled?: boolean;
}

export function ec2clientvpn_getEndpointClientLoginBannerOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "bannerText", "", [], true, false),
    new DynamicUIProps(InputType.Bool, "enabled", "", [], true, false),
  ];
}
