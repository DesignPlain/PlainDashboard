import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface opensearch_OutboundConnectionRemoteDomainInfo {
  // The name of the remote domain.
  domainName?: string;

  // The Account ID of the owner of the remote domain.
  ownerId?: string;

  // The region of the remote domain.
  region?: string;
}

export function opensearch_OutboundConnectionRemoteDomainInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domainName",
      "The name of the remote domain.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ownerId",
      "The Account ID of the owner of the remote domain.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "region",
      "The region of the remote domain.",
      () => [],
      true,
      true,
    ),
  ];
}
