import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_MetastoreServiceTelemetryConfig {
  /*
The output format of the Dataproc Metastore service's logs.
Default value is `JSON`.
Possible values are: `LEGACY`, `JSON`.
*/
  LogFormat?: string;
}

export function Dataproc_MetastoreServiceTelemetryConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "LogFormat",
      "The output format of the Dataproc Metastore service's logs.\nDefault value is `JSON`.\nPossible values are: `LEGACY`, `JSON`.",
      [],
      false,
      false,
    ),
  ];
}
