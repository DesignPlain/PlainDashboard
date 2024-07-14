import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dynamodb_GlobalTableReplica {
  // AWS region name of replica DynamoDB TableE.g., `us-east-1`
  regionName?: string;
}

export function dynamodb_GlobalTableReplica_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "regionName",
      "AWS region name of replica DynamoDB TableE.g., `us-east-1`",
      [],
      true,
      false,
    ),
  ];
}
