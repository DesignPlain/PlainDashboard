import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface dataproc_getMetastoreServiceTelemetryConfig {
  // The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]
  logFormat?: string;
}

export function dataproc_getMetastoreServiceTelemetryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logFormat",
      'The output format of the Dataproc Metastore service\'s logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]',
      [],
      true,
      false,
    ),
  ];
}
