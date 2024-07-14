import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apigateway_AccountThrottleSetting {
  // Absolute maximum number of times API Gateway allows the API to be called per second (RPS).
  burstLimit?: number;

  // Number of times API Gateway allows the API to be called per second on average (RPS).
  rateLimit?: number;
}

export function apigateway_AccountThrottleSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "burstLimit",
      "Absolute maximum number of times API Gateway allows the API to be called per second (RPS).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "rateLimit",
      "Number of times API Gateway allows the API to be called per second on average (RPS).",
      [],
      false,
      false,
    ),
  ];
}
