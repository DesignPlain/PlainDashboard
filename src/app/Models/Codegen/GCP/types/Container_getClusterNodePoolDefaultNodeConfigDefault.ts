import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig,
  Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig_GetTypes,
} from "./Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig";

export interface Container_getClusterNodePoolDefaultNodeConfigDefault {
  // GCFS configuration for this node.
  GcfsConfigs?: Array<Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig>;

  // Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  LoggingVariant?: string;
}

export function Container_getClusterNodePoolDefaultNodeConfigDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "GcfsConfigs",
      "GCFS configuration for this node.",
      Container_getClusterNodePoolDefaultNodeConfigDefaultGcfsConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LoggingVariant",
      "Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.",
      [],
      true,
      false,
    ),
  ];
}
