import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput";
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource_GetTypes,
} from "./kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource";

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration {
  // The input stream used by the application.
  input?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput;

  // The destination streams used by the application.
  outputs?: Array<kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput>;

  // The reference data source used by the application.
  referenceDataSource?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "input",
      "The input stream used by the application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "outputs",
      "The destination streams used by the application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationOutput_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "referenceDataSource",
      "The reference data source used by the application.",
      kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationReferenceDataSource_GetTypes(),
      false,
      false,
    ),
  ];
}
