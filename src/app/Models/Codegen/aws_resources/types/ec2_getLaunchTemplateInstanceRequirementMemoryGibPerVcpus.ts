import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus {
  //
  min?: number;

  //
  max?: number;
}

export function ec2_getLaunchTemplateInstanceRequirementMemoryGibPerVcpus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Number, "min", "", [], true, false),
    new DynamicUIProps(InputType.Number, "max", "", [], true, false),
  ];
}
