import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rds_getClusterMasterUserSecret {
  //
  kmsKeyId?: string;

  //
  secretArn?: string;

  //
  secretStatus?: string;
}

export function rds_getClusterMasterUserSecret_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "secretStatus", "", [], true, false),
    new DynamicUIProps(InputType.String, "kmsKeyId", "", [], true, false),
    new DynamicUIProps(InputType.String, "secretArn", "", [], true, false),
  ];
}
