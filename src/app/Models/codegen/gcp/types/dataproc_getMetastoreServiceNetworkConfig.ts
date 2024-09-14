import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_getMetastoreServiceNetworkConfigConsumer,
  dataproc_getMetastoreServiceNetworkConfigConsumer_GetTypes,
} from "./dataproc_getMetastoreServiceNetworkConfigConsumer";

export interface dataproc_getMetastoreServiceNetworkConfig {
  // The consumer-side network configuration for the Dataproc Metastore instance.
  consumers?: Array<dataproc_getMetastoreServiceNetworkConfigConsumer>;

  // Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  customRoutesEnabled?: boolean;
}

export function dataproc_getMetastoreServiceNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "consumers",
      "The consumer-side network configuration for the Dataproc Metastore instance.",
      () => dataproc_getMetastoreServiceNetworkConfigConsumer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "customRoutesEnabled",
      "Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.",
      () => [],
      true,
      false,
    ),
  ];
}
