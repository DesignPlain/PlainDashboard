import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_LaunchTemplateCreditSpecification {
  /*
The credit option for CPU usage.
Can be `standard` or `unlimited`.
T3 instances are launched as `unlimited` by default.
T2 instances are launched as `standard` by default.
*/
  cpuCredits?: string;
}

export function ec2_LaunchTemplateCreditSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "cpuCredits",
      "The credit option for CPU usage.\nCan be `standard` or `unlimited`.\nT3 instances are launched as `unlimited` by default.\nT2 instances are launched as `standard` by default.",
      [],
      false,
      false,
    ),
  ];
}
