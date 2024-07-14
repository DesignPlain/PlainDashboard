import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface costexplorer_AnomalySubscriptionSubscriber {
  // The address of the subscriber. If type is `SNS`, this will be the arn of the sns topic. If type is `EMAIL`, this will be the destination email address.
  address?: string;

  // The type of subscription. Valid Values: `SNS` | `EMAIL`.
  type?: string;
}

export function costexplorer_AnomalySubscriptionSubscriber_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "address",
      "The address of the subscriber. If type is `SNS`, this will be the arn of the sns topic. If type is `EMAIL`, this will be the destination email address.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of subscription. Valid Values: `SNS` | `EMAIL`.",
      [],
      true,
      false,
    ),
  ];
}
