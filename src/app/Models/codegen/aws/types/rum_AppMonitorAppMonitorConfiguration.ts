import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rum_AppMonitorAppMonitorConfiguration {
  // A list of pages in the CloudWatch RUM console that are to be displayed with a "favorite" icon.
  favoritePages?: Array<string>;

  // The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.
  identityPoolId?: string;

  // If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.
  includedPages?: Array<string>;

  // If you set this to `true`, RUM web client sets two cookies, a session cookie  and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.
  allowCookies?: boolean;

  // If you set this to `true`, RUM enables X-Ray tracing for the user sessions  that RUM samples. RUM adds an X-Ray trace header to allowed HTTP requests. It also records an X-Ray segment for allowed HTTP requests.
  enableXray?: boolean;

  // A list of URLs in your website or application to exclude from RUM data collection.
  excludedPages?: Array<string>;

  // The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.
  guestRoleArn?: string;

  // Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. Default value is `0.1`.
  sessionSampleRate?: number;

  // An array that lists the types of telemetry data that this app monitor is to collect. Valid values are `errors`, `performance`, and `http`.
  telemetries?: Array<string>;
}

export function rum_AppMonitorAppMonitorConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "favoritePages",
      'A list of pages in the CloudWatch RUM console that are to be displayed with a "favorite" icon.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "includedPages",
      "If this app monitor is to collect data from only certain pages in your application, this structure lists those pages.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableXray",
      "If you set this to `true`, RUM enables X-Ray tracing for the user sessions  that RUM samples. RUM adds an X-Ray trace header to allowed HTTP requests. It also records an X-Ray segment for allowed HTTP requests.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "excludedPages",
      "A list of URLs in your website or application to exclude from RUM data collection.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "telemetries",
      "An array that lists the types of telemetry data that this app monitor is to collect. Valid values are `errors`, `performance`, and `http`.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "identityPoolId",
      "The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "allowCookies",
      "If you set this to `true`, RUM web client sets two cookies, a session cookie  and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "guestRoleArn",
      "The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to RUM.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "sessionSampleRate",
      "Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. Default value is `0.1`.",
      () => [],
      false,
      false,
    ),
  ];
}
