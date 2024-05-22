import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplatePrivateDnsNameOption {
  //
  enableResourceNameDnsARecord?: boolean;

  //
  enableResourceNameDnsAaaaRecord?: boolean;

  //
  hostnameType?: string;
}

export function ec2_getLaunchTemplatePrivateDnsNameOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceNameDnsARecord",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableResourceNameDnsAaaaRecord",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "hostnameType", "", [], true, false),
  ];
}
