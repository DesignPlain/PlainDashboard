import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplateCreditSpecification {
  //
  cpuCredits?: string;
}

export function ec2_getLaunchTemplateCreditSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "cpuCredits", "", [], true, false),
  ];
}
