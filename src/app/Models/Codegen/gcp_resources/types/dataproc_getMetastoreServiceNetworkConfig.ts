import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
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
      dataproc_getMetastoreServiceNetworkConfigConsumer_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "customRoutesEnabled",
      "Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.",
      [],
      true,
      false,
    ),
  ];
}
