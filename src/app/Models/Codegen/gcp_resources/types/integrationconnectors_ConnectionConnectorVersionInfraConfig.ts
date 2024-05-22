import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface integrationconnectors_ConnectionConnectorVersionInfraConfig {
  /*
(Output)
Max QPS supported by the connector version before throttling of requests.
*/
  ratelimitThreshold?: string;
}

export function integrationconnectors_ConnectionConnectorVersionInfraConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ratelimitThreshold",
      "(Output)\nMax QPS supported by the connector version before throttling of requests.",
      [],
      false,
      false,
    ),
  ];
}
