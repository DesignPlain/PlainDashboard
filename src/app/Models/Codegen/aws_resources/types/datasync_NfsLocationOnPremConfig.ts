import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface datasync_NfsLocationOnPremConfig {
  // List of Amazon Resource Names (ARNs) of the DataSync Agents used to connect to the NFS server.
  agentArns?: Array<string>;
}

export function datasync_NfsLocationOnPremConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "agentArns",
      "List of Amazon Resource Names (ARNs) of the DataSync Agents used to connect to the NFS server.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
