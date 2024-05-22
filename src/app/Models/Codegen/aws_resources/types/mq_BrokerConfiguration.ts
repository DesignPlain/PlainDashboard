import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mq_BrokerConfiguration {
  // Revision of the Configuration.
  revision?: number;

  // The Configuration ID.
  id?: string;
}

export function mq_BrokerConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "revision",
      "Revision of the Configuration.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "The Configuration ID.",
      [],
      false,
      false,
    ),
  ];
}
