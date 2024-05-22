import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_MetastoreServiceNetworkConfigConsumer,
  dataproc_MetastoreServiceNetworkConfigConsumer_GetTypes,
} from "./dataproc_MetastoreServiceNetworkConfigConsumer";

export interface dataproc_MetastoreServiceNetworkConfig {
  /*
The consumer-side network configuration for the Dataproc Metastore instance.
Structure is documented below.
*/
  consumers?: Array<dataproc_MetastoreServiceNetworkConfigConsumer>;

  // Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.
  customRoutesEnabled?: boolean;
}

export function dataproc_MetastoreServiceNetworkConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "consumers",
      "The consumer-side network configuration for the Dataproc Metastore instance.\nStructure is documented below.",
      dataproc_MetastoreServiceNetworkConfigConsumer_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "customRoutesEnabled",
      "Enables custom routes to be imported and exported for the Dataproc Metastore service's peered VPC network.",
      [],
      false,
      false,
    ),
  ];
}
