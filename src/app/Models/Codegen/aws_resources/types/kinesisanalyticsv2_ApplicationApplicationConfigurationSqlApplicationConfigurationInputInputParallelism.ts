import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism {
  // The number of in-application streams to create.
  count?: number;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputParallelism_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "count",
      "The number of in-application streams to create.",
      [],
      false,
      false,
    ),
  ];
}
