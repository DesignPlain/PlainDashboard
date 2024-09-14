import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_MetastoreServiceTelemetryConfig {
  /*
The output format of the Dataproc Metastore service's logs.
Default value is `JSON`.
Possible values are: `LEGACY`, `JSON`.
*/
  logFormat?: string;
}

export function dataproc_MetastoreServiceTelemetryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "logFormat",
      "The output format of the Dataproc Metastore service's logs.\nDefault value is `JSON`.\nPossible values are: `LEGACY`, `JSON`.",
      () => [],
      false,
      false,
    ),
  ];
}
