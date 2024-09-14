import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion,
  mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion_GetTypes,
} from "./mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion";

export interface mq_getBrokerEngineTypesBrokerEngineType {
  // The MQ engine type to return version details for.
  engineType?: string;

  // The list of engine versions.
  engineVersions?: Array<mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion>;
}

export function mq_getBrokerEngineTypesBrokerEngineType_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "engineType",
      "The MQ engine type to return version details for.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "engineVersions",
      "The list of engine versions.",
      () => mq_getBrokerEngineTypesBrokerEngineTypeEngineVersion_GetTypes(),
      true,
      false,
    ),
  ];
}
