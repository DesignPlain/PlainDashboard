import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glacier_VaultNotification {
  // You can configure a vault to publish a notification for `ArchiveRetrievalCompleted` and `InventoryRetrievalCompleted` events.
  events?: Array<string>;

  // The SNS Topic ARN.
  snsTopic?: string;
}

export function glacier_VaultNotification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "snsTopic",
      "The SNS Topic ARN.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "events",
      "You can configure a vault to publish a notification for `ArchiveRetrievalCompleted` and `InventoryRetrievalCompleted` events.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
