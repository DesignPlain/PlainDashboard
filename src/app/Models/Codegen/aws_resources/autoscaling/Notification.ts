import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface NotificationArgs {
  // List of AutoScaling Group Names
  groupNames?: Array<string>;

  /*
List of Notification Types that trigger
notifications. Acceptable values are documented [in the AWS documentation here](https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_NotificationConfiguration.html)
*/
  notifications?: Array<string>;

  // Topic ARN for notifications to be sent through
  topicArn?: string;
}
export class Notification extends Resource {
  // Topic ARN for notifications to be sent through
  public topicArn?: string;

  // List of AutoScaling Group Names
  public groupNames?: Array<string>;

  /*
List of Notification Types that trigger
notifications. Acceptable values are documented [in the AWS documentation here](https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_NotificationConfiguration.html)
*/
  public notifications?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "groupNames",
        "List of AutoScaling Group Names",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notifications",
        "List of Notification Types that trigger\nnotifications. Acceptable values are documented [in the AWS documentation here](https://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_NotificationConfiguration.html)",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "topicArn",
        "Topic ARN for notifications to be sent through",
        [],
        true,
        true,
      ),
    ];
  }
}
