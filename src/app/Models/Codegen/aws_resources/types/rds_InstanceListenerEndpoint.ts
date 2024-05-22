import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface rds_InstanceListenerEndpoint {
  // Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
  hostedZoneId?: string;

  // The port on which the DB accepts connections.
  port?: number;

  // Specifies the DNS address of the DB instance.
  address?: string;
}

export function rds_InstanceListenerEndpoint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "hostedZoneId",
      "Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port on which the DB accepts connections.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "address",
      "Specifies the DNS address of the DB instance.",
      [],
      false,
      false,
    ),
  ];
}
