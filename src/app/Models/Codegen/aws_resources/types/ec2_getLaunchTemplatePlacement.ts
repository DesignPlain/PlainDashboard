import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ec2_getLaunchTemplatePlacement {
  //
  hostId?: string;

  //
  hostResourceGroupArn?: string;

  //
  partitionNumber?: number;

  //
  spreadDomain?: string;

  //
  tenancy?: string;

  //
  affinity?: string;

  //
  availabilityZone?: string;

  //
  groupName?: string;
}

export function ec2_getLaunchTemplatePlacement_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostResourceGroupArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "partitionNumber",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "spreadDomain", "", [], true, false),
    new DynamicUIProps(InputType.String, "tenancy", "", [], true, false),
    new DynamicUIProps(InputType.String, "affinity", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "availabilityZone",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "groupName", "", [], true, false),
    new DynamicUIProps(InputType.String, "hostId", "", [], true, false),
  ];
}
