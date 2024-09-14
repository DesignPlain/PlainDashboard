import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface s3_BucketV2Website {
  /*
JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)
describing redirect behavior and when redirects are applied.
*/
  routingRules?: string;

  // Absolute path to the document to return in case of a 4XX error.
  errorDocument?: string;

  // Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders.
  indexDocument?: string;

  // Hostname to redirect all website requests for this bucket to. Hostname can optionally be prefixed with a protocol (`http://` or `https://`) to use when redirecting requests. The default is the protocol that is used in the original request.
  redirectAllRequestsTo?: string;
}

export function s3_BucketV2Website_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "routingRules",
      "JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)\ndescribing redirect behavior and when redirects are applied.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "errorDocument",
      "Absolute path to the document to return in case of a 4XX error.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "indexDocument",
      "Amazon S3 returns this index document when requests are made to the root domain or any of the subfolders.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "redirectAllRequestsTo",
      "Hostname to redirect all website requests for this bucket to. Hostname can optionally be prefixed with a protocol (`http://` or `https://`) to use when redirecting requests. The default is the protocol that is used in the original request.",
      () => [],
      false,
      false,
    ),
  ];
}
