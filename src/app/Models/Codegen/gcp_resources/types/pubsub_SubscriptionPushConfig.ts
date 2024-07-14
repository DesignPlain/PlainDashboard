import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  pubsub_SubscriptionPushConfigNoWrapper,
  pubsub_SubscriptionPushConfigNoWrapper_GetTypes,
} from "./pubsub_SubscriptionPushConfigNoWrapper";
import {
  pubsub_SubscriptionPushConfigOidcToken,
  pubsub_SubscriptionPushConfigOidcToken_GetTypes,
} from "./pubsub_SubscriptionPushConfigOidcToken";

export interface pubsub_SubscriptionPushConfig {
  /*
Endpoint configuration attributes.
Every endpoint has a set of API supported attributes that can
be used to control different aspects of the message delivery.
The currently supported attribute is x-goog-version, which you
can use to change the format of the pushed message. This
attribute indicates the version of the data expected by
the endpoint. This controls the shape of the pushed message
(i.e., its fields and metadata). The endpoint version is
based on the version of the Pub/Sub API.
If not present during the subscriptions.create call,
it will default to the version of the API used to make
such call. If not present during a subscriptions.modifyPushConfig
call, its value will not be changed. subscriptions.get
calls will always return a valid version, even if the
subscription was created without this attribute.
The possible values for this attribute are:
- v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.
- v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.
*/
  attributes?: Map<string, string>;

  /*
When set, the payload to the push endpoint is not wrapped.Sets the
`data` field as the HTTP body for delivery.
Structure is documented below.
*/
  noWrapper?: pubsub_SubscriptionPushConfigNoWrapper;

  /*
If specified, Pub/Sub will generate and attach an OIDC JWT token as
an Authorization header in the HTTP request for every pushed message.
Structure is documented below.
*/
  oidcToken?: pubsub_SubscriptionPushConfigOidcToken;

  /*
A URL locating the endpoint to which messages should be pushed.
For example, a Webhook endpoint might use
"https://example.com/push".
*/
  pushEndpoint?: string;
}

export function pubsub_SubscriptionPushConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "attributes",
      "Endpoint configuration attributes.\nEvery endpoint has a set of API supported attributes that can\nbe used to control different aspects of the message delivery.\nThe currently supported attribute is x-goog-version, which you\ncan use to change the format of the pushed message. This\nattribute indicates the version of the data expected by\nthe endpoint. This controls the shape of the pushed message\n(i.e., its fields and metadata). The endpoint version is\nbased on the version of the Pub/Sub API.\nIf not present during the subscriptions.create call,\nit will default to the version of the API used to make\nsuch call. If not present during a subscriptions.modifyPushConfig\ncall, its value will not be changed. subscriptions.get\ncalls will always return a valid version, even if the\nsubscription was created without this attribute.\nThe possible values for this attribute are:\n- v1beta1: uses the push format defined in the v1beta1 Pub/Sub API.\n- v1 or v1beta2: uses the push format defined in the v1 Pub/Sub API.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "noWrapper",
      "When set, the payload to the push endpoint is not wrapped.Sets the\n`data` field as the HTTP body for delivery.\nStructure is documented below.",
      pubsub_SubscriptionPushConfigNoWrapper_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "oidcToken",
      "If specified, Pub/Sub will generate and attach an OIDC JWT token as\nan Authorization header in the HTTP request for every pushed message.\nStructure is documented below.",
      pubsub_SubscriptionPushConfigOidcToken_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pushEndpoint",
      'A URL locating the endpoint to which messages should be pushed.\nFor example, a Webhook endpoint might use\n"https://example.com/push".',
      [],
      true,
      false,
    ),
  ];
}
