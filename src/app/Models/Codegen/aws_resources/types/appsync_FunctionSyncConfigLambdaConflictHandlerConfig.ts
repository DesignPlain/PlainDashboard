import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface appsync_FunctionSyncConfigLambdaConflictHandlerConfig {
  // ARN for the Lambda function to use as the Conflict Handler.
  lambdaConflictHandlerArn?: string;
}

export function appsync_FunctionSyncConfigLambdaConflictHandlerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "lambdaConflictHandlerArn",
      "ARN for the Lambda function to use as the Conflict Handler.",
      [],
      false,
      false,
    ),
  ];
}
