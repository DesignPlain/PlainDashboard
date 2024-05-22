import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface vertex_AiIndexEndpointPrivateServiceConnectConfig {
  // A list of Projects from which the forwarding rule will target the service attachment.
  projectAllowlists?: Array<string>;

  // If set to true, the IndexEndpoint is created without private service access.
  enablePrivateServiceConnect?: boolean;
}

export function vertex_AiIndexEndpointPrivateServiceConnectConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "projectAllowlists",
      "A list of Projects from which the forwarding rule will target the service attachment.",
      InputType_String_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePrivateServiceConnect",
      "If set to true, the IndexEndpoint is created without private service access.",
      [],
      true,
      true,
    ),
  ];
}
