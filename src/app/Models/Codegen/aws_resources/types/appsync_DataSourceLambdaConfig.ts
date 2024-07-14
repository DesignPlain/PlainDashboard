import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appsync_DataSourceLambdaConfig {
  // ARN for the Lambda function.
  functionArn?: string;
}

export function appsync_DataSourceLambdaConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "functionArn",
      "ARN for the Lambda function.",
      [],
      true,
      false,
    ),
  ];
}
