import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface keyspaces_TableClientSideTimestamps {
  // Shows how to enable client-side timestamps settings for the specified table. Valid values: `ENABLED`.
  status?: string;
}

export function keyspaces_TableClientSideTimestamps_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "status",
      "Shows how to enable client-side timestamps settings for the specified table. Valid values: `ENABLED`.",
      [],
      true,
      false,
    ),
  ];
}
