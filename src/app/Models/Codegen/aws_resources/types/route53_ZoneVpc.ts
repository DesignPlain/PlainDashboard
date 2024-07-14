import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53_ZoneVpc {
  // ID of the VPC to associate.
  vpcId?: string;

  // Region of the VPC to associate. Defaults to AWS provider region.
  vpcRegion?: string;
}

export function route53_ZoneVpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vpcId",
      "ID of the VPC to associate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcRegion",
      "Region of the VPC to associate. Defaults to AWS provider region.",
      [],
      false,
      false,
    ),
  ];
}
