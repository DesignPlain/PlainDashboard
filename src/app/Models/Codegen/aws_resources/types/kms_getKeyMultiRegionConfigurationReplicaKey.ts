import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kms_getKeyMultiRegionConfigurationReplicaKey {
  // The key ARN of a primary or replica key of a multi-Region key.
  arn?: string;

  // The AWS Region of a primary or replica key in a multi-Region key.
  region?: string;
}

export function kms_getKeyMultiRegionConfigurationReplicaKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "region",
      "The AWS Region of a primary or replica key in a multi-Region key.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The key ARN of a primary or replica key of a multi-Region key.",
      [],
      true,
      false,
    ),
  ];
}
