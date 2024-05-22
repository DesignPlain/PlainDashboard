import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ec2_getLaunchTemplateCpuOption {
  //
  amdSevSnp?: string;

  //
  coreCount?: number;

  //
  threadsPerCore?: number;
}

export function ec2_getLaunchTemplateCpuOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "amdSevSnp", "", [], true, false),
    new DynamicUIProps(InputType.Number, "coreCount", "", [], true, false),
    new DynamicUIProps(InputType.Number, "threadsPerCore", "", [], true, false),
  ];
}
