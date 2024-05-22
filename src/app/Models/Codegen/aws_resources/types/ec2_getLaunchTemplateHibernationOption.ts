import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplateHibernationOption {
  //
  configured?: boolean;
}

export function ec2_getLaunchTemplateHibernationOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "configured", "", [], true, false),
  ];
}
