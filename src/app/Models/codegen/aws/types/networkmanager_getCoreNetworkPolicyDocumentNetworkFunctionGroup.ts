import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkmanager_getCoreNetworkPolicyDocumentNetworkFunctionGroup {
  // This identifies the network function group container.
  name?: string;

  // This will be either `true`, that attachment acceptance is required, or `false`, that it is not required.
  requireAttachmentAcceptance?: boolean;

  // Optional description of the network function group.
  description?: string;
}

export function networkmanager_getCoreNetworkPolicyDocumentNetworkFunctionGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "This identifies the network function group container.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "requireAttachmentAcceptance",
      "This will be either `true`, that attachment acceptance is required, or `false`, that it is not required.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Optional description of the network function group.",
      () => [],
      false,
      false,
    ),
  ];
}
