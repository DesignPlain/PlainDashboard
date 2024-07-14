import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketWebsiteConfigurationV2RoutingRule,
  s3_BucketWebsiteConfigurationV2RoutingRule_GetTypes,
} from "../types/s3_BucketWebsiteConfigurationV2RoutingRule";
import {
  s3_BucketWebsiteConfigurationV2ErrorDocument,
  s3_BucketWebsiteConfigurationV2ErrorDocument_GetTypes,
} from "../types/s3_BucketWebsiteConfigurationV2ErrorDocument";
import {
  s3_BucketWebsiteConfigurationV2IndexDocument,
  s3_BucketWebsiteConfigurationV2IndexDocument_GetTypes,
} from "../types/s3_BucketWebsiteConfigurationV2IndexDocument";
import {
  s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo,
  s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo_GetTypes,
} from "../types/s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo";

export interface BucketWebsiteConfigurationV2Args {
  /*
JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)
describing redirect behavior and when redirects are applied. Use this parameter when your routing rules contain empty String values (`""`) as seen in the example above.
*/
  routingRuleDetails?: string;

  // List of rules that define when a redirect is applied and the redirect behavior. See below.
  routingRules?: Array<s3_BucketWebsiteConfigurationV2RoutingRule>;

  // Name of the bucket.
  bucket?: string;

  // Name of the error document for the website. See below.
  errorDocument?: s3_BucketWebsiteConfigurationV2ErrorDocument;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;

  // Name of the index document for the website. See below.
  indexDocument?: s3_BucketWebsiteConfigurationV2IndexDocument;

  // Redirect behavior for every request to this bucket's website endpoint. See below. Conflicts with `error_document`, `index_document`, and `routing_rule`.
  redirectAllRequestsTo?: s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo;
}
export class BucketWebsiteConfigurationV2 extends Resource {
  // Name of the index document for the website. See below.
  public indexDocument?: s3_BucketWebsiteConfigurationV2IndexDocument;

  /*
JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)
describing redirect behavior and when redirects are applied. Use this parameter when your routing rules contain empty String values (`""`) as seen in the example above.
*/
  public routingRuleDetails?: string;

  // List of rules that define when a redirect is applied and the redirect behavior. See below.
  public routingRules?: Array<s3_BucketWebsiteConfigurationV2RoutingRule>;

  // Domain of the website endpoint. This is used to create Route 53 alias records.
  public websiteDomain?: string;

  // Name of the error document for the website. See below.
  public errorDocument?: s3_BucketWebsiteConfigurationV2ErrorDocument;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Redirect behavior for every request to this bucket's website endpoint. See below. Conflicts with `error_document`, `index_document`, and `routing_rule`.
  public redirectAllRequestsTo?: s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo;

  // Website endpoint.
  public websiteEndpoint?: string;

  // Name of the bucket.
  public bucket?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "errorDocument",
        "Name of the error document for the website. See below.",
        s3_BucketWebsiteConfigurationV2ErrorDocument_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account ID of the expected bucket owner.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "indexDocument",
        "Name of the index document for the website. See below.",
        s3_BucketWebsiteConfigurationV2IndexDocument_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "redirectAllRequestsTo",
        "Redirect behavior for every request to this bucket's website endpoint. See below. Conflicts with `error_document`, `index_document`, and `routing_rule`.",
        s3_BucketWebsiteConfigurationV2RedirectAllRequestsTo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "routingRuleDetails",
        'JSON array containing [routing rules](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-websiteconfiguration-routingrules.html)\ndescribing redirect behavior and when redirects are applied. Use this parameter when your routing rules contain empty String values (`""`) as seen in the example above.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routingRules",
        "List of rules that define when a redirect is applied and the redirect behavior. See below.",
        s3_BucketWebsiteConfigurationV2RoutingRule_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket.",
        [],
        true,
        true,
      ),
    ];
  }
}
