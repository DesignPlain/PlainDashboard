import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventEndpointReplicationConfig {
  // The state of event replication. Valid values: `ENABLED`, `DISABLED`. The default state is `ENABLED`, which means you must supply a `role_arn`. If you don't have a `role_arn` or you don't want event replication enabled, set `state` to `DISABLED`.
  state?: string;
}

export function cloudwatch_EventEndpointReplicationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "The state of event replication. Valid values: `ENABLED`, `DISABLED`. The default state is `ENABLED`, which means you must supply a `role_arn`. If you don't have a `role_arn` or you don't want event replication enabled, set `state` to `DISABLED`.",
      [],
      false,
      false,
    ),
  ];
}
