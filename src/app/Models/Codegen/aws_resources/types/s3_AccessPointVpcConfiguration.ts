import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface s3_AccessPointVpcConfiguration {
  // This access point will only allow connections from the specified VPC ID.
  vpcId?: string;
}

export function s3_AccessPointVpcConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "This access point will only allow connections from the specified VPC ID.",
      [],
      true,
      true,
    ),
  ];
}
