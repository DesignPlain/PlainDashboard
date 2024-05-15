import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigquery_ConnectionSparkSparkHistoryServerConfig,
  Bigquery_ConnectionSparkSparkHistoryServerConfig_GetTypes,
} from "./Bigquery_ConnectionSparkSparkHistoryServerConfig";
import {
  Bigquery_ConnectionSparkMetastoreServiceConfig,
  Bigquery_ConnectionSparkMetastoreServiceConfig_GetTypes,
} from "./Bigquery_ConnectionSparkMetastoreServiceConfig";

export interface Bigquery_ConnectionSpark {
  /*
Spark History Server configuration for the connection.
Structure is documented below.
*/
  SparkHistoryServerConfig?: Bigquery_ConnectionSparkSparkHistoryServerConfig;

  /*
Dataproc Metastore Service configuration for the connection.
Structure is documented below.
*/
  MetastoreServiceConfig?: Bigquery_ConnectionSparkMetastoreServiceConfig;

  /*
(Output)
The account ID of the service created for the purpose of this connection.
*/
  ServiceAccountId?: string;
}

export function Bigquery_ConnectionSpark_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "SparkHistoryServerConfig",
      "Spark History Server configuration for the connection.\nStructure is documented below.",
      Bigquery_ConnectionSparkSparkHistoryServerConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "MetastoreServiceConfig",
      "Dataproc Metastore Service configuration for the connection.\nStructure is documented below.",
      Bigquery_ConnectionSparkMetastoreServiceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountId",
      "(Output)\nThe account ID of the service created for the purpose of this connection.",
      [],
      false,
      false,
    ),
  ];
}
