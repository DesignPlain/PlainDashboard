import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_ConnectionSparkMetastoreServiceConfig,
  bigquery_ConnectionSparkMetastoreServiceConfig_GetTypes,
} from "./bigquery_ConnectionSparkMetastoreServiceConfig";
import {
  bigquery_ConnectionSparkSparkHistoryServerConfig,
  bigquery_ConnectionSparkSparkHistoryServerConfig_GetTypes,
} from "./bigquery_ConnectionSparkSparkHistoryServerConfig";

export interface bigquery_ConnectionSpark {
  /*
Dataproc Metastore Service configuration for the connection.
Structure is documented below.
*/
  metastoreServiceConfig?: bigquery_ConnectionSparkMetastoreServiceConfig;

  /*
(Output)
The account ID of the service created for the purpose of this connection.
*/
  serviceAccountId?: string;

  /*
Spark History Server configuration for the connection.
Structure is documented below.
*/
  sparkHistoryServerConfig?: bigquery_ConnectionSparkSparkHistoryServerConfig;
}

export function bigquery_ConnectionSpark_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "metastoreServiceConfig",
      "Dataproc Metastore Service configuration for the connection.\nStructure is documented below.",
      () => bigquery_ConnectionSparkMetastoreServiceConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountId",
      "(Output)\nThe account ID of the service created for the purpose of this connection.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "sparkHistoryServerConfig",
      "Spark History Server configuration for the connection.\nStructure is documented below.",
      () => bigquery_ConnectionSparkSparkHistoryServerConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
